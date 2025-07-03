"use client"

import { useEffect, useState } from "react"

export function useAccountAge(createdAt: string) {
  const [accountAge, setAccountAge] = useState<number>(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const age = Math.floor((Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24 * 365))
    setAccountAge(age)
  }, [createdAt])

  return { accountAge, isClient }
}
