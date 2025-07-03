import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GitScore - Ranking de Desenvolvedores GitHub",
  description:
    "Descubra os desenvolvedores mais influentes do GitHub com o GitScore. Sistema de ranking baseado em contribuições, popularidade e impacto na comunidade.",
  keywords: "github, ranking, desenvolvedores, score, leaderboard, open source",
  authors: [{ name: "GitScore Team" }],
  openGraph: {
    title: "GitScore - Ranking de Desenvolvedores GitHub",
    description: "Descubra os desenvolvedores mais influentes do GitHub",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
