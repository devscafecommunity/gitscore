import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Star, GitFork } from "lucide-react"
import Link from "next/link"
import { fetchLeaderboardData } from "@/lib/github-api"

export async function TopUsers() {
  try {
    // Buscar os top 3 usuários do leaderboard
    const { users } = await fetchLeaderboardData({ page: 1 })
    const topUsers = users.slice(0, 3)

    return (
      <div className="grid gap-4 max-w-2xl mx-auto">
        {topUsers.map((user: any) => (
          <Link key={user.username} href={`/user/${user.username}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    {user.rank <= 3 && (
                      <Trophy
                        className={`h-6 w-6 ${
                          user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-gray-400" : "text-amber-600"
                        }`}
                      />
                    )}
                    <span className="text-2xl font-bold text-slate-400">#{user.rank}</span>
                  </div>

                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <p className="text-slate-600 dark:text-slate-300">@{user.username}</p>
                    <p className="text-sm text-slate-500">Projeto: {user.topRepo}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{user.score.toLocaleString()} pts</div>
                  <div className="flex space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>{(user.stars / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="h-3 w-3" />
                      <span>{(user.forks / 1000).toFixed(0)}k</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    )
  } catch (error) {
    console.error('Error fetching top users:', error)
    
    // Fallback para dados estáticos em caso de erro
    const fallbackUsers = [
      {
        username: "torvalds",
        name: "Linus Torvalds", 
        score: 4892,
        avatar: "/placeholder.svg",
        topRepo: "linux",
        stars: 180000,
        forks: 45000,
        rank: 1,
      },
      {
        username: "gaearon", 
        name: "Dan Abramov",
        score: 4156,
        avatar: "/placeholder.svg",
        topRepo: "react",
        stars: 45000,
        forks: 12000,
        rank: 2,
      },
      {
        username: "sindresorhus",
        name: "Sindre Sorhus",
        score: 3924, 
        avatar: "/placeholder.svg",
        topRepo: "awesome",
        stars: 320000,
        forks: 25000,
        rank: 3,
      },
    ]

    return (
      <div className="grid gap-4 max-w-2xl mx-auto">
        {fallbackUsers.map((user) => (
          <Link key={user.username} href={`/user/${user.username}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    {user.rank <= 3 && (
                      <Trophy
                        className={`h-6 w-6 ${
                          user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-gray-400" : "text-amber-600"
                        }`}
                      />
                    )}
                    <span className="text-2xl font-bold text-slate-400">#{user.rank}</span>
                  </div>

                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <p className="text-slate-600 dark:text-slate-300">@{user.username}</p>
                    <p className="text-sm text-slate-500">Projeto: {user.topRepo}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{user.score.toLocaleString()} pts</div>
                  <div className="flex space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>{(user.stars / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="h-3 w-3" />
                      <span>{(user.forks / 1000).toFixed(0)}k</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    )
  }
}
