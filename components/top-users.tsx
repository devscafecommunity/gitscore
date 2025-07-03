"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Star, GitFork } from "lucide-react"
import Link from "next/link"
import { fetchLeaderboardData } from "@/lib/github-api"
import { SafeNumber } from "@/components/safe-number"

export function TopUsers() {
  const [topUsers, setTopUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTopUsers() {
      try {
        // Buscar os top 3 usuários do leaderboard
        const { users } = await fetchLeaderboardData({ page: 1 })
        setTopUsers(users.slice(0, 3))
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
        setTopUsers(fallbackUsers)
      } finally {
        setLoading(false)
      }
    }

    loadTopUsers()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-4 max-w-2xl mx-auto">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                <div className="space-y-2">
                  <div className="w-32 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  <div className="w-24 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
              </div>
              <div className="text-right space-y-2">
                <div className="w-20 h-6 bg-slate-200 dark:bg-slate-700 rounded"></div>
                <div className="w-16 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

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
                  <span className="text-slate-600 dark:text-slate-300">@{user.username}</span>
                  <div className="text-sm text-slate-500">Projeto: {user.topRepo}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  <SafeNumber value={user.score} /> pts
                </div>
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
