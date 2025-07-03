import { Suspense } from "react"
import { LeaderboardContent } from "@/components/leaderboard-content"
import { LeaderboardFilters } from "@/components/leaderboard-filters"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface PageProps {
  searchParams: {
    page?: string
    country?: string
    language?: string
    minScore?: string
    maxScore?: string
  }
}

export default function LeaderboardPage({ searchParams }: PageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🏆 Leaderboard Global
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">Os desenvolvedores com maior GitScore do mundo</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <LeaderboardFilters />
        </div>

        {/* Content */}
        <Suspense fallback={<LeaderboardSkeleton />}>
          <LeaderboardContent searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}

function LeaderboardSkeleton() {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-8 w-24" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
