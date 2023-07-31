import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String,
        unique: true,
        dropDups: true
    },
    thumbnailImage: {
        required: true,
        type: String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    createdAt : Date,
    deletedAt : Date,
});

const Video = mongoose.model('Video', videoSchema)

export default Video;