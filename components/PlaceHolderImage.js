'use client'

import { useState } from 'react'

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
    <img 
      src={src} 
      alt={alt} 
      className="w-16 h-16 object-contain"
      onError={() => setShowFallback(true)}
    />
  )
}

export default PlaceHolderImage