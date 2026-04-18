import Product from "../models/Product.js";

// GET all products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// GET single product
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// CREATE product
export const createProduct = async (req, res) => {
  const { name, price, category, description, image } = req.body;

  const product = await Product.create({
    name,
    price,
    category,
    description,
    image,
  });

  res.status(201).json(product);
}; 