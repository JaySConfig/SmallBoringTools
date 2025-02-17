import database from '@/data/database.json';
import Link from 'next/link';

console.log('Database projects:', database.projects); // Add this line at the top

// This tells Next.js which category routes to generate
// export function generateStaticParams() {
    // // Get unique categories from our database
    // const uniqueCategories = new Set()
    // database.projects.forEach(project => {
    //   project.category.forEach(cat => uniqueCategories.add(cat))
    // })
    
    // // Return them in the format Next.js expects
    // return Array.from(uniqueCategories).map((category) => ({
    //   category: category,
    // }))

    export function generateStaticParams() {
      const uniqueCategories = new Set()
      database.projects.forEach(project => {
        project.category.forEach(cat => uniqueCategories.add(cat))
      })
      
      const params = Array.from(uniqueCategories).map((category) => ({
        category: category,
      }))
      console.log('Generated params:', params); // Add this line
      return params;
  }

  // }

export default function CategoryPage({ params }) {
  console.log('Params:', params); // Add this line
  const category = params.category
  console.log('Category:', category)
  // const category = params.category
  
  // Filter projects for this category
  const filteredProjects = database.projects.filter(project => 
    project.category.includes(category)
  )
  
  if (!category){
    return <div> Category not found</div>
    
}

  // What should we return if no projects are found?
  if (filteredProjects.length === 0) {
    
    return (
        <main className='max-w-4xl mx-auto p-8'>
            <div className="mb-12 text-center">
                {/* takes user back to chome page */}
                <Link href='/' className='text-grey-500 hover:text-text-grey-700'>
                ← Back to Home
                </Link>
                <h1 className="text-3xl font-light tracking-tight mb-4">Cat›gory: {category}</h1>
                <p className='text-gray-600 font-light'>No projects found in this category.</p>
            </div>
        </main>
      
    )
  }

  return (
    <div className="p-4">
        <div className='mb-4'> 
        {/* takes user back to home page */}
            <Link href='/' className='text-blue-500 hover:text-text-blue-700'>
            ← Back to Home
            </Link>
        </div>


      <h1 className="text-2xl font-bold mb-4">Category: {category}</h1>
      {/* How should we display the projects? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map(project => (
          <div key={project.id} className="border p-4 rounded-lg shadow">
            <img src={project.logo} alt={project.title} className="w-16 h-16 object-contain mb-2"/>

            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className='mt-2'>
                <a href= {project.url} target='_blank' rel='noopener noreferrer'
                    className='text-blue-500 hover:text-blue-700'>
                        View project → 
                    </a>
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}