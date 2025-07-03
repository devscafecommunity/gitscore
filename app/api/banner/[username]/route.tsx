import { type NextRequest, NextResponse } from "next/server"
import { fetchGitHubUser, fetchUserRepos } from "@/lib/github-api"
import { calculateGitScore, generateBadges } from "@/lib/score-calculator"

export async function GET(request: NextRequest, { params }: { params: { username: string } }) {
  try {
    const userData = await fetchGitHubUser(params.username)
    const reposData = await fetchUserRepos(params.username)
    const score = calculateGitScore(userData, reposData)
    const badges = generateBadges(userData, reposData).slice(0, 3) // Mostrar apenas 3 badges no banner

    const svg = generateScoreCard({
      username: userData.login,
      name: userData.name || userData.login,
      score,
      avatar: userData.avatar_url,
      followers: userData.followers,
      repos: userData.public_repos,
      stars: reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      badges,
    })

    return new NextResponse(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch (error) {
    const errorSvg = generateErrorCard(params.username)
    return new NextResponse(errorSvg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=300",
      },
    })
  }
}

function generateScoreCard(data: {
  username: string
  name: string
  score: number
  avatar: string
  followers: number
  repos: number
  stars: number
  badges: {
    name: string
    description: string
    rank: string
    icon: string
  }[]
}) {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

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

  const badgeElements = data.badges
    .slice(0, 3)
    .map((badge, i) => {
      const x = 480 + (i * 85)
      const badgeColor = getBadgeColor(badge.rank)
      return `
        <g transform="translate(${x}, 185)">
          <rect width="80" height="24" rx="12" fill="${badgeColor}" opacity="0.9"/>
          <text x="40" y="16" font-size="10" fill="white" font-family="Segoe UI, sans-serif" text-anchor="middle" font-weight="550">
            ${badge.name}
          </text>
        </g>
      `
    })
    .join("\n")

  function getBadgeColor(rank: string): string {
    switch (rank) {
      case "SS+": return "#facc15"
      case "SS": return "#a855f7"
      case "S": return "#3b82f6"
      case "A": return "#10b981"
      case "B": return "#f59e0b"
      case "C": return "#f97316"
      case "D": return "#ef4444"
      default: return "#6b7280"
    }
  }

  return `
    <svg width="800" height="250" viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <circle cx="90" cy="125" r="40"/>
        </clipPath>
      </defs>

      <rect width="800" height="250" rx="16" fill="url(#bg)" />

      <!-- Header -->
      <rect x="0" y="0" width="800" height="50" rx="16" fill="url(#header)" />
      <text x="30" y="32" font-family="Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ffffff">
        🏆 GitScore Profile Card
      </text>
      <rect x="720" y="12" width="60" height="26" rx="13" fill="${color}" />
      <text x="750" y="30" font-family="Segoe UI, sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">
        ${rank}
      </text>

      <!-- Avatar -->
      <image href="${data.avatar}" x="50" y="85" width="80" height="80" clip-path="url(#avatarClip)" />
      <circle cx="90" cy="125" r="40" fill="none" stroke="#cbd5e1" stroke-width="3"/>

      <!-- User Info -->
      <text x="150" y="110" font-family="Segoe UI, sans-serif" font-size="22" font-weight="600" fill="#1e293b">
        ${data.name}
      </text>
      <text x="150" y="138" font-family="Segoe UI, sans-serif" font-size="16" fill="#64748b">
        @${data.username}
      </text>

      <!-- Stats -->
      <g font-family="Segoe UI, sans-serif" font-size="14" fill="#475569">
        <text x="150" y="170">⭐ ${formatNumber(data.stars)} stars</text>
        <text x="150" y="190">👥 ${formatNumber(data.followers)} followers</text>
        <text x="150" y="210">📁 ${data.repos} repositories</text>
      </g>

      <!-- Score -->
      <text x="500" y="120" font-family="Segoe UI, sans-serif" font-size="48" font-weight="700" fill="#3b82f6" text-anchor="middle">
        ${formatNumber(data.score)}
      </text>
      <text x="500" y="155" font-family="Segoe UI, sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle">
        GitScore
      </text>

      <!-- Badges -->
      <text x="480" y="180" font-family="Segoe UI, sans-serif" font-size="12" fill="#64748b" font-weight="600">
        Badges:
      </text>
      ${badgeElements}

      <!-- Footer -->
      <text x="770" y="240" font-family="Segoe UI, sans-serif" font-size="11" fill="#94a3b8" text-anchor="end">
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
