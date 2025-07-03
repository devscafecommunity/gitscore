export function calculateGitScore(userData: any, reposData: any[]) {
  const stars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0)
  const forks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0)
  const followers = userData.followers
  const publicRepos = userData.public_repos
  const publicGists = userData.public_gists

  // Calcular contribuições baseado em dados existentes ao invés de aleatório
  const contributions = Math.min(
    reposData.reduce((acc, repo) => acc + repo.open_issues_count, 0) * 10 + 
    publicRepos * 15 + 
    publicGists * 5,
    2000
  )

  // Calcular "frescor" baseado na data do último push (ao invés de aleatório)
  const now = new Date()
  const lastPushDates = reposData
    .filter(repo => repo.pushed_at)
    .map(repo => new Date(repo.pushed_at))
    .sort((a, b) => b.getTime() - a.getTime())
  
  const daysSinceLastCommit = lastPushDates.length > 0 
    ? Math.min(Math.floor((now.getTime() - lastPushDates[0].getTime()) / (1000 * 60 * 60 * 24)), 365)
    : 365

  const score = Math.max(
    0,
    stars * 3 +
      forks * 4 +
      followers * 2 +
      contributions * 2 +
      publicRepos * 1.5 +
      publicGists * 1 -
      daysSinceLastCommit * 0.5,
  )

  return Math.round(score)
}

export function generateBadges(userData: any, reposData: any[]) {
  const stars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0)
  const forks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0)
  
  // Calcular contribuições baseado em dados existentes ao invés de aleatório
  const contributions = Math.min(
    reposData.reduce((acc, repo) => acc + repo.open_issues_count, 0) * 10 + 
    userData.public_repos * 15 + 
    userData.public_gists * 5,
    2000
  )

  // Calcular linguagens únicas
  const languages = new Set(reposData.filter((repo) => repo.language).map((repo) => repo.language))

  const badges = [
    {
      name: "Super Star",
      description: `Você recebeu ${stars.toLocaleString()} estrelas em seus repositórios públicos.`,
      rank: getRank(stars, [0, 10, 50, 100, 200, 500, 800, 1000, 2000]),
      value: stars,
      maxValue: 2000,
      icon: "star",
    },
    {
      name: "Fork Master",
      description: `Seus projetos foram bifurcados ${forks.toLocaleString()} vezes.`,
      rank: getRank(forks, [0, 5, 20, 50, 100, 200, 400, 600, 1000]),
      value: forks,
      maxValue: 1000,
      icon: "fork",
    },
    {
      name: "Super Committer",
      description: `Você fez ${contributions.toLocaleString()} contribuições no último ano.`,
      rank: getRank(contributions, [0, 100, 250, 500, 750, 1000, 1500, 2000, 3000]),
      value: contributions,
      maxValue: 3000,
      icon: "zap",
    },
    {
      name: "Multilingue",
      description: `Você programa em ${languages.size} linguagens diferentes.`,
      rank: getRank(languages.size, [0, 2, 3, 4, 5, 6, 8, 10, 15]),
      value: languages.size,
      maxValue: 15,
      icon: "code",
    },
    {
      name: "Influencer",
      description: `Você tem ${userData.followers.toLocaleString()} seguidores no GitHub.`,
      rank: getRank(userData.followers, [0, 10, 50, 100, 250, 500, 1000, 2000, 5000]),
      value: userData.followers,
      maxValue: 5000,
      icon: "users",
    },
    {
      name: "Veterano",
      description: `Sua conta GitHub existe há ${getAccountAge(userData.created_at)} anos.`,
      rank: getRank(getAccountAge(userData.created_at), [0, 1, 2, 3, 4, 5, 6, 8, 10]),
      value: getAccountAge(userData.created_at),
      maxValue: 10,
      icon: "calendar",
    },
  ]

  return badges
}

function getRank(value: number, thresholds: number[]): string {
  const ranks = ["F", "E", "D", "C", "B", "A", "S", "SS", "SS+"]
  let rank = 0

  for (let i = 0; i < thresholds.length - 1; i++) {
    if (value >= thresholds[i] && value < thresholds[i + 1]) {
      rank = i
      break
    }
  }

  if (value >= thresholds[thresholds.length - 1]) {
    rank = thresholds.length - 1
  }

  return ranks[Math.min(rank, ranks.length - 1)]
}

function getAccountAge(createdAt: string): number {
  const created = new Date(createdAt)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - created.getTime())
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
  return diffYears
}
