import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import { HallOfFameContent } from "@/components/hall-of-fame-content"
import { fetchHallOfFameData } from "@/lib/github-api"

export default async function HallOfFamePage() {
  // Buscar dados do servidor (SSR)
  const hallData = await fetchHallOfFameData()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            🏆 Hall da Fama
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Os desenvolvedores que mais se destacam no GitHub
          </p>
          <Badge variant="outline" className="mt-4">
            <Calendar className="h-4 w-4 mr-2" />
            Dados em tempo real do GitHub
          </Badge>
        </div>

        <HallOfFameContent initialData={hallData} />
      </div>
    </div>
  )
}
