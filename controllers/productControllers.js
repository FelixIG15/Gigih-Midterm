import Product from "../model/products.js";

export const createProductController = async (req, res) => {
  try {
    const { title, description, imageUrl, price } = req.body;
    const createdAt = new Date().toISOString()
    const newProduct = new Product({
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
      createdAt: createdAt
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to create product.' });
  }
};

export const getAllProductsController = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products.' });
  }
};

export const getProductByIdController = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the product.' });
  }
};