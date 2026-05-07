"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"

const categoryLinks = [
  "/categories/sprints",
  "/categories/t-shirts",
  "/categories/long-sleeves",
  "/categories/premium",
]

export default function RandomProductSelector() {
  const router = useRouter()

  const randomCategory = useMemo(
    () => categoryLinks[Math.floor(Math.random() * categoryLinks.length)],
    []
  )

  return (
    <button
      onClick={() => router.push(randomCategory)}
      className="border border-mswysl-acid px-5 py-3 text-small-semi uppercase text-mswysl-acid"
    >
      Random product
    </button>
  )
}
