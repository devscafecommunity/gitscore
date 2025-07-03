"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Github, Trophy, Search, Info, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Github className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GitScore
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <Button variant={isActive("/") ? "default" : "ghost"} size="sm" className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Buscar</span>
              </Button>
            </Link>

            <Link href="/leaderboard">
              <Button
                variant={isActive("/leaderboard") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <Trophy className="h-4 w-4" />
                <span>Leaderboard</span>
              </Button>
            </Link>

            <Link href="/about">
              <Button
                variant={isActive("/about") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <Info className="h-4 w-4" />
                <span>Sobre</span>
              </Button>
            </Link>

            <Link href="/hall-of-fame">
              <Button
                variant={isActive("/hall-of-fame") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <Trophy className="h-4 w-4" />
                <span>Hall da Fama</span>
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            {mounted && (
              <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
