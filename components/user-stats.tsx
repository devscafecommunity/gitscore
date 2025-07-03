"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Star, Code, Users, Calendar, TrendingUp, Award } from "lucide-react"
import { RadarChart } from "@/components/radar-chart"
import { ImprovementSuggestions } from "@/components/improvement-suggestions"
import { ScoreSimulator } from "@/components/score-simulator"
import { SafeDate } from "@/components/safe-date"
import { SafeNumber } from "@/components/safe-number"
import { useAccountAge } from "@/hooks/use-account-age"

interface UserStatsProps {
  user: any
  repos: any[]
}

export function UserStats({ user, repos }: UserStatsProps) {
  const { accountAge, isClient } = useAccountAge(user.created_at)
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0)
  const totalWatchers = repos.reduce((acc, repo) => acc + repo.watchers_count, 0)
  const avgStarsPerRepo = repos.length > 0 ? totalStars / repos.length : 0
  const avgForksPerRepo = repos.length > 0 ? totalForks / repos.length : 0

  // Calcular linguagens mais usadas
  const languages = repos.reduce(
    (acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>,
  )

  const topLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([lang, count]) => ({
      name: lang,
      count,
      percentage: (count / repos.length) * 100,
    }))

  const languageColors = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-600",
    Python: "bg-green-600",
    Java: "bg-red-600",
    "C++": "bg-blue-800",
    Go: "bg-cyan-500",
    Rust: "bg-orange-600",
    PHP: "bg-purple-600",
    Ruby: "bg-red-500",
    Swift: "bg-orange-500",
  }

  // Dados para o gráfico de radar
  const radarData = [
    { skill: "Popularidade", value: Math.min(100, (totalStars / 1000) * 10) },
    { skill: "Colaboração", value: Math.min(100, (totalForks / 500) * 10) },
    { skill: "Atividade", value: Math.min(100, (user.public_repos / 50) * 10) },
    { skill: "Diversidade", value: Math.min(100, (topLanguages.length / 10) * 100) },
    { skill: "Influência", value: Math.min(100, (user.followers / 1000) * 10) },
    { skill: "Consistência", value: Math.floor(Math.random() * 40) + 60 }, // Simulado
  ]

  const calculateGitScore = (user: any, repos: any[]) => {
    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
    const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0)
    const followers = user.followers
    const publicRepos = user.public_repos

    let score = 0
    score += (Math.min(totalStars, 5000) / 5000) * 25
    score += (Math.min(totalForks, 2000) / 2000) * 20
    score += (Math.min(followers, 1000) / 1000) * 30
    score += (Math.min(publicRepos, 100) / 100) * 25

    return score
  }

  return (
    <div className="space-y-6">
      {/* Gráfico de Radar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
            Perfil de Desenvolvedor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadarChart data={radarData} />
        </CardContent>
      </Card>

      {/* Estatísticas Gerais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="h-5 w-5 mr-2 text-yellow-500" />
            Estatísticas Gerais
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600"><SafeNumber value={totalStars} /></div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Total de Estrelas</div>
            </div>
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="text-2xl font-bold text-blue-600"><SafeNumber value={totalForks} /></div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Total de Forks</div>
            </div>
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{user.public_repos}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Repositórios</div>
            </div>
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{user.public_gists}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Gists Públicos</div>
            </div>
          </div>

          {/* Métricas Avançadas */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <div className="text-lg font-bold text-blue-600">{avgStarsPerRepo.toFixed(1)}</div>
              <div className="text-xs text-slate-600 dark:text-slate-300">Média de Estrelas/Repo</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg">
              <div className="text-lg font-bold text-green-600">{avgForksPerRepo.toFixed(1)}</div>
              <div className="text-xs text-slate-600 dark:text-slate-300">Média de Forks/Repo</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
              <div className="text-lg font-bold text-orange-600"><SafeNumber value={totalWatchers} /></div>
              <div className="text-xs text-slate-600 dark:text-slate-300">Total Watchers</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
              <div className="text-lg font-bold text-purple-600">{accountAge} anos</div>
              <div className="text-xs text-slate-600 dark:text-slate-300">Tempo no GitHub</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Linguagens */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Code className="h-5 w-5 mr-2 text-blue-600" />
            Linguagens Mais Usadas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {topLanguages.map((lang, index) => (
            <div key={lang.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${languageColors[lang.name as keyof typeof languageColors] || "bg-gray-400"}`}
                  />
                  <span className="font-medium">{lang.name}</span>
                  <Badge variant="outline" className="text-xs">
                    #{index + 1}
                  </Badge>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {lang.count} repos ({lang.percentage.toFixed(1)}%)
                </span>
              </div>
              <Progress value={lang.percentage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Conquistas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-yellow-600" />
            Conquistas Especiais
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {totalStars > 1000 && (
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <Star className="h-5 w-5 text-yellow-600" />
              <div>
                <div className="font-medium">Estrela Brilhante</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Mais de 1.000 estrelas recebidas</div>
              </div>
            </div>
          )}

          {user.followers > 100 && (
            <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium">Influenciador</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Mais de 100 seguidores</div>
              </div>
            </div>
          )}

          {topLanguages.length >= 5 && (
            <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Code className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium">Poliglota</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Domina 5+ linguagens</div>
              </div>
            </div>
          )}

          {accountAge >= 5 && (
            <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Calendar className="h-5 w-5 text-purple-600" />
              <div>
                <div className="font-medium">Veterano</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">5+ anos no GitHub</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <ImprovementSuggestions user={user} repos={repos} score={calculateGitScore(user, repos)} />

      <ScoreSimulator
        currentScore={calculateGitScore(user, repos)}
        currentStats={{
          stars: totalStars,
          forks: totalForks,
          followers: user.followers,
          repos: user.public_repos,
          gists: user.public_gists,
          contributions: Math.floor(Math.random() * 1000) + 200,
        }}
      />
    </div>
  )
}
