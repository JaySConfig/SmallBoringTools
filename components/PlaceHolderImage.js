'use client'
import { useState } from 'react'
import Image from 'next/image'

const PlaceHolderImage = ({ src, alt }) => {
  const [showFallback, setShowFallback] = useState(!src)

  if (showFallback) {
    return (
      <div className="w-16 h-16 flex items-center justify-center">
        <span className="text-2xl">😴</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="w-16 h-16 object-contain"
      onError={() => setShowFallback(true)}
    />
  )
}

export default PlaceHolderImage