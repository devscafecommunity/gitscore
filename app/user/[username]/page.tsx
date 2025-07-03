import { notFound } from "next/navigation"
import { UserProfile } from "@/components/user-profile"
import { UserBadges } from "@/components/user-badges"
import { UserStats } from "@/components/user-stats"
import { UserRepos } from "@/components/user-repos"
import { ReadmeMD } from "@/components/readme-md"
import { calculateGitScore, generateBadges } from "@/lib/score-calculator"
import { fetchGitHubUser, fetchUserRepos } from "@/lib/github-api"

interface PageProps {
  params: {
    username: string
  }
}

export default async function UserPage({ params }: PageProps) {
  try {
    const userData = await fetchGitHubUser(params.username)
    const reposData = await fetchUserRepos(params.username)

    const score = calculateGitScore(userData, reposData)
    const badges = generateBadges(userData, reposData)

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-8 pt-8">
          {/* Header */}
          <div className="mb-8">
            <UserProfile user={userData} score={score} />
          </div>

          {/* Badges */}
          <div className="mb-8">
            <UserBadges badges={badges} />
          </div>

          {/* Stats Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <UserStats user={userData} repos={reposData} />
            <div className="">
              <UserRepos repos={reposData.slice(0, 6)} />
              <ReadmeMD username={params.username} />
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
