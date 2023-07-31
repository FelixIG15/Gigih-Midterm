import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    },
    createdAt: {
        type: Date,
        required: true,
    },
    deletedAt: {
        type: Date
    },
  });

const Comment = mongoose.model('Comment', commentSchema)

export default Comment;