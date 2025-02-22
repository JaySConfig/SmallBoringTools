import database from '@/data/database.json';
import Link from 'next/link';
import PlaceHolderImage from '@/components/PlaceHolderImage';
import { CATEGORIES } from '@/libs/constants'
import connectMongo from '@/libs/mongoose';
import Tools from '@/models/Tools';

  export function generateStaticParams() {
      return CATEGORIES.map((category) => ({
        category: category,
      }))
    }

    async function getToolsByCategory(category) {
      await connectMongo()
      return Tools.find({ category: category}).lean()
    }

  

  export default async function CategoryPage({ params }) {
    const category = params.category
  
  // Filter projects for this category
  const filteredProjects = await getToolsByCategory(category)

  
  if (!category){
    return <div> Category not found</div>
    
}

  // What should we return if no projects are found?
  if (filteredProjects.length === 0) {
    
    return (
        <main className='max-w-4xl mx-auto p-8'>
            <div className="mb-12 text-center">
                {/* takes user back to chome page */}
                <Link href='/' className='text-gray-500 hover:text-gray-700'>
                ← Back to Home
                </Link>
                <h1 className="text-3xl font-light tracking-tight mb-4">{category}</h1>
                <p className='text-gray-600 font-light'>That's boring! We don't even have an listings for this category 🥱.</p>
            </div>
        </main>
      
    )
  }

  return (
    <div className="p-4">
        <div className='mb-4'> 
        {/* takes user back to home page */}
            <Link href='/' className='text-gray-500 hover:text-gray-700'>
            ← Back to Home
            </Link>
        </div>


      <h1 className="text-3xl font-light tracking-tight text-gray-800 mb-8">{category}</h1>
      {/* How should we display the projects? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map(project => (
           <div key={project.id || project._id}className="p-4 border border-gray-200 hover:border-gray-300 rounded-sm transition-colors">
           <PlaceHolderImage
             src={project.logo} 
             alt={project.title}
           />
           <h2 className="text-xl font-light text-gray-600">{project.title}</h2>
            <p className="text-gray-500">{project.description}</p>
            <div className='mt-2'>
                <a href= {project.url} target='_blank' rel='noopener noreferrer'
                    className='text-gray-500 hover:text-gray-700'>
                        View project → 
                    </a>
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}