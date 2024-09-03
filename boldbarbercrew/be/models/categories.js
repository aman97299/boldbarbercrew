import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
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

const Categories = mongoose.model("Categories", categoriesSchema);

export default Categories
