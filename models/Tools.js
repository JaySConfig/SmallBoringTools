import mongoose from 'mongoose'

const ToolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    minLength: [5, 'Title must be at least 5 characters long']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    minLength: [20, 'Description must be at least 20 characters long']
  },
  url: {
    type: String,
    required: [true, 'Please provide a URL']
  },
  category: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return v.includes('boring') && v.length === 2
      },
      message: 'Must include boring and one other category'
    }
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'approved'
  },
  boringRating: String  // Now optional
})

export default mongoose.models.Tool || mongoose.model('Tool', ToolSchema)