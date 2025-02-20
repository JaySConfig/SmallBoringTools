import database from '@/data/database.json'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request) {
  try {
    console.log("API route hit")
    const submission = await request.json()
    console.log("Submission received:", submission)
    
    // Add the new submission to the database
    database.projects.push(submission)
    console.log("Added to database array")
    
    // Get the file path
    const filePath = join(process.cwd(), 'data/database.json')
    console.log("File path:", filePath)
    
    // Write the updated database back to the file
    await writeFile(
      filePath,
      JSON.stringify(database, null, 2)
    )
    console.log("File written successfully")
    
    return Response.json({ success: true })
  } catch (error) {
    console.error('Detailed error:', error)
    console.error('Error stack:', error.stack)
    return Response.json({ 
      success: false, 
      error: error.message,
      stack: error.stack 
    }, { status: 500 })
  }
}