import Products from "../models/products.js"

export const addProducts = async (req, res) => {
    try {
        const { name, price, description } = req.body
        const file = req?.file?.originalname
        const newProduct = new Products({ name, price, image: file, description })
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getProducts = async (req, res, next) => {
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const Id = req.params.id;

        const product = await Products.findById(Id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product by ID" });
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req?.body
        await Products.deleteOne({ _id: id })
        res.status(200).json('Success')
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}