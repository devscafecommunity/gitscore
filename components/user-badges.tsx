import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, GitFork, Code, Users, Calendar, Zap } from "lucide-react"

interface BadgeData {
  name: string
  description: string
  rank: string
  value: number
  maxValue: number
  icon: string
}

interface UserBadgesProps {
  badges: BadgeData[]
}

const iconMap = {
  trophy: Trophy,
  star: Star,
  fork: GitFork,
  code: Code,
  users: Users,
  calendar: Calendar,
  zap: Zap,
}

const rankColors = {
  F: "bg-gray-500",
  E: "bg-red-800",
  D: "bg-red-600",
  C: "bg-orange-500",
  B: "bg-yellow-500",
  A: "bg-green-500",
  S: "bg-blue-500",
  SS: "bg-purple-500",
  "SS+": "bg-gradient-to-r from-yellow-400 to-orange-500",
}

export function UserBadges({ badges }: UserBadgesProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
        Badges Conquistadas
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => {
          const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy
          const progress = Math.min((badge.value / badge.maxValue) * 100, 100)

          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">{badge.name}</CardTitle>
                  </div>
                  <Badge className={`${rankColors[badge.rank as keyof typeof rankColors]} text-white`}>
                    {badge.rank}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{badge.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{badge.value.toLocaleString()}</span>
                    <span className="text-slate-500">{badge.maxValue.toLocaleString()}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
