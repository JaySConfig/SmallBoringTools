import mongoose from 'mongoose'

const connectMongo = async () => {
  try {
    console.log('Connecting to MongoDB...')
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI missing in environment variables')
    }
    
    // Add connection options that might help
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    })
    
    console.log(`MongoDB connected: ${conn.connection.host}`)
    return conn
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

export default connectMongo