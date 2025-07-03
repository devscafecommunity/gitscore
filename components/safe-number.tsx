"use client"

import { useEffect, useState } from "react"

interface SafeNumberProps {
  value: number
  format?: "default" | "compact"
}

export function SafeNumber({ value, format = "default" }: SafeNumberProps) {
  const [formattedValue, setFormattedValue] = useState<string>("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    if (format === "compact") {
      // Formatação compacta (k, M, etc.)
      if (value >= 1000000) {
        setFormattedValue((value / 1000000).toFixed(1) + "M")
      } else if (value >= 1000) {
        setFormattedValue((value / 1000).toFixed(1) + "k")
      } else {
        setFormattedValue(value.toString())
      }
    } else {
      // Formatação padrão com locale brasileiro
      setFormattedValue(value.toLocaleString("pt-BR"))
    }
  }, [value, format])

  // Renderiza apenas no lado do cliente para evitar problemas de hidratação
  if (!isClient) {
    return <span>{value}</span>
  }

  return <span>{formattedValue}</span>
}
