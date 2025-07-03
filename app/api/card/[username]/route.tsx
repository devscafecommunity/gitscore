import { type NextRequest, NextResponse } from "next/server"
import { fetchGitHubUser, fetchUserRepos } from "@/lib/github-api"
import { calculateGitScore } from "@/lib/score-calculator"

export async function GET(request: NextRequest, { params }: { params: { username: string } }) {
  try {
    const userData = await fetchGitHubUser(params.username)
    const reposData = await fetchUserRepos(params.username)
    const score = calculateGitScore(userData, reposData)

    // Gerar SVG do card
    const svg = generateScoreCard({
      username: userData.login,
      name: userData.name || userData.login,
      score,
      avatar: userData.avatar_url,
      followers: userData.followers,
      repos: userData.public_repos,
      stars: reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0),
    })

    return new NextResponse(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600", // Cache por 1 hora
      },
    })
  } catch (error) {
    // Retornar card de erro
    const errorSvg = generateErrorCard(params.username)
    return new NextResponse(errorSvg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=300", // Cache menor para erros
      },
    })
  }
}

// function generateScoreCard(data: {
//   username: string
//   name: string
//   score: number
//   avatar: string
//   followers: number
//   repos: number
//   stars: number
// }) {
//   const getRankInfo = (score: number) => {
//     if (score >= 4000) return { rank: "SS+", color: "#f59e0b" }
//     if (score >= 3000) return { rank: "SS", color: "#8b5cf6" }
//     if (score >= 2000) return { rank: "S", color: "#3b82f6" }
//     if (score >= 1000) return { rank: "A", color: "#10b981" }
//     if (score >= 500) return { rank: "B", color: "#f59e0b" }
//     if (score >= 200) return { rank: "C", color: "#f97316" }
//     if (score >= 50) return { rank: "D", color: "#ef4444" }
//     return { rank: "F", color: "#6b7280" }
//   }

//   const { rank, color } = getRankInfo(data.score)

//   return `
//     <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
//       <defs>
//         <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
//           <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
//         </linearGradient>
//         <linearGradient id="header" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
//           <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
//         </linearGradient>
//       </defs>
      
//       <!-- Background -->
//       <rect width="400" height="200" fill="url(#bg)" rx="12"/>
      
//       <!-- Header -->
//       <rect width="400" height="50" fill="url(#header)" rx="12"/>
//       <rect width="400" height="38" fill="url(#header)"/>
      
//       <!-- GitScore Logo -->
//       <text x="20" y="32" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white">
//         🏆 GitScore
//       </text>
      
//       <!-- Rank Badge -->
//       <rect x="320" y="15" width="60" height="25" fill="${color}" rx="12"/>
//       <text x="350" y="32" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
//         ${rank}
//       </text>
      
//       <!-- User Info -->
//       <circle cx="40" cy="90" r="25" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2"/>
//       <image href="${data.avatar}" x="15" y="65" width="50" height="50" clip-path="circle(25px at center)"/>
//       <rect x="15" y="65" width="50" height="50" fill="none" stroke="#cbd5e1" strokeWidth="2" clip-path="circle(25px at center)"/>
//       <text x="40" y="95" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle">
//         ${data.name.charAt(0).toUpperCase()}
//       </text>
      
//       <text x="80" y="85" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1e293b">
//         ${data.name}
//       </text>
//       <text x="80" y="105" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b">
//         @${data.username}
//       </text>
      
//       <!-- Score -->
//       <text x="320" y="85" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#3b82f6" textAnchor="middle">
//         ${data.score.toLocaleString()}
//       </text>
//       <text x="280" y="105" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b" textAnchor="middle">
//         GitScore Points
//       </text>
      
//       <!-- Stats -->
//       <text x="20" y="140" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b">
//         ⭐ ${data.stars.toLocaleString()} stars
//       </text>
//       <text x="20" y="160" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b">
//         👥 ${data.followers.toLocaleString()} followers
//       </text>
//       <text x="20" y="180" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b">
//         📁 ${data.repos} repositories
//       </text>
      
//       <!-- URL -->
//       <text x="240" y="180" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" textAnchor="end">
//         gitscore.devscafe.org
//       </text>
//     </svg>
//   `
// }

function generateScoreCard(data: {
  username: string
  name: string
  score: number
  avatar: string
  followers: number
  repos: number
  stars: number
}) {
  const getRankInfo = (score: number) => {
    if (score >= 4000) return { rank: "SS+", color: "#facc15" }
    if (score >= 3000) return { rank: "SS", color: "#a855f7" }
    if (score >= 2000) return { rank: "S", color: "#3b82f6" }
    if (score >= 1000) return { rank: "A", color: "#10b981" }
    if (score >= 500) return { rank: "B", color: "#f59e0b" }
    if (score >= 200) return { rank: "C", color: "#f97316" }
    if (score >= 50) return { rank: "D", color: "#ef4444" }
    return { rank: "F", color: "#9ca3af" }
  }

  const { rank, color } = getRankInfo(data.score)

  return `
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <linearGradient id="header" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#8b5cf6"/>
        </linearGradient>
        <clipPath id="avatarClip">
          <circle cx="40" cy="100" r="25"/>
        </clipPath>
      </defs>

      <!-- Background -->
      <rect width="400" height="200" rx="16" fill="url(#bg)" />

      <!-- Header -->
      <rect x="0" y="0" width="400" height="48" rx="16" fill="url(#header)" />
      <text x="20" y="30" font-family="Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ffffff">
        🏆 GitScore
      </text>

      <!-- Rank badge -->
      <rect x="320" y="12" width="60" height="24" rx="12" fill="${color}" />
      <text x="350" y="29" font-family="Segoe UI, sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">
        ${rank}
      </text>

      <!-- Avatar -->
      <image href="${data.avatar}" x="15" y="75" width="50" height="50" clip-path="url(#avatarClip)" />
      <circle cx="40" cy="100" r="25" fill="none" stroke="#cbd5e1" stroke-width="2"/>

      <!-- User Info -->
      <text x="80" y="92" font-family="Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#1e293b">
        ${data.name}
      </text>
      <text x="80" y="110" font-family="Segoe UI, sans-serif" font-size="13" fill="#64748b">
        @${data.username}
      </text>

      <!-- Score -->
      <text x="320" y="92" font-family="Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#3b82f6" text-anchor="middle">
        ${data.score.toLocaleString()}
      </text>
      <text x="320" y="112" font-family="Segoe UI, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">
        GitScore
      </text>

      <!-- Stats -->
      <g font-family="Segoe UI, sans-serif" font-size="12" fill="#475569">
        <text x="20" y="145">⭐ ${data.stars.toLocaleString()} stars</text>
        <text x="20" y="165">👥 ${data.followers.toLocaleString()} followers</text>
        <text x="20" y="185">📁 ${data.repos} repositories</text>
      </g>

      <!-- Footer URL -->
      <text x="380" y="185" font-family="Segoe UI, sans-serif" font-size="10" fill="#94a3b8" text-anchor="end">
        gitscore.devscafe.org
      </text>
    </svg>
  `
}


function generateErrorCard(username: string) {
  return `
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#fee2e2" rx="12"/>
      <text x="200" y="80" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#dc2626" textAnchor="middle">
        Usuário não encontrado
      </text>
      <text x="200" y="110" fontFamily="Arial, sans-serif" fontSize="14" fill="#7f1d1d" textAnchor="middle">
        @${username}
      </text>
      <text x="200" y="140" fontFamily="Arial, sans-serif" fontSize="12" fill="#991b1b" textAnchor="middle">
        Verifique se o usuário existe no GitHub
      </text>
    </svg>
  `
}
