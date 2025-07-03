import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Github className="h-16 w-16 text-slate-400" />
            </div>
            <CardTitle className="text-2xl">Usuário não encontrado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600 dark:text-slate-300">
              O usuário que você está procurando não foi encontrado ou não existe no GitHub.
            </p>

            <div className="space-y-3">
              <Link href="/" className="block">
                <Button className="w-full">
                  <Home className="h-4 w-4 mr-2" />
                  Voltar ao Início
                </Button>
              </Link>

              <Link href="/" className="block">
                <Button variant="outline" className="w-full bg-transparent">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar Outro Usuário
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
