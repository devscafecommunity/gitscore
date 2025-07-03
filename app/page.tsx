import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Star, GitFork, Code } from "lucide-react"
import { SearchUser } from "@/components/search-user"
import { TopUsers } from "@/components/top-users"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Descubra os Desenvolvedores Mais Influentes do GitHub
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            O GitScore analisa perfis do GitHub e cria um ranking baseado em contribuições, popularidade, colaboração e
            muito mais. Descubra seu score agora!
          </p>

          <SearchUser />

          <div className="flex justify-center items-center space-x-8 mt-12 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4" />
              <span>Baseado em estrelas</span>
            </div>
            <div className="flex items-center space-x-2">
              <GitFork className="h-4 w-4" />
              <span>Forks e contribuições</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="h-4 w-4" />
              <span>Diversidade de linguagens</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona o GitScore</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Sistema de Badges</CardTitle>
              <CardDescription>
                Ganhe badges baseadas em suas conquistas: Super Committer, Open Sourcer, Multilingue e muito mais
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Ranking Global</CardTitle>
              <CardDescription>
                Compare-se com desenvolvedores do mundo todo e veja sua posição no leaderboard
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Code className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Análise Detalhada</CardTitle>
              <CardDescription>
                Visualize gráficos de suas linguagens, atividade e evolução ao longo do tempo
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Top Users Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">🔥 Top Desenvolvedores da Semana</h2>
          <p className="text-slate-600 dark:text-slate-300">Os desenvolvedores com maior score esta semana</p>
        </div>
        <TopUsers />
        <div className="text-center mt-8">
          <Link href="/leaderboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Ver Leaderboard Completo
            </Button>
          </Link>
        </div>
      </section>

      {/* Score Calculation */}
      <section className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-800/50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">📈 Como Calculamos seu Score</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                Estrelas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Peso: <Badge variant="secondary">3x</Badge>
              </p>
              <p className="text-xs mt-2">Total de estrelas recebidas em todos os repositórios</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <GitFork className="h-5 w-5 text-blue-500 mr-2" />
                Forks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Peso: <Badge variant="secondary">4x</Badge>
              </p>
              <p className="text-xs mt-2">Número de forks dos seus projetos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 text-green-500 mr-2" />
                Seguidores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Peso: <Badge variant="secondary">2x</Badge>
              </p>
              <p className="text-xs mt-2">Número de seguidores no GitHub</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Code className="h-5 w-5 text-purple-500 mr-2" />
                Contribuições
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Peso: <Badge variant="secondary">2x</Badge>
              </p>
              <p className="text-xs mt-2">Commits e PRs no último ano</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-slate-900/80 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-slate-600 dark:text-slate-300">
          <p>© 2024 GitScore. Feito com ❤️ para a comunidade de desenvolvedores.</p>
          <p className="text-sm mt-2">Dados obtidos através da API pública do GitHub</p>
          <p className="text-sm mt-2">Uma iniciativa<a href="https://devscafe.org" className="text-blue-600 hover:underline">{" "}Dev's Café</a></p>
        </div>
      </footer>
    </div>
  )
}
