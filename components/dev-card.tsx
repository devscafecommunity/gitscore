"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Code, Star, Copy } from "lucide-react"
import { useState } from "react"
import { SafeNumber } from "@/components/safe-number"

interface DevCardProps {
  user: any
  score: number
  topLanguages: string[]
  lastProject?: string
}

export function DevCard({ user, score, topLanguages, lastProject }: DevCardProps) {
  const [copied, setCopied] = useState(false)

  const getRank = (score: number) => {
    if (score >= 4000) return "SS+"
    if (score >= 3000) return "SS"
    if (score >= 2000) return "S"
    if (score >= 1000) return "A"
    if (score >= 500) return "B"
    if (score >= 200) return "C"
    if (score >= 50) return "D"
    return "F"
  }

  const generateBadgeCode = () => {
    const badgeUrl = `${window.location.origin}/api/card/${user.login}`
    return `[![GitScore](${badgeUrl})](${window.location.origin}/user/${user.login})`
  }

  const handleCopyBadge = async () => {
    try {
      await navigator.clipboard.writeText(generateBadgeCode())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Erro ao copiar:", err)
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center pb-4">
        <Avatar className="h-20 w-20 mx-auto mb-4">
          <AvatarImage src={user.avatar_url || "/placeholder.svg"} alt={user.name || user.login} />
          <AvatarFallback className="text-xl">{(user.name || user.login).charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">{user.name || user.login}</CardTitle>
        <p className="text-slate-600 dark:text-slate-300">@{user.login}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Score e Rank */}
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1"><SafeNumber value={score} /></div>
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Rank {getRank(score)}</Badge>
        </div>

        {/* Linguagens Top */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center">
            <Code className="h-4 w-4 mr-2" />
            Linguagens Top
          </h4>
          <div className="flex flex-wrap gap-1">
            {topLanguages.slice(0, 3).map((lang) => (
              <Badge key={lang} variant="outline" className="text-xs">
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        {/* Localização */}
        {user.location && (
          <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
            <MapPin className="h-4 w-4" />
            <span>{user.location}</span>
          </div>
        )}

        {/* Último Projeto */}
        {lastProject && (
          <div>
            <h4 className="font-semibold mb-1 flex items-center">
              <Star className="h-4 w-4 mr-2" />
              Último projeto
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">{lastProject}</p>
          </div>
        )}

        {/* Botão para copiar badge */}
        <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={handleCopyBadge}>
          <Copy className="h-4 w-4 mr-2" />
          {copied ? "Badge Copiado!" : "Copiar Badge README"}
        </Button>
      </CardContent>
    </Card>
  )
}
