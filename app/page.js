// // app/page.js
// import Link from 'next/link'
// import database from '@/data/database.json'

// export default function HomePage() {
//   // Get unique categories from our database
//   const uniqueCategories = new Set()
//   database.projects.forEach(project => {
//     project.category.forEach(cat => uniqueCategories.add(cat))
//   })

//   return (
//     <main className="max-w-4xl mx-auto p-8">
//       {/* Intentionally boring header */}
//       <div className="mb-12 text-center">
//         <h1 className="text-3xl font-mono mb-2">Small Boring Tools</h1>
//         <p className="text-gray-600 font-mono">a boring website for boring tools</p>
//       </div>

//       {/* Simple category grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {Array.from(uniqueCategories).map((category) => (
//           <Link 
//             key={category}
//             href={`/submissions/${category}`}
//             className="p-4 border border-gray-200 hover:border-gray-300 rounded-sm transition-colors font-mono"
//           >
//             {category}
//           </Link>
//         ))}
//       </div>

//       {/* Latest additions - keeping it simple */}
//       <div className="mt-12">
//         <h2 className="text-xl font-mono mb-4">Latest Tools</h2>
//         <div className="space-y-4">
//           {database.projects.slice(0, 3).map(project => (
//             <div key={project.id} className="p-4 border border-gray-200 rounded-sm">
//               <h3 className="font-mono">{project.title}</h3>
//               <p className="text-gray-600 text-sm mt-1">{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }

// import Link from 'next/link'
// import database from '@/data/database.json'
// import Footer from '@/components/Footer'

// export default function HomePage() {
//   const uniqueCategories = new Set()
//   database.projects.forEach(project => {
//     project.category.forEach(cat => uniqueCategories.add(cat))
//   })

//   return (
//     <main className="max-w-4xl mx-auto p-8">
//       <div className="mb-12 text-center">
//         <h1 className="text-3xl font-light tracking-tight mb-2">Small Boring Tools</h1>
//         <p className="text-gray-600 font-light">a boring website for boring tools</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {Array.from(uniqueCategories).map((category) => (
//           <Link 
//             key={category}
//             href={`/submissions/${category}`}
//             className="p-4 border border-gray-200 hover:border-gray-300 rounded-sm transition-colors font-light"
//           >
//             {category}
//           </Link>
//         ))}
//       </div>

//               {/* Latest Tools */}
//         <div className="mt-12">
//           <h2 className="text-xl font-light mb-4">Latest Tools</h2>
//           <div className="space-y-4">
//             {database.projects.map(project => (
//               <div key={project.id} className="p-4 border border-gray-200 rounded-sm">
//                 <div className="flex justify-between items-start">
//                   <h3 className="font-light">{project.title}</h3>
//                   <span className="text-xs text-gray-500 font-light">
//                     {project.boringRating}
//                   </span>
//                 </div>
//                 <p className="text-gray-600 text-sm mt-1 font-light">{project.description}</p>
//                 <a 
//                   href={project.url} 
//                   className="text-gray-500 text-sm mt-2 inline-block hover:text-gray-700 font-light"
//                 >
//                   View tool →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Footer />
      
//     </main>
//   )
// }

import Link from 'next/link';
import database from '@/data/database.json';
import Footer from '@/components/Footer';
import { CATEGORIES } from '@/libs/constants'
import SubmitButton from '@/components/SubmitButton';
import connectMongo from '@/libs/mongoose'
import Tools from '@/models/Tools'

async function getLatestTools() {
  try {
    console.log('Getting latest tools from MongoDB...')
    await connectMongo()
    const tools = await Tool.find().sort({ submittedAt: -1 }).lean()
    console.log(`Found ${tools.length} tools`)
    return tools
  } catch (error) {
    console.error('Error fetching tools:', error)
    // Fallback to empty array if MongoDB fails
    return []
  }
}



export default async function HomePage() {
  // Get unique categories

  const projects = await getLatestTools()
  

  return (
    <main className="max-w-4xl mx-auto p-8">
      {/* Header and Tagline */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-light tracking-tight mb-2">Small Boring Tools</h1>
        <p className="text-gray-600 font-light">The most reliable tools are the boring ones</p>
      </div>

      {/* Bio Section */}
      <div className="mb-12 max-w-2xl mx-auto text-center">
        <p className="text-gray-600 font-light mb-4">
          Just simple, predictable tools that do one thing well.
          No AI, no blockchain, no paradigm shifts.
          We're proudly as exciting as your local tax accountant.
        </p>
        <p className="text-gray-500 font-light text-sm">
          If you're looking for AI tools, you're in the wrong place. 
          They're way too exciting for us.
        </p>
      </div>

      {/* Categories */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from(uniqueCategories).map((category) => (
          <Link 
            key={category}
            href={`/submissions/${category}`}
            className="p-4 border border-gray-200 hover:border-gray-300 rounded-sm transition-colors font-light"
          >
            {category}
          </Link>
        ))}
      
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CATEGORIES.map((category) => (
          <Link 
            key={category}
            href={`/submissions/${category}`}
            className="p-4 border border-gray-200 hover:border-gray-300 rounded-sm transition-colors font-light"
          >
            {category}
          </Link>
        ))}
      </div>

      <div><SubmitButton/></div>

      {/* Latest Tools */}
      <div className="mt-12">
        <h2 className="text-xl font-light mb-4">Latest Tools</h2>
        <div className="space-y-4">
          {database.projects.map(project => (
            <div key={project.id} className="p-4 border border-gray-200 rounded-sm">
              <div className="flex justify-between items-start">
                <h3 className="font-light">{project.title}</h3>
                <span className="text-xs text-gray-500 font-light">
                  {project.boringRating}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1 font-light">{project.description}</p>
              <a 
                href={project.url} 
                className="text-gray-500 text-sm mt-2 inline-block hover:text-gray-700 font-light"
              >
                View tool →
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}