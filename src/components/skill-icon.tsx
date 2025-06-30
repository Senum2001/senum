"use client"

import { useState } from "react"

interface SkillIconProps {
  src: string
  alt: string
  className?: string
}

export function SkillIcon({ src, alt, className = "size-12" }: SkillIconProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    // Fallback to a generic icon if the external icon fails to load
    return (
      <div className={`${className} bg-gray-200 rounded-lg flex items-center justify-center`}>
        <span className="text-xs font-medium text-gray-600">{alt.charAt(0).toUpperCase()}</span>
      </div>
    )
  }

  return (
    <div className="bg-white p-2 rounded-lg inline-flex">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        onError={() => setHasError(true)}
        style={{ filter: "brightness(0) saturate(100%)", width: "48px", height: "48px" }} // Makes SVG icons black and sets size
      />
    </div>
  )
}
