"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Github, Trophy, Search, Info, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { marked } from "marked"

// Busca o readme.md do usuario e renderiza
// api: https://raw.githubusercontent.com/[username]/[username]/main/README.md

export function ReadmeMD({ username }: { username: string }) {
    const [readme, setReadme] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function fetchReadme() {
            try {
                const response = await fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`)
                if (!response.ok) throw new Error("Failed to fetch README")
                const text = await response.text()
                
                // Converter Markdown para HTML
                const htmlContent = await marked(text)
                setReadme(htmlContent)
            } catch (error) {
                console.error("Error fetching README:", error)
                setReadme("") // README não encontrado ou erro
            } finally {
                setIsLoading(false)
            }
        }

        fetchReadme()
    }, [username])

    if (isLoading) {
        return (
            <div className="max-w-6xl mx-auto p-4">
                <div className="animate-pulse">
                    <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded mb-4 w-48"></div>
                    <div className="space-y-3">
                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
                    </div>
                </div>
            </div>
        )
    }

    if (!readme) {
        return (
            <div className="max-w-6xl mx-auto p-4">
                <div className="text-center py-8">
                    <div className="text-slate-500 dark:text-slate-400">
                        <Info className="h-12 w-12 mx-auto mb-4" />
                        <p className="text-lg font-medium mb-2">README não encontrado</p>
                        <p className="text-sm">Este usuário não possui um README.md em seu perfil</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-4">
                    <h2 className="text-xl font-semibold flex items-center">
                        <Github className="h-5 w-5 mr-2" />
                        README.md
                    </h2>
                </div>
                <div className="p-6">
                    <div 
                        className="prose prose-slate dark:prose-invert max-w-none
                            prose-headings:text-slate-900 dark:prose-headings:text-slate-100
                            prose-p:text-slate-700 dark:prose-p:text-slate-300
                            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-slate-900 dark:prose-strong:text-slate-100
                            prose-code:text-slate-900 dark:prose-code:text-slate-100 prose-code:bg-slate-100 dark:prose-code:bg-slate-800
                            prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800
                            prose-blockquote:border-l-slate-300 dark:prose-blockquote:border-l-slate-600
                            prose-hr:border-slate-200 dark:prose-hr:border-slate-700
                            prose-ul:text-slate-700 dark:prose-ul:text-slate-300
                            prose-ol:text-slate-700 dark:prose-ol:text-slate-300
                            prose-li:text-slate-700 dark:prose-li:text-slate-300"
                        dangerouslySetInnerHTML={{ __html: readme }} 
                    />
                </div>
            </div>
        </div>
    )
}
