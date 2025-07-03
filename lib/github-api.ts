import { calculateGitScore, generateBadges } from "@/lib/score-calculator"

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
}

interface ExtendedRequestInit extends RequestInit {
  next?: NextFetchRequestConfig;
}

// Cache para scores calculados
const scoreCache = new Map<string, { 
  score: number; 
  badges: any[]; 
  timestamp: number; 
  userDataHash: string; 
}>()

const CACHE_DURATION = 1000 * 60 * 60 * 24 // 24 horas

// Função para gerar hash dos dados do usuário (para detectar mudanças)
function generateUserDataHash(userData: any, reposData: any[]): string {
  const hashData = {
    followers: userData.followers,
    public_repos: userData.public_repos,
    public_gists: userData.public_gists,
    stars: reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0),
    forks: reposData.reduce((acc: number, repo: any) => acc + repo.forks_count, 0),
    lastPush: reposData.length > 0 ? reposData[0].pushed_at : null,
  }
  return JSON.stringify(hashData)
}

// Função para obter score com cache
export async function getCachedScore(username: string): Promise<{ score: number; badges: any[] }> {
  const now = Date.now()
  const userKey = username.toLowerCase()
  
  const userData = await fetchGitHubUser(username)
  const reposData = await fetchUserRepos(username)
  const currentHash = generateUserDataHash(userData, reposData)
  
  // Verificar se existe cache válido
  const cached = scoreCache.get(userKey)
  if (cached && 
      (now - cached.timestamp) < CACHE_DURATION && 
      cached.userDataHash === currentHash) {
    console.log(`Using cached score for ${username}`)
    return { score: cached.score, badges: cached.badges }
  }
  
  // Calcular novo score
  // console.log(`Calculating new score for ${username}`)
  const score = calculateGitScore(userData, reposData)
  const badges = generateBadges(userData, reposData)
  
  // Armazenar no cache
  scoreCache.set(userKey, {
    score,
    badges,
    timestamp: now,
    userDataHash: currentHash
  })
  
  return { score, badges }
}

export async function fetchGitHubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
    next: { revalidate: 3600 }, // Cache por 1 hora
  } as ExtendedRequestInit)

  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.status}`)
  }

  return response.json()
}

export async function fetchUserRepos(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
    next: { revalidate: 3600 }, // Cache por 1 hora
  } as ExtendedRequestInit)

  if (!response.ok) {
    throw new Error(`Failed to fetch repos: ${response.status}`)
  }

  return response.json()
}

export async function fetchUserContributions(username: string) {
  // Esta função poderia usar GraphQL para buscar contribuições
  // Por simplicidade, vamos simular os dados
  return {
    totalContributions: Math.floor(Math.random() * 2000) + 500,
    contributionsLastYear: Math.floor(Math.random() * 1000) + 200,
  }
}

// Buscar repositórios mais populares para encontrar desenvolvedores top
export async function fetchPopularRepos(language?: string, page = 1, perPage = 30) {
  const languageQuery = language ? `+language:${language}` : ""
  const query = `stars:>1000${languageQuery}`
  
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache por 1 hora
    } as ExtendedRequestInit
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch popular repos: ${response.status}`)
  }

  return response.json()
}

// Buscar desenvolvedores com mais seguidores
export async function fetchPopularDevelopers(location?: string, language?: string, page = 1, perPage = 30) {
  let query = "type:user followers:>1000"
  
  if (location) {
    query += `+location:${location}`
  }
  
  if (language) {
    query += `+language:${language}`
  }

  const response = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&sort=followers&order=desc&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache por 1 hora
    } as ExtendedRequestInit
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch popular developers: ${response.status}`)
  }

  return response.json()
}

// Função para obter rank baseado no score
export function getRankFromScore(score: number): string {
  if (score >= 4000) return "SS+"
  if (score >= 3500) return "SS"
  if (score >= 3000) return "S"
  if (score >= 2500) return "A+"
  if (score >= 2000) return "A"
  if (score >= 1500) return "B+"
  if (score >= 1000) return "B"
  if (score >= 500) return "C+"
  if (score >= 200) return "C"
  return "D"
}

// Função para gerar leaderboard real baseado nos desenvolvedores populares
export async function fetchLeaderboardData(filters: {
  page?: number,
  country?: string,
  language?: string,
  minScore?: number,
  maxScore?: number
} = {}) {
  try {
    const { page = 1, country, language, minScore, maxScore } = filters
    
    // Buscar desenvolvedores populares
    const developersData = await fetchPopularDevelopers(country, language, page, 30)
    
    // Para cada desenvolvedor, buscar dados detalhados e calcular score
    const leaderboardPromises = developersData.items.slice(0, 20).map(async (dev: any, index: number) => {
      try {
        const [userDetails, repos] = await Promise.all([
          fetchGitHubUser(dev.login),
          fetchUserRepos(dev.login)
        ])
        
        const { score, badges } = await getCachedScore(dev.login)
        const rank = getRankFromScore(score)
        
        // Filtrar por score se especificado
        if (minScore && score < minScore) return null
        if (maxScore && score > maxScore) return null
        
        const topRepo = repos.length > 0 
          ? repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)[0]
          : null
        
        return {
          rank: (page - 1) * 20 + index + 1,
          username: userDetails.login,
          name: userDetails.name || userDetails.login,
          score,
          avatar: userDetails.avatar_url,
          topRepo: topRepo?.name || "N/A",
          stars: repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0),
          forks: repos.reduce((acc: number, repo: any) => acc + repo.forks_count, 0),
          followers: userDetails.followers,
          country: userDetails.location || "Unknown",
          topLanguage: getTopLanguage(repos),
          rankBadge: rank
        }
      } catch (error) {
        console.error(`Error fetching data for ${dev.login}:`, error)
        return null
      }
    })
    
    const results = await Promise.all(leaderboardPromises)
    const validResults = results.filter(Boolean)
    
    // Ordenar por score
    validResults.sort((a: any, b: any) => b.score - a.score)
    
    // Re-atribuir ranks baseado na ordenação final
    validResults.forEach((user: any, index: number) => {
      user.rank = (page - 1) * 20 + index + 1
    })
    
    return {
      users: validResults,
      totalCount: developersData.total_count,
      hasNextPage: validResults.length === 20
    }
  } catch (error) {
    console.error('Error fetching leaderboard data:', error)
    // Fallback para dados simulados em caso de erro
    return getFallbackLeaderboardData(filters)
  }
}

// Função auxiliar para obter a linguagem mais usada
function getTopLanguage(repos: any[]): string {
  const languages: { [key: string]: number } = {}
  
  repos.forEach(repo => {
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1
    }
  })
  
  const topLang = Object.entries(languages)
    .sort(([,a], [,b]) => (b as number) - (a as number))[0]
  
  return topLang ? topLang[0] : "JavaScript"
}

// Dados de fallback em caso de erro na API
function getFallbackLeaderboardData(filters: any) {
  const fallbackUsers = [
    {
      rank: 1,
      username: "torvalds",
      name: "Linus Torvalds",
      score: 4892,
      avatar: "/placeholder.svg",
      topRepo: "linux",
      stars: 180000,
      forks: 45000,
      followers: 150000,
      country: "Finland",
      topLanguage: "C",
      rankBadge: "SS+"
    },
    {
      rank: 2,
      username: "gaearon",
      name: "Dan Abramov",
      score: 4156,
      avatar: "/placeholder.svg",
      topRepo: "react",
      stars: 45000,
      forks: 12000,
      followers: 85000,
      country: "United States",
      topLanguage: "JavaScript",
      rankBadge: "SS"
    },
    // ... mais usuários de fallback
  ]
  
  return {
    users: fallbackUsers,
    totalCount: fallbackUsers.length,
    hasNextPage: false
  }
}

// Função para buscar dados do Hall da Fama
export async function fetchHallOfFameData() {
  try {
    // Buscar desenvolvedores com mais seguidores (representando influência global)
    const topInfluential = await fetch(`https://api.github.com/search/users?q=followers:>1000&sort=followers&order=desc&per_page=10`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    } as ExtendedRequestInit)

    // Buscar desenvolvedores com mais repositórios públicos (representando produtividade)
    const topProductive = await fetch(`https://api.github.com/search/users?q=repos:>50&sort=repositories&order=desc&per_page=10`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    } as ExtendedRequestInit)

    // Buscar usuários recentemente ativos (últimos commits)
    const topActive = await fetch(`https://api.github.com/search/users?q=type:user&sort=joined&order=desc&per_page=10`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    } as ExtendedRequestInit)

    if (!topInfluential.ok || !topProductive.ok || !topActive.ok) {
      throw new Error('Failed to fetch hall of fame data')
    }

    const influential = await topInfluential.json()
    const productive = await topProductive.json()
    const active = await topActive.json()

    // Buscar dados completos de cada usuário
    const fetchUserDetails = async (users: any[]) => {
      const userPromises = users.map(async (user) => {
        try {
          const userDetails = await fetchGitHubUser(user.login)
          return userDetails
        } catch (error) {
          console.error(`Error fetching user ${user.login}:`, error)
          return user // Retorna dados básicos se falhar
        }
      })
      return Promise.all(userPromises)
    }

    const [detailedInfluential, detailedProductive, detailedActive] = await Promise.all([
      fetchUserDetails(influential.items || []),
      fetchUserDetails(productive.items || []),
      fetchUserDetails(active.items || [])
    ])

    return {
      topInfluential: detailedInfluential,
      topProductive: detailedProductive,
      topActive: detailedActive
    }
  } catch (error) {
    console.error('Error fetching hall of fame data:', error)
    return {
      topInfluential: [],
      topProductive: [],
      topActive: []
    }
  }
}

export async function fetchTopRepositoriesByLanguage(language: string) {
  try {
    const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    } as ExtendedRequestInit)

    if (!response.ok) {
      throw new Error(`Failed to fetch ${language} repositories`)
    }

    const data = await response.json()
    return data.items || []
  } catch (error) {
    console.error(`Error fetching ${language} repositories:`, error)
    return []
  }
}
