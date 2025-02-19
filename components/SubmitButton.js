'use client'
import { useState } from 'react'
import SubmitModal from './SubmitModal'


export default function SubmitButton() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="flex justify-center">
      <button 
        onClick={() => setIsOpen(true)}
        className="mt-12 p-4 border border-gray-200 hover:border-gray-300 rounded-sm transition-colors bg-gray-50 font-normal"
      >
        Submit your boring tool
      </button>
      {isOpen && <SubmitModal onClose={() => setIsOpen(false)} />}
    </div>
  )
} 