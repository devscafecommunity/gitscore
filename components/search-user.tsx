"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, User, Star } from "lucide-react"
import { SafeNumber } from "@/components/safe-number"

interface SearchSuggestion {
  username: string
  name: string
  score: number
  rank: string
  country: string
  avatar: string
}

export function SearchUser() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Dados simulados de usuários populares para autocomplete
  const popularUsers: SearchSuggestion[] = [
    {
      username: "torvalds",
      name: "Linus Torvalds",
      score: 4892,
      rank: "SS+",
      country: "🇫🇮",
      avatar: "/placeholder.svg",
    },
    { username: "gaearon", name: "Dan Abramov", score: 4156, rank: "SS", country: "🇺🇸", avatar: "/placeholder.svg" },
    {
      username: "sindresorhus",
      name: "Sindre Sorhus",
      score: 3924,
      rank: "SS",
      country: "🇳🇴",
      avatar: "/placeholder.svg",
    },
    { username: "tj", name: "TJ Holowaychuk", score: 3654, rank: "S", country: "🇨🇦", avatar: "/placeholder.svg" },
    { username: "addyosmani", name: "Addy Osmani", score: 3421, rank: "S", country: "🇬🇧", avatar: "/placeholder.svg" },
    {
      username: "kentcdodds",
      name: "Kent C. Dodds",
      score: 3287,
      rank: "S",
      country: "🇺🇸",
      avatar: "/placeholder.svg",
    },
    { username: "rafaeljs", name: "Rafael Silva", score: 1742, rank: "A", country: "🇧🇷", avatar: "/placeholder.svg" },
    { username: "luizdev", name: "Luiz Developer", score: 1456, rank: "A", country: "🇧🇷", avatar: "/placeholder.svg" },
    { username: "mariacode", name: "Maria Coder", score: 1234, rank: "A", country: "🇧🇷", avatar: "/placeholder.svg" },
  ]

  useEffect(() => {
    if (username.length >= 2) {
      const filtered = popularUsers
        .filter(
          (user) =>
            user.username.toLowerCase().includes(username.toLowerCase()) ||
            user.name.toLowerCase().includes(username.toLowerCase()),
        )
        .slice(0, 5)

      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [username])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) return

    setIsLoading(true)
    setShowSuggestions(false)

    // Salvar no localStorage para histórico (apenas no cliente)
    if (typeof window !== 'undefined') {
      const searchHistory = JSON.parse(localStorage.getItem("gitscore-searches") || "[]")
      const newSearch = { username: username.trim(), timestamp: Date.now() }
      const updatedHistory = [newSearch, ...searchHistory.filter((s: any) => s.username !== username.trim())].slice(0, 10)
      localStorage.setItem("gitscore-searches", JSON.stringify(updatedHistory))
    }

    setTimeout(() => {
      if (isClient) {
        router.push(`/user/${username.trim()}`)
      }
      setIsLoading(false)
    }, 500)
  }

  const handleSuggestionClick = (suggestionUsername: string) => {
    setUsername(suggestionUsername)
    setShowSuggestions(false)
    if (isClient) {
      router.push(`/user/${suggestionUsername}`)
    }
  }

  return (
    <div className="relative max-w-md mx-auto">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Digite um username do GitHub..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => username.length >= 2 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="pl-10 h-12"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          {isLoading ? "Buscando..." : "Buscar"}
        </Button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-lg">
          <CardContent className="p-2">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.username}
                className="flex items-center space-x-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors"
                onClick={() => handleSuggestionClick(suggestion.username)}
              >
                <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{suggestion.username}</span>
                    <span className="text-sm">{suggestion.country}</span>
                    <Badge variant="outline" className="text-xs">
                      Rank {suggestion.rank}
                    </Badge>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {suggestion.name} • <SafeNumber value={suggestion.score} /> pts
                  </div>
                </div>
                <Star className="h-4 w-4 text-yellow-500" />
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
