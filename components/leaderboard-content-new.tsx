import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Star, GitFork, Users, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { fetchLeaderboardData } from "@/lib/github-api"

interface LeaderboardContentProps {
  searchParams: {
    page?: string
    country?: string
    language?: string
    minScore?: string
    maxScore?: string
  }
}

export async function LeaderboardContent({ searchParams }: LeaderboardContentProps) {
  const page = parseInt(searchParams.page || "1")
  const filters = {
    page,
    country: searchParams.country,
    language: searchParams.language,
    minScore: searchParams.minScore ? parseInt(searchParams.minScore) : undefined,
    maxScore: searchParams.maxScore ? parseInt(searchParams.maxScore) : undefined,
  }

  const { users, totalCount, hasNextPage } = await fetchLeaderboardData(filters)

  const getRankColor = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-400 to-yellow-600"
    if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-500"
    if (rank === 3) return "bg-gradient-to-r from-amber-600 to-amber-700"
    if (rank <= 10) return "bg-gradient-to-r from-blue-500 to-blue-600"
    return "bg-gradient-to-r from-slate-400 to-slate-500"
  }

  const getBadgeColor = (rank: string) => {
    switch (rank) {
      case "SS+":
        return "bg-gradient-to-r from-purple-600 to-purple-700"
      case "SS":
        return "bg-gradient-to-r from-purple-500 to-purple-600"
      case "S":
        return "bg-gradient-to-r from-red-500 to-red-600"
      case "A+":
      case "A":
        return "bg-gradient-to-r from-orange-500 to-orange-600"
      case "B+":
      case "B":
        return "bg-gradient-to-r from-blue-500 to-blue-600"
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600"
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Stats Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{totalCount.toLocaleString()}</div>
            <div className="text-sm text-slate-500">Desenvolvedores Total</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{users.length}</div>
            <div className="text-sm text-slate-500">Nesta Página</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">#{page}</div>
            <div className="text-sm text-slate-500">Página Atual</div>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboard */}
      <div className="space-y-4">
        {users.map((user: any) => (
          <Card key={user.username} className="hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  {/* Rank */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`${getRankColor(
                        user.rank
                      )} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg`}
                    >
                      {user.rank <= 3 && (
                        <Trophy
                          className={`h-6 w-6 ${
                            user.rank === 1 ? "text-yellow-200" : user.rank === 2 ? "text-gray-200" : "text-amber-200"
                          }`}
                        />
                      )}
                      {user.rank > 3 && user.rank}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">#{user.rank}</div>
                  </div>

                  {/* User Info */}
                  <Link href={`/user/${user.username}`} className="flex items-center space-x-4 hover:opacity-80">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">{user.name}</h3>
                      <p className="text-slate-600 dark:text-slate-300">@{user.username}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <div className="flex items-center space-x-1 text-sm text-slate-500">
                          <span>📍</span>
                          <span>{user.country}</span>
                        </div>
                        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{user.topLanguage}</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Stats */}
                <div className="text-right">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`${getBadgeColor(
                        user.rankBadge
                      )} text-white px-4 py-2 rounded-lg font-bold text-lg`}
                    >
                      {user.rankBadge}
                    </div>
                    <div className="text-3xl font-bold text-blue-600">{user.score.toLocaleString()}</div>
                  </div>
                  
                  <div className="flex space-x-6 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{(user.stars / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="h-4 w-4" />
                      <span>{(user.forks / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{(user.followers / 1000).toFixed(0)}k</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-slate-400 mt-2">Projeto: {user.topRepo}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-12">
        <Link href={`/leaderboard?page=${Math.max(1, page - 1)}`}>
          <Button variant="outline" disabled={page === 1} className="flex items-center space-x-2">
            <ChevronLeft className="h-4 w-4" />
            <span>Anterior</span>
          </Button>
        </Link>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-slate-500">Página</span>
          <div className="bg-blue-600 text-white px-3 py-1 rounded font-medium">{page}</div>
        </div>
        
        <Link href={`/leaderboard?page=${page + 1}`}>
          <Button variant="outline" disabled={!hasNextPage} className="flex items-center space-x-2">
            <span>Próxima</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
