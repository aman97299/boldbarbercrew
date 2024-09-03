import mongoose from "mongoose";

const cartItemSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", // Assuming you have a User model
        // required: true,
      },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    price: {
        type: Number,
        required: true,
    },
    Totalprice: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const CartItem = mongoose.model("CartItem", cartItemSchema);

export default CartItem;
