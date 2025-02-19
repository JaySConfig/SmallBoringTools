'use client'
import { useState } from 'react'
import { CATEGORIES } from '@/libs/constants'

export default function SubmitModal({ onClose }) {
  const selectableCategories = CATEGORIES.filter(cat => cat !== 'boring')

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: 'https://',
    category: ['boring']  // boring is always preselected
  })
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.title || ! formData.description || ! formData.url || formData.categorie.length < 2) {
        alert ('Please fill in all fields and select a category')
    } return
}

    // generate a new ID

    const newId = crypto.randomUUID()

    // create the full submission object
    const submission = {
        id: newId,
        ...formData,
        submittedAt: new Date().toISOString().split('T')[0],
        status: 'approved',
        boringRating: '7/10 - like watching paint dry'
    }

    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submission)
        })

        console.log('Submitting:', submission)
    onclose()

    if (response.ok) {
        onClose()
        console.log ("submission sucessfull")
    }



    } catch (error) {
        console.error("Error submitting:", error)
        alert('Error submitting:', error )
        alert('Error submitting your tool. Please try again.')
        
    }

    


  const toggleCategory = (category) => {
    setFormData(prev => ({
      ...prev,
      category: ['boring', category] // Always 'boring' plus exactly one other category
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-sm max-w-lg w-full m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-light">submit your boring tool</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="tool name"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full p-2 border border-gray-200 rounded-sm font-light"
          />
          <textarea 
            placeholder="description (make it boring)"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full p-2 border border-gray-200 rounded-sm font-light h-24"
          />
          <input 
            type="url" 
            placeholder="your tool's url"
            value={formData.url}
            onChange={(e) => {
                let url = e.target.value
                // Only reset to https:// if they've completely cleared the field
                if (url === '') {
                url = 'https://'
                }
                setFormData(prev => ({ ...prev, url: url }))
            }}
            className="w-full p-2 border border-gray-200 rounded-sm font-light"
            />
          
          <div className="space-y-2">
            <p className="text-gray-600 font-light">select one additional category</p>
            <div className="flex flex-wrap gap-2">
              {selectableCategories.map(category => (
                <button
                  key={category}
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className={`p-2 rounded-sm transition-colors font-light ${
                    formData.category.includes(category)
                      ? 'border-gray-400 bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } border`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            className="w-full p-2 border border-gray-200 hover:border-gray-300 rounded-sm transition-colors font-light"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  )
}