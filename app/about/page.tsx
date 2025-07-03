import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, Users, Code, Calendar, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Github className="h-12 w-12 text-blue-600" />
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GitScore
            </span>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Uma plataforma que analisa e ranqueia desenvolvedores do GitHub baseado em suas contribuições, popularidade
            e impacto na comunidade open source.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Como Funciona */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🎯 Como Funciona o GitScore</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                O GitScore é calculado através de uma fórmula que considera diversos aspectos da atividade de um
                desenvolvedor no GitHub. Cada métrica tem um peso específico que reflete sua importância para a
                comunidade de desenvolvimento.
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm">
                <div className="text-blue-600 font-semibold mb-2">Fórmula do GitScore:</div>
                <div>
                  score = (estrelas × 3) + (forks × 4) + (seguidores × 2) + (contribuições × 2) + (repos × 1.5) + (gists
                  × 1)
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Parâmetros */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">📊 Parâmetros Avaliados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <Star className="h-6 w-6 text-yellow-600" />
                    <div>
                      <div className="font-semibold">Estrelas Recebidas</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Peso: <Badge variant="secondary">3x</Badge> - Popularidade dos projetos
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <GitFork className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="font-semibold">Forks dos Projetos</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Peso: <Badge variant="secondary">4x</Badge> - Reutilização e colaboração
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                    <div>
                      <div className="font-semibold">Seguidores</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Peso: <Badge variant="secondary">2x</Badge> - Influência na comunidade
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-600" />
                    <div>
                      <div className="font-semibold">Contribuições</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Peso: <Badge variant="secondary">2x</Badge> - Atividade e consistência
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                    <Code className="h-6 w-6 text-teal-600" />
                    <div>
                      <div className="font-semibold">Repositórios Públicos</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Peso: <Badge variant="secondary">1.5x</Badge> - Quantidade de projetos
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <Calendar className="h-6 w-6 text-orange-600" />
                    <div>
                      <div className="font-semibold">Gists Públicos</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Peso: <Badge variant="secondary">1x</Badge> - Compartilhamento de código
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sistema de Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🏅 Sistema de Badges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Cada desenvolvedor recebe badges baseadas em suas conquistas específicas. As badges são ranqueadas de F
                até SS+ seguindo um sistema similar a jogos.
              </p>

              <div className="grid grid-cols-3 md:grid-cols-9 gap-2 text-center text-sm">
                {["F", "E", "D", "C", "B", "A", "S", "SS", "SS+"].map((rank, index) => (
                  <Badge
                    key={rank}
                    className={`
                      ${index === 0 ? "bg-gray-500" : ""}
                      ${index === 1 ? "bg-red-800" : ""}
                      ${index === 2 ? "bg-red-600" : ""}
                      ${index === 3 ? "bg-orange-500" : ""}
                      ${index === 4 ? "bg-yellow-500" : ""}
                      ${index === 5 ? "bg-green-500" : ""}
                      ${index === 6 ? "bg-blue-500" : ""}
                      ${index === 7 ? "bg-purple-500" : ""}
                      ${index === 8 ? "bg-gradient-to-r from-yellow-400 to-orange-500" : ""}
                      text-white
                    `}
                  >
                    {rank}
                  </Badge>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">Badges Disponíveis:</h4>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>
                      🌟 <strong>Super Star</strong> - Baseado em estrelas recebidas
                    </li>
                    <li>
                      🔱 <strong>Fork Master</strong> - Baseado em forks dos projetos
                    </li>
                    <li>
                      ⚡ <strong>Super Committer</strong> - Baseado em contribuições
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mais Badges:</h4>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>
                      🌐 <strong>Multilingue</strong> - Diversidade de linguagens
                    </li>
                    <li>
                      👥 <strong>Influencer</strong> - Baseado em seguidores
                    </li>
                    <li>
                      📅 <strong>Veterano</strong> - Tempo de conta no GitHub
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tecnologias */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🛠️ Tecnologias Utilizadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Frontend & UI:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js 14</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">shadcn/ui</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">APIs & Deploy:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">GitHub API</Badge>
                    <Badge variant="outline">Vercel</Badge>
                    <Badge variant="outline">ISR</Badge>
                    <Badge variant="outline">Edge Functions</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🚀 Roadmap Futuro</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">✅ Implementado:</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      <li>• Sistema de cálculo de score</li>
                      <li>• Badges com ranking F-SS+</li>
                      <li>• Perfis detalhados de usuários</li>
                      <li>• Leaderboard global</li>
                      <li>• Interface responsiva</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">🔄 Em Desenvolvimento:</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      <li>• Filtros por país e linguagem</li>
                      <li>• Gráficos de evolução temporal</li>
                      <li>• Comparação entre desenvolvedores</li>
                      <li>• API pública do GitScore</li>
                      <li>• Sistema de notificações</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Próximas Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Desafios e missões gamificadas</li>
                    <li>• Cards compartilháveis para redes sociais</li>
                    <li>• Análise de tendências de linguagens</li>
                    <li>• Rankings regionais e por empresa</li>
                    <li>• Integração com outras plataformas</li>
                    <li>• Sistema de recomendações de projetos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contribuição */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🤝 Contribua com o Projeto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                O GitScore é um projeto open source! Contribuições são sempre bem-vindas, seja reportando bugs,
                sugerindo features ou contribuindo com código.
              </p>

              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-100">
                  📝 Reportar Bug
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-100">
                  💡 Sugerir Feature
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-100">
                  🔧 Contribuir Código
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-100">
                  📖 Melhorar Docs
                </Badge>
              </div>

              <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <strong>Nota:</strong> Todos os dados são obtidos através da API pública do GitHub. O GitScore não
                  armazena informações pessoais e respeita os limites de rate da API.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
