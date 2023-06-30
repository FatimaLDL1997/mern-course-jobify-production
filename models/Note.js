import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide title'],
      maxlength: 50,
    },
    note: {
      type: String,
      required: [true, 'Please provide note'],
      maxlength:50000,
    },
    // status: {
    //   type: String,
    //   enum: ['interview', 'declined', 'pending'],
    //   default: 'pending',
    // },
    // jobType: {
    //   type: String,
    //   enum: ['full-time', 'part-time', 'remote', 'internship'],
    //   default: 'full-time',
    // },
    // jobLocation: {
    //   type: String,
    //   default: 'my city',
    //   required: true,
    // },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Notes', JobSchema)
