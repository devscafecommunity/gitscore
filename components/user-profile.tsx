"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, LinkIcon, Building, Calendar, ExternalLink, Share2, Copy } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SafeDate } from "@/components/safe-date"
import { SafeNumber } from "@/components/safe-number"

interface UserProfileProps {
  user: {
    login: string
    name: string | null
    avatar_url: string | null
    bio: string | null
    location: string | null
    company: string | null
    blog: string | null
    created_at: string
    followers: number
    following: number
    public_repos: number
    html_url: string
  }
  score: number
}

export function UserProfile({ user, score }: UserProfileProps) {
  const [copied, setCopied] = useState(false)

  const getScoreRank = (score: number) => {
    if (score >= 4000) return { rank: "SS+", color: "bg-gradient-to-r from-yellow-400 to-orange-500" }
    if (score >= 3000) return { rank: "SS", color: "bg-gradient-to-r from-purple-500 to-pink-500" }
    if (score >= 2000) return { rank: "S", color: "bg-blue-500" }
    if (score >= 1000) return { rank: "A", color: "bg-green-500" }
    if (score >= 500) return { rank: "B", color: "bg-yellow-500" }
    if (score >= 200) return { rank: "C", color: "bg-orange-500" }
    if (score >= 50) return { rank: "D", color: "bg-red-500" }
    return { rank: "F", color: "bg-gray-500" }
  }

  const { rank, color } = getScoreRank(score)

  const handleCopyCard = async () => {
    const cardUrl = `${window.location.origin}/api/card/${user.login}`
    const markdownCode = `![GitScore](${cardUrl})${user.bio ? `\n\n${user.bio}` : ""}`

    try {
      await navigator.clipboard.writeText(markdownCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Erro ao copiar:", err)
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className={`h-32 ${color.replace("bg-", "bg-gradient-to-r from-")} opacity-20`} />
      <CardContent className="relative -mt-16 pb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <Avatar className="h-32 w-32 border-4 border-white dark:border-slate-800">
            <AvatarImage src={user.avatar_url || "/placeholder.svg"} alt={user.name || user.login} />
            <AvatarFallback className="text-2xl">{(user.name || user.login).charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold">{user.name || user.login}</h1>
                <p className="text-xl text-slate-600 dark:text-slate-300">@{user.login}</p>
              </div>

              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600"><SafeNumber value={score} /></div>
                  <div className="text-sm text-slate-500">GitScore</div>
                </div>
                <Badge className={`${color} text-white text-lg px-4 py-2`}>Rank {rank}</Badge>
              </div>
            </div>

            {user.bio && <p className="text-slate-700 dark:text-slate-300 mb-4">{user.bio}</p>}

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300 mb-4">
              {user.location && (
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
              )}
              {user.company && (
                <div className="flex items-center space-x-1">
                  <Building className="h-4 w-4" />
                  <span>{user.company}</span>
                </div>
              )}
              {user.blog && (
                <div className="flex items-center space-x-1">
                  <LinkIcon className="h-4 w-4" />
                  <a href={user.blog} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    {user.blog.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Desde <SafeDate date={user.created_at} format="year" /></span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm mb-4">
              <div>
                <span className="font-semibold"><SafeNumber value={user.followers} /></span>
                <span className="text-slate-500 ml-1">seguidores</span>
              </div>
              <div>
                <span className="font-semibold"><SafeNumber value={user.following} /></span>
                <span className="text-slate-500 ml-1">seguindo</span>
              </div>
              <div>
                <span className="font-semibold">{user.public_repos}</span>
                <span className="text-slate-500 ml-1">repositórios</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={user.html_url} target="_blank">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver no GitHub
                </Button>
              </Link>

              <Button variant="outline" size="sm" onClick={handleCopyCard}>
                {copied ? (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar Card
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
