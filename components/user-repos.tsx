import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, ExternalLink } from "lucide-react"
import Link from "next/link"
import { SafeDate } from "@/components/safe-date"

interface UserReposProps {
  repos: any[]
}

export function UserRepos({ repos }: UserReposProps) {
  const sortedRepos = repos.filter((repo) => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>🚀 Repositórios em Destaque</span>
          <Badge variant="secondary">{sortedRepos.length} projetos</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sortedRepos.map((repo) => (
          <div
            key={repo.id}
            className="border rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-blue-600 hover:text-blue-800">
                  <Link href={repo.html_url} target="_blank" className="flex items-center">
                    {repo.name}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </h3>
                {repo.description && (
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{repo.description}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-slate-500">
                {repo.language && <Badge variant="outline">{repo.language}</Badge>}
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitFork className="h-4 w-4" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>

              <div className="text-xs text-slate-400">
                Atualizado em <SafeDate date={repo.updated_at} />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
