import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Star, GitFork, Users, Code, Trophy, TrendingUp } from "lucide-react"
import { fetchGitHubUser, fetchUserRepos } from "@/lib/github-api"
import { calculateGitScore } from "@/lib/score-calculator"
import { RadarChart } from "@/components/radar-chart"
import { SafeNumber } from "@/components/safe-number"

interface PageProps {
  params: {
    users: string // formato: "user1-vs-user2"
  }
}

export default async function ComparePage({ params }: PageProps) {
  const usernames = params.users.split("-vs-")

  if (usernames.length !== 2) {
    notFound()
  }

  try {
    const [user1Data, user1Repos, user2Data, user2Repos] = await Promise.all([
      fetchGitHubUser(usernames[0]),
      fetchUserRepos(usernames[0]),
      fetchGitHubUser(usernames[1]),
      fetchUserRepos(usernames[1]),
    ])

    const user1Score = calculateGitScore(user1Data, user1Repos)
    const user2Score = calculateGitScore(user2Data, user2Repos)

    const user1Stats = {
      stars: user1Repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      forks: user1Repos.reduce((acc, repo) => acc + repo.forks_count, 0),
      followers: user1Data.followers,
      repos: user1Data.public_repos,
      languages: new Set(user1Repos.filter((r) => r.language).map((r) => r.language)).size,
    }

    const user2Stats = {
      stars: user2Repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      forks: user2Repos.reduce((acc, repo) => acc + repo.forks_count, 0),
      followers: user2Data.followers,
      repos: user2Data.public_repos,
      languages: new Set(user2Repos.filter((r) => r.language).map((r) => r.language)).size,
    }

    // Linguagens em comum
    const user1Languages = new Set(user1Repos.filter((r) => r.language).map((r) => r.language))
    const user2Languages = new Set(user2Repos.filter((r) => r.language).map((r) => r.language))
    const commonLanguages = [...user1Languages].filter((lang) => user2Languages.has(lang))

    const getRank = (score: number) => {
      if (score >= 4000) return { rank: "SS+", color: "from-yellow-400 to-orange-500" }
      if (score >= 3000) return { rank: "SS", color: "from-purple-500 to-pink-500" }
      if (score >= 2000) return { rank: "S", color: "from-blue-500 to-blue-600" }
      if (score >= 1000) return { rank: "A", color: "from-green-500 to-green-600" }
      if (score >= 500) return { rank: "B", color: "from-yellow-500 to-yellow-600" }
      if (score >= 200) return { rank: "C", color: "from-orange-500 to-orange-600" }
      if (score >= 50) return { rank: "D", color: "from-red-500 to-red-600" }
      return { rank: "F", color: "from-gray-500 to-gray-600" }
    }

    const user1Rank = getRank(user1Score)
    const user2Rank = getRank(user2Score)

    // Dados para gráficos de radar
    const user1RadarData = [
      { skill: "Popularidade", value: Math.min(100, (user1Stats.stars / 1000) * 10) },
      { skill: "Colaboração", value: Math.min(100, (user1Stats.forks / 500) * 10) },
      { skill: "Atividade", value: Math.min(100, (user1Stats.repos / 50) * 10) },
      { skill: "Diversidade", value: Math.min(100, (user1Stats.languages / 10) * 100) },
      { skill: "Influência", value: Math.min(100, (user1Stats.followers / 1000) * 10) },
      { skill: "Consistência", value: Math.floor(Math.random() * 40) + 60 },
    ]

    const user2RadarData = [
      { skill: "Popularidade", value: Math.min(100, (user2Stats.stars / 1000) * 10) },
      { skill: "Colaboração", value: Math.min(100, (user2Stats.forks / 500) * 10) },
      { skill: "Atividade", value: Math.min(100, (user2Stats.repos / 50) * 10) },
      { skill: "Diversidade", value: Math.min(100, (user2Stats.languages / 10) * 100) },
      { skill: "Influência", value: Math.min(100, (user2Stats.followers / 1000) * 10) },
      { skill: "Consistência", value: Math.floor(Math.random() * 40) + 60 },
    ]

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-8 pt-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ⚔️ Comparação de Desenvolvedores
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {user1Data.name || user1Data.login} vs {user2Data.name || user2Data.login}
            </p>
          </div>

          {/* Perfis dos Usuários */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { user: user1Data, score: user1Score, rank: user1Rank, stats: user1Stats },
              { user: user2Data, score: user2Score, rank: user2Rank, stats: user2Stats },
            ].map((data, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage
                      src={data.user.avatar_url || "/placeholder.svg"}
                      alt={data.user.name || data.user.login}
                    />
                    <AvatarFallback className="text-2xl">
                      {(data.user.name || data.user.login).charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl">{data.user.name || data.user.login}</CardTitle>
                  <p className="text-slate-600 dark:text-slate-300">@{data.user.login}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2"><SafeNumber value={data.score} /></div>
                    <Badge className={`bg-gradient-to-r ${data.rank.color} text-white text-lg px-4 py-2`}>
                      Rank {data.rank.rank}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                      <div className="font-bold text-yellow-600"><SafeNumber value={data.stats.stars} /></div>
                      <div className="text-slate-500">Stars</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                      <div className="font-bold text-blue-600"><SafeNumber value={data.stats.forks} /></div>
                      <div className="text-slate-500">Forks</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                      <div className="font-bold text-green-600"><SafeNumber value={data.stats.followers} /></div>
                      <div className="text-slate-500">Followers</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                      <div className="font-bold text-purple-600">{data.stats.repos}</div>
                      <div className="text-slate-500">Repos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparação Detalhada */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Métricas Comparativas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                  Comparação de Métricas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { label: "GitScore", user1: user1Score, user2: user2Score, icon: TrendingUp },
                  { label: "Stars", user1: user1Stats.stars, user2: user2Stats.stars, icon: Star },
                  { label: "Forks", user1: user1Stats.forks, user2: user2Stats.forks, icon: GitFork },
                  { label: "Followers", user1: user1Stats.followers, user2: user2Stats.followers, icon: Users },
                  { label: "Repositórios", user1: user1Stats.repos, user2: user2Stats.repos, icon: Code },
                ].map((metric, index) => {
                  const total = metric.user1 + metric.user2
                  const user1Percentage = total > 0 ? (metric.user1 / total) * 100 : 50
                  const user2Percentage = total > 0 ? (metric.user2 / total) * 100 : 50

                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <metric.icon className="h-4 w-4" />
                          <span className="font-medium">{metric.label}</span>
                        </div>
                        <div className="text-sm text-slate-500">
                          <SafeNumber value={metric.user1} /> vs <SafeNumber value={metric.user2} />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="flex-1">
                          <Progress value={user1Percentage} className="h-3" />
                          <div className="text-xs text-center mt-1">{user1Data.login}</div>
                        </div>
                        <div className="flex-1">
                          <Progress value={user2Percentage} className="h-3" />
                          <div className="text-xs text-center mt-1">{user2Data.login}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Linguagens em Comum */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2 text-blue-600" />
                  Linguagens em Comum
                </CardTitle>
              </CardHeader>
              <CardContent>
                {commonLanguages.length > 0 ? (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {commonLanguages.length} linguagem(ns) em comum
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {commonLanguages.map((lang) => (
                        <Badge key={lang} variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-600 dark:text-slate-300">Nenhuma linguagem em comum encontrada</p>
                )}

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">{user1Data.login}</h4>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {user1Stats.languages} linguagens diferentes
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">{user2Data.login}</h4>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {user2Stats.languages} linguagens diferentes
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gráficos de Radar Lado a Lado */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Perfil: {user1Data.name || user1Data.login}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadarChart data={user1RadarData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Perfil: {user2Data.name || user2Data.login}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadarChart data={user2RadarData} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
