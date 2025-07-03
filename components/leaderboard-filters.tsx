"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"

const countries = [
  { code: "BR", name: "Brasil", flag: "🇧🇷" },
  { code: "US", name: "Estados Unidos", flag: "🇺🇸" },
  { code: "GB", name: "Reino Unido", flag: "🇬🇧" },
  { code: "DE", name: "Alemanha", flag: "🇩🇪" },
  { code: "FR", name: "França", flag: "🇫🇷" },
  { code: "CA", name: "Canadá", flag: "🇨🇦" },
  { code: "AU", name: "Austrália", flag: "🇦🇺" },
  { code: "JP", name: "Japão", flag: "🇯🇵" },
  { code: "IN", name: "Índia", flag: "🇮🇳" },
  { code: "CN", name: "China", flag: "🇨🇳" },
]

const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Go",
  "Rust",
  "C++",
  "C",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
  "C#",
  "Dart",
]

const scoreRanges = [
  { label: "Iniciante (0-500)", min: 0, max: 500 },
  { label: "Intermediário (500-1000)", min: 500, max: 1000 },
  { label: "Avançado (1000-2000)", min: 1000, max: 2000 },
  { label: "Expert (2000-3000)", min: 2000, max: 3000 },
  { label: "Elite (3000+)", min: 3000, max: 10000 },
]

export function LeaderboardFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)

  const currentCountry = searchParams.get("country")
  const currentLanguage = searchParams.get("language")
  const currentMinScore = searchParams.get("minScore")
  const currentMaxScore = searchParams.get("maxScore")

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    // Reset page when filters change
    params.delete("page")

    router.push(`/leaderboard?${params.toString()}`)
  }

  const clearAllFilters = () => {
    router.push("/leaderboard")
  }

  const hasActiveFilters = currentCountry || currentLanguage || currentMinScore || currentMaxScore

  return (
    <div className="space-y-4">
      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <span>Filtros Avançados</span>
        </Button>

        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            <X className="h-4 w-4 mr-2" />
            Limpar Filtros
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {currentCountry && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <span>
                {countries.find((c) => c.code === currentCountry)?.flag}{" "}
                {countries.find((c) => c.code === currentCountry)?.name}
              </span>
              <X className="h-3 w-3 cursor-pointer" onClick={() => updateFilter("country", null)} />
            </Badge>
          )}
          {currentLanguage && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <span>💻 {currentLanguage}</span>
              <X className="h-3 w-3 cursor-pointer" onClick={() => updateFilter("language", null)} />
            </Badge>
          )}
          {(currentMinScore || currentMaxScore) && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <span>
                📊 Score: {currentMinScore || 0} - {currentMaxScore || "∞"}
              </span>
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => {
                  updateFilter("minScore", null)
                  updateFilter("maxScore", null)
                }}
              />
            </Badge>
          )}
        </div>
      )}

      {/* Filter Panel */}
      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filtros de Busca</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Country Filter */}
              {/* Este filtro não é aplicavel pois o GitHub não fornece informações de país diretamente
              */}
              {/* <div className="space-y-2">
                <Label>País</Label>
                <Select
                  value={currentCountry || "all"}
                  onValueChange={(value) => updateFilter("country", value || null)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os países" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os países</SelectItem>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div> */}

              {/* Language Filter */}
              {/* <div className="space-y-2">
                <Label>Linguagem Principal</Label>
                <Select
                  value={currentLanguage || "all"}
                  onValueChange={(value) => updateFilter("language", value || null)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Todas as linguagens" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as linguagens</SelectItem>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang}>
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div> */}

              {/* Score Range */}
              <div className="space-y-2">
                <Label>Score Mínimo</Label>
                <Input
                  type="number"
                  placeholder="0"
                  value={currentMinScore || ""}
                  onChange={(e) => updateFilter("minScore", e.target.value || null)}
                />
              </div>

              <div className="space-y-2">
                <Label>Score Máximo</Label>
                <Input
                  type="number"
                  placeholder="∞"
                  value={currentMaxScore || ""}
                  onChange={(e) => updateFilter("maxScore", e.target.value || null)}
                />
              </div>
            </div>

            {/* Quick Score Ranges */}
            <div className="space-y-2">
              <Label>Ranges Rápidos de Score</Label>
              <div className="flex flex-wrap gap-2">
                {scoreRanges.map((range) => (
                  <Button
                    key={range.label}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateFilter("minScore", range.min.toString())
                      updateFilter("maxScore", range.max.toString())
                    }}
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
