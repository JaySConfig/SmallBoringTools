// app/page.js
import Link from 'next/link'
import database from '@/data/database.json'

export default function HomePage() {
  // Get unique categories from our database
  const uniqueCategories = new Set()
  database.projects.forEach(project => {
    project.category.forEach(cat => uniqueCategories.add(cat))
  })

  return (
    <main className="max-w-4xl mx-auto p-8">
      {/* Intentionally boring header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-mono mb-2">Small Boring Tools</h1>
        <p className="text-gray-600 font-mono">a boring website for boring tools</p>
      </div>

      {/* Simple category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from(uniqueCategories).map((category) => (
          <Link 
            key={category}
            href={`/submissions/${category}`}
            className="p-4 border border-gray-200 hover:border-gray-300 rounded-sm transition-colors font-mono"
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Latest additions - keeping it simple */}
      <div className="mt-12">
        <h2 className="text-xl font-mono mb-4">Latest Tools</h2>
        <div className="space-y-4">
          {database.projects.slice(0, 3).map(project => (
            <div key={project.id} className="p-4 border border-gray-200 rounded-sm">
              <h3 className="font-mono">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}