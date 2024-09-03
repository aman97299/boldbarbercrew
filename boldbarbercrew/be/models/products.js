import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const Products = mongoose.model("Products", productSchema)

export default Products
