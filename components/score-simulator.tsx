"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, RotateCcw } from "lucide-react"
import { SafeNumber } from "@/components/safe-number"

interface ScoreSimulatorProps {
  currentScore: number
  currentStats: {
    stars: number
    forks: number
    followers: number
    repos: number
    gists: number
    contributions: number
  }
}

export function ScoreSimulator({ currentScore, currentStats }: ScoreSimulatorProps) {
  const [simStats, setSimStats] = useState(currentStats)
  const [showResults, setShowResults] = useState(false)

  const calculateScore = (stats: typeof currentStats) => {
    return Math.max(
      0,
      stats.stars * 3 +
        stats.forks * 4 +
        stats.followers * 2 +
        stats.contributions * 2 +
        stats.repos * 1.5 +
        stats.gists * 1,
    )
  }

  const simulatedScore = calculateScore(simStats)
  const scoreDifference = simulatedScore - currentScore
  const percentageIncrease = currentScore > 0 ? (scoreDifference / currentScore) * 100 : 0

  const handleSimulate = () => {
    setShowResults(true)
  }

  const handleReset = () => {
    setSimStats(currentStats)
    setShowResults(false)
  }

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

  const currentRank = getRank(currentScore)
  const simulatedRank = getRank(simulatedScore)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="h-5 w-5 mr-2 text-blue-600" />
          Simulador de GitScore
        </CardTitle>
        <p className="text-sm text-slate-600 dark:text-slate-300">Teste como suas métricas afetariam seu GitScore</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Inputs de Simulação */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="stars">Estrelas</Label>
            <Input
              id="stars"
              type="number"
              value={simStats.stars}
              onChange={(e) => setSimStats({ ...simStats, stars: Number(e.target.value) || 0 })}
              min="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="forks">Forks</Label>
            <Input
              id="forks"
              type="number"
              value={simStats.forks}
              onChange={(e) => setSimStats({ ...simStats, forks: Number(e.target.value) || 0 })}
              min="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="followers">Seguidores</Label>
            <Input
              id="followers"
              type="number"
              value={simStats.followers}
              onChange={(e) => setSimStats({ ...simStats, followers: Number(e.target.value) || 0 })}
              min="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contributions">Contribuições</Label>
            <Input
              id="contributions"
              type="number"
              value={simStats.contributions}
              onChange={(e) => setSimStats({ ...simStats, contributions: Number(e.target.value) || 0 })}
              min="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="repos">Repositórios</Label>
            <Input
              id="repos"
              type="number"
              value={simStats.repos}
              onChange={(e) => setSimStats({ ...simStats, repos: Number(e.target.value) || 0 })}
              min="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gists">Gists</Label>
            <Input
              id="gists"
              type="number"
              value={simStats.gists}
              onChange={(e) => setSimStats({ ...simStats, gists: Number(e.target.value) || 0 })}
              min="0"
            />
          </div>
        </div>

        {/* Botões */}
        <div className="flex space-x-3">
          <Button onClick={handleSimulate} className="flex-1">
            <TrendingUp className="h-4 w-4 mr-2" />
            Simular Score
          </Button>
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {/* Resultados */}
        {showResults && (
          <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h4 className="font-semibold">Resultados da Simulação</h4>

            <div className="grid grid-cols-2 gap-4">
              {/* Score Atual */}
              <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg">
                <div className="text-sm text-slate-600 dark:text-slate-300 mb-1">Score Atual</div>
                <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                  <SafeNumber value={currentScore} />
                </div>
                <Badge className={`bg-gradient-to-r ${currentRank.color} text-white mt-2`}>{currentRank.rank}</Badge>
              </div>

              {/* Score Simulado */}
              <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg">
                <div className="text-sm text-slate-600 dark:text-slate-300 mb-1">Score Simulado</div>
                <div className="text-2xl font-bold text-blue-600"><SafeNumber value={simulatedScore} /></div>
                <Badge className={`bg-gradient-to-r ${simulatedRank.color} text-white mt-2`}>
                  {simulatedRank.rank}
                </Badge>
              </div>
            </div>

            {/* Diferença */}
            <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <div className="text-sm text-slate-600 dark:text-slate-300 mb-1">Diferença</div>
              <div className={`text-xl font-bold ${scoreDifference >= 0 ? "text-green-600" : "text-red-600"}`}>
                {scoreDifference >= 0 ? "+" : ""}
                {scoreDifference.toLocaleString()} pontos
              </div>
              {percentageIncrease !== 0 && (
                <div className={`text-sm ${percentageIncrease >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {percentageIncrease >= 0 ? "+" : ""}
                  {percentageIncrease.toFixed(1)}% de mudança
                </div>
              )}
            </div>

            {/* Mudança de Rank */}
            {currentRank.rank !== simulatedRank.rank && (
              <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  🎉 Mudança de Rank: {currentRank.rank} → {simulatedRank.rank}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
