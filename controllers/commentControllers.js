import Comment from "../model/comments.js";
import Video from "../model/video.js";
import User from "../model/user.js"

export const createCommentController = async (req, res) => {
    try {
        const { comment, userId, videoId } = req.body;
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        const existingVideo = await Video.findById(videoId);
        if (!existingVideo) {
            return res.status(404).json({ error: 'Video not found.' });
        }
        const createdAt = new Date().toISOString();
        const newComment = new Comment({
            comment: comment,
            user: existingUser,
            video: existingVideo,
            createdAt: createdAt
        });
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create comment.' });
    }
};

export const getCommentsByVideoIdController = async (req, res) => {
    try {
        const { videoId } = req.params;
        const comments = await Comment.find({video: videoId}).populate('user');
        res.status(200).json(comments);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch comments.' });
    }
};
