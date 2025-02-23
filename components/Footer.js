import Link from 'next/link'
import database from '@/data/database.json'

export default function Footer() {
  // Get unique categories directly in the footer
  const uniqueCategories = new Set()
  database.projects.forEach(project => {
    project.category.forEach(cat => uniqueCategories.add(cat))
  })

  return (
    <footer className="mt-24 pt-8 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-light mb-2">Boring Categories</h3>
          <div className="space-y-2">
            {Array.from(uniqueCategories).map((category) => (
              <Link 
                key={category}
                href={`/submissions/${category}`}
                className="block text-gray-500 font-light text-sm hover:text-gray-700"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-light mb-2">Submit Your Tool</h3>
          <p className="text-gray-500 font-light text-sm">
            Got something painfully boring?
            <br />
            Perfect. List it here for free.
          </p>
          <Link 
            href="/submit" 
            className="text-gray-500 text-sm mt-4 inline-block hover:text-gray-700 font-light"
          >
            Submit →
          </Link>
        </div>

        <div>
          <h3 className="font-light mb-2">About</h3>
          <p className="text-gray-500 font-light text-sm">
            We celebrate the mundane.
            <br />
            No AI. No blockchain. No excitement.
            <br />
            Just reliable, boring tools.
          </p>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-400 font-light text-xs">
          This footer is intentionally underwhelming.
        </p>
      </div>
    </footer>
  )
}