"use client"

import { useEffect, useState } from "react"

interface SafeDateProps {
  date: string | Date
  format?: "localeDate" | "year" | "full"
  locale?: string
}

export function SafeDate({ date, format = "localeDate", locale = "pt-BR" }: SafeDateProps) {
  const [formattedDate, setFormattedDate] = useState<string>("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const dateObj = new Date(date)
    
    switch (format) {
      case "year":
        setFormattedDate(dateObj.getFullYear().toString())
        break
      case "full":
        setFormattedDate(dateObj.toLocaleDateString(locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }))
        break
      case "localeDate":
      default:
        setFormattedDate(dateObj.toLocaleDateString(locale))
        break
    }
  }, [date, format, locale])

  // Renderiza apenas no lado do cliente para evitar problemas de hidratação
  if (!isClient) {
    return <span>...</span>
  }

  return <span>{formattedDate}</span>
}
