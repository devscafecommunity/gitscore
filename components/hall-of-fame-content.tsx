"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, TrendingUp, Code, Users, GitFork, Star, Calendar } from "lucide-react"
import Link from "next/link"
import { fetchHallOfFameData, fetchTopRepositoriesByLanguage } from "@/lib/github-api"
import { calculateGitScore } from "@/lib/score-calculator"
import { SafeNumber } from "@/components/safe-number"

interface HallOfFameContentProps {
  initialData?: any
}

export function HallOfFameContent({ initialData }: HallOfFameContentProps) {
  const [hallData, setHallData] = useState(initialData || null)
  const [languageRepos, setLanguageRepos] = useState<any>({})
  const [loading, setLoading] = useState(!initialData)

  useEffect(() => {
    async function loadData() {
      try {
        if (!hallData) {
          const data = await fetchHallOfFameData()
          setHallData(data)
        }

        // Buscar repositórios por linguagem
        const languages = ['JavaScript', 'Python', 'TypeScript', 'Java', 'Go', 'Rust']
        const reposByLanguage: any = {}

        for (const lang of languages) {
          const repos = await fetchTopRepositoriesByLanguage(lang)
          reposByLanguage[lang] = repos.slice(0, 3) // Top 3 por linguagem
        }

        setLanguageRepos(reposByLanguage)
      } catch (error) {
        console.error('Error loading hall of fame data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [hallData])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300">Carregando Hall da Fama...</p>
        </div>
      </div>
    )
  }

  if (!hallData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-300">Erro ao carregar dados do Hall da Fama</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Top Influenciadores (por seguidores) */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Users className="h-6 w-6 mr-3 text-blue-600" />
              🌟 Top Influenciadores
            </CardTitle>
            <p className="text-slate-600 dark:text-slate-300">
              Desenvolvedores com maior número de seguidores
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {hallData.topInfluential.slice(0, 10).map((user: any, index: number) => (
                <Link key={user.login} href={`/user/${user.login}`}>
                  <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Trophy
                          className={`h-6 w-6 ${
                            index === 0 ? "text-yellow-500" : 
                            index === 1 ? "text-gray-400" : 
                            index === 2 ? "text-amber-600" : "text-slate-400"
                          }`}
                        />
                        <span className="text-2xl font-bold text-slate-400">#{index + 1}</span>
                      </div>
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar_url} alt={user.login} />
                        <AvatarFallback>{user.login.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.login}</h3>
                        <p className="text-slate-600 dark:text-slate-300">@{user.login}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600">
                        <SafeNumber value={user.followers || 0} /> seguidores
                      </div>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        <Users className="h-3 w-3 mr-1" />
                        {user.public_repos || 0} repos públicos
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Top Produtivos (por número de repositórios) */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Code className="h-6 w-6 mr-3 text-green-600" />
              🚀 Top Produtivos
            </CardTitle>
            <p className="text-slate-600 dark:text-slate-300">
              Desenvolvedores com maior número de repositórios públicos
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {hallData.topProductive.slice(0, 10).map((user: any, index: number) => (
                <Link key={user.login} href={`/user/${user.login}`}>
                  <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <span className="text-xl font-bold text-slate-400 min-w-[2rem]">#{index + 1}</span>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar_url} alt={user.login} />
                        <AvatarFallback>{user.login.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.login}</h3>
                        <p className="text-slate-600 dark:text-slate-300">@{user.login}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        <SafeNumber value={user.public_repos || 0} /> repositórios
                      </div>
                      <Badge variant="outline" className="text-slate-600 border-slate-600">
                        <Users className="h-3 w-3 mr-1" />
                        <SafeNumber value={user.followers || 0} /> seguidores
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Top Repositórios por Linguagem */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Code className="h-6 w-6 mr-3 text-purple-600" />
              💻 Top Repositórios por Linguagem
            </CardTitle>
            <p className="text-slate-600 dark:text-slate-300">
              Repositórios mais populares por linguagem de programação
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(languageRepos).map(([language, repos]: [string, any]) => (
                <div key={language} className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center">
                    <Badge variant="outline" className="mr-2">
                      {language}
                    </Badge>
                  </h4>
                  <div className="space-y-2">
                    {repos?.map((repo: any, index: number) => (
                      <Link key={repo.id} href={repo.html_url} target="_blank">
                        <div className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-bold text-slate-400">#{index + 1}</span>
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-sm truncate">{repo.name}</div>
                              <div className="text-xs text-slate-600 dark:text-slate-300">
                                @{repo.owner?.login}
                              </div>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="flex items-center space-x-2 text-xs">
                              <div className="flex items-center">
                                <Star className="h-3 w-3 mr-1" />
                                <span>{(repo.stargazers_count / 1000).toFixed(1)}k</span>
                              </div>
                              <div className="flex items-center">
                                <GitFork className="h-3 w-3 mr-1" />
                                <span>{(repo.forks_count / 1000).toFixed(1)}k</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Usuários Recentes Ativos */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Calendar className="h-6 w-6 mr-3 text-orange-600" />
              ⚡ Novos Talentos
            </CardTitle>
            <p className="text-slate-600 dark:text-slate-300">
              Desenvolvedores recentemente ativos na plataforma
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {hallData.topActive.slice(0, 10).map((user: any, index: number) => (
                <Link key={user.login} href={`/user/${user.login}`}>
                  <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <span className="text-xl font-bold text-slate-400 min-w-[2rem]">#{index + 1}</span>
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar_url} alt={user.login} />
                        <AvatarFallback>{user.login.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.login}</h3>
                        <p className="text-slate-600 dark:text-slate-300">@{user.login}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-orange-600">
                        <SafeNumber value={user.public_repos || 0} /> repos
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Ativo recentemente
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
