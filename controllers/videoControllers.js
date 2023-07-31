import Video from "../model/video.js";
import Product from "../model/products.js";

export const createVideoController = async (req, res) => {
    try {
      const { title, url, thumbnailImage } = req.body;
      createdAt = new Date().toISOString();
      const newVideo = new Video({
        title: title,
        url: url,
        thumbnailImage: thumbnailImage,
        createdAt: createdAt
      });
      const savedVideo = await newVideo.save();
      res.status(201).json(savedVideo);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Failed to create video.'});
    }
  };

export const getAllVideosController = async (req, res) => {
  try {
    const videos = await Video.find().populate({
      path: 'products'
    });
    res.status(200).json(videos);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch videos.' });
  }
};

export const getVideoByIdController = async (req, res) => {
  try {
    const { videoId } = req.params;
    const video = await Video.findById(videoId).populate({
      path: 'products'
    });
    if (!video) {
      return res.status(404).json({ error: 'Video not found.' });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the video.' });
  }
};

export const populateProductsForVideo = async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const { productId } = req.body;
    const selectedVideo = await Video.findById(videoId);
    const selectedProduct = await Product.findById(productId);
    if (!selectedVideo) {
      return res.status(404).json({ error: 'Video not found.'});
    }
    selectedVideo.products.push(selectedProduct);
    const updatedVideo = await selectedVideo.save();
    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to populate products for the video.' });
  }
};