import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Lightbulb, TrendingUp } from "lucide-react"

interface ImprovementSuggestionsProps {
  user: any
  repos: any[]
  score: number
}

export function ImprovementSuggestions({ user, repos, score }: ImprovementSuggestionsProps) {
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
  const reposWithReadme = repos.filter((repo) => repo.has_wiki || repo.description).length
  const readmePercentage = repos.length > 0 ? (reposWithReadme / repos.length) * 100 : 0

  const suggestions = []
  const achievements = []
  const warnings = []

  // Análise de conquistas
  if (totalStars > 100) {
    achievements.push({
      icon: CheckCircle,
      title: "Boa popularidade",
      description: `Você já recebeu ${totalStars.toLocaleString()} estrelas!`,
      color: "text-green-600",
    })
  }

  if (user.followers > 50) {
    achievements.push({
      icon: CheckCircle,
      title: "Boa influência",
      description: `${user.followers} seguidores te acompanham`,
      color: "text-green-600",
    })
  }

  if (repos.length > 20) {
    achievements.push({
      icon: CheckCircle,
      title: "Desenvolvedor ativo",
      description: `${repos.length} repositórios públicos`,
      color: "text-green-600",
    })
  }

  // Análise de melhorias
  if (readmePercentage < 70) {
    warnings.push({
      icon: XCircle,
      title: "READMEs ausentes",
      description: `${(100 - readmePercentage).toFixed(0)}% dos repos sem descrição adequada`,
      color: "text-red-600",
    })

    suggestions.push({
      icon: Lightbulb,
      title: "Melhore seus READMEs",
      description: "Adicione descrições, badges, instruções de instalação e exemplos de uso",
      impact: "+15-30 pontos no GitScore",
      color: "text-blue-600",
    })
  }

  if (totalStars < 50) {
    suggestions.push({
      icon: TrendingUp,
      title: "Aumente a visibilidade",
      description: "Compartilhe seus projetos em redes sociais e comunidades",
      impact: "+20-50 pontos no GitScore",
      color: "text-blue-600",
    })
  }

  if (user.followers < 20) {
    suggestions.push({
      icon: TrendingUp,
      title: "Construa sua rede",
      description: "Contribua para projetos open source e interaja com a comunidade",
      impact: "+10-25 pontos no GitScore",
      color: "text-blue-600",
    })
  }

  const languages = repos.reduce((acc, repo) => {
    if (repo.language) acc.add(repo.language)
    return acc
  }, new Set())

  if (languages.size < 3) {
    suggestions.push({
      icon: Lightbulb,
      title: "Diversifique suas linguagens",
      description: "Experimente novas tecnologias para se tornar mais versátil",
      impact: "+5-15 pontos no GitScore",
      color: "text-blue-600",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
          Análise e Sugestões de Melhoria
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Conquistas */}
        {achievements.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 text-green-600">✅ Pontos Fortes</h4>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <achievement.icon className={`h-5 w-5 ${achievement.color} mt-0.5`} />
                  <div>
                    <div className="font-medium">{achievement.title}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Avisos */}
        {warnings.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 text-orange-600">⚠️ Áreas de Atenção</h4>
            <div className="space-y-3">
              {warnings.map((warning, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg"
                >
                  <warning.icon className={`h-5 w-5 ${warning.color} mt-0.5`} />
                  <div>
                    <div className="font-medium">{warning.title}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{warning.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sugestões */}
        {suggestions.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 text-blue-600">💡 Sugestões de Melhoria</h4>
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <suggestion.icon className={`h-5 w-5 ${suggestion.color} mt-0.5`} />
                  <div className="flex-1">
                    <div className="font-medium">{suggestion.title}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 mb-2">{suggestion.description}</div>
                    <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30">
                      Impacto: {suggestion.impact}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Score Simulator Preview */}
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            <strong>Dica:</strong> Implementando todas as sugestões, seu GitScore pode aumentar entre{" "}
            <Badge variant="secondary">+50 a +120 pontos</Badge>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
