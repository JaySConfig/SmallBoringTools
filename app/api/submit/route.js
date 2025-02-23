// import database from '@/data/database.json'
// import { writeFile } from 'fs/promises'
// import { join } from 'path'

// export async function POST(request) {
//   try {
//     console.log("API route hit")
//     const submission = await request.json()
//     console.log("Submission received:", submission)
    
//     // Add the new submission to the database
//     database.projects.push(submission)
//     console.log("Added to database array")
    
//     // Get the file path
//     const filePath = join(process.cwd(), 'data/database.json')
//     console.log("File path:", filePath)
    
//     // Write the updated database back to the file
//     await writeFile(
//       filePath,
//       JSON.stringify(database, null, 2)
//     )
//     console.log("File written successfully")
    
//     return Response.json({ success: true })
//   } catch (error) {
//     console.error('Detailed error:', error)
//     console.error('Error stack:', error.stack)
//     return Response.json({ 
//       success: false, 
//       error: error.message,
//       stack: error.stack 
//     }, { status: 500 })
//   }
// }

// import connectMongo from '@/libs/mongoose'
// import Tools from '@/models/Tools'

// export async function POST(request) {
//   try {
//     // Connect to MongoDB
//     await connectMongo()
    
//     // Get the data from the request
//     const data = await request.json()
    
//     // Create the tool using our mongoose model
//     const tools = await Tools.create(data)
    
//     return Response.json({ success: true, data: tools })
//   } catch (error) {
//     console.error('Submission error:', error)
//     return Response.json(
//       { success: false, error: error.message }, 
//       { status: 500 }
//     )
//   }
// }

import connectMongo from '@/libs/mongoose'
import Tools from '@/models/Tools'

export async function POST(request) {
  try {
    const data = await request.json()

    // Check honeypot
    if (data.website_url) {
      // Silently reject bot submissions
      return Response.json({ success: true })
    }

    // Connect to MongoDB
    await connectMongo()

    // Add submission status and date
    const submission = {
      ...data,
      status: 'approved',
      submittedAt: new Date().toISOString(),
      // boringRating: '7/10 - like watching paint dry'
    }

    // Create the tool using our mongoose model
    const tools = await Tools.create(submission)
    return Response.json({ success: true, data: tools })

  } catch (error) {
    console.error('Submission error:', error)
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}