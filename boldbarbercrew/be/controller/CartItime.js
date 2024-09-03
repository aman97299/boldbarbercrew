// import CartItem from "../models/CartItem.js"; // Make sure to provide the correct path to your CartItem model
// import Products from "../models/products.js"; // Make sure to provide the correct path to your Product model

// export const addToCart = async (req, res) => {
//     try {
//         // const { productId, quantity } = req.body;

//         // Fetch the product details including the price
//         const Product = await Products.findById(productId);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         const cartItem = new CartItem({
//             product: req.body.productId,
//             quantity: req.body.quantity,
//             price: product.price,
//             Totalprice:(product.price)*(quantity) // Use the price fetched from the product
//         });

//         await cartItem.create();

//         res.status(201).json({ message: "Item added to cart successfully", cartItem });
//     } catch (error) {
//         res.status(500).json({ error: "Error adding item to cart" });
//     }
// };
import Products from '../models/products.js'; // Import the Products model
import CartItem from '../models/CartItem.js'; // Import the CartItem model

// export const addToCart = async (req, res) => {
//     try {
//         const { productId } = req.body;
//         const quantity = 1;
//         // Fetch the product details including the price
//         const product = await Products.findById(productId); // Correct the variable name from 'Product' to 'product'

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // Check if the same product already exists in the cart
//         const existingCartItem = await CartItem.findOne({ product: productId });
//         if (existingCartItem) {
//             // If the same product exists, update the quantity and total price
//             existingCartItem.quantity += quantity;
//             existingCartItem.totalPrice = existingCartItem.price * existingCartItem.quantity;
//             await existingCartItem.save();
//             return res.status(200).json({ message: "Quantity updated in cart", cartItem: existingCartItem });
//         } else {
            
//             // If the product is not in the cart, create a new cart item
//             const cartItem1 = new CartItem({
//                 product: productId,
//                 quantity: quantity,
//                 price: product.price,
//                 Totalprice: product.price * quantity
//             });
            
//             await cartItem1.save();
//         const saveItem = await cartItem1.save()

            
//             res.status(201).json({ message: "Item added to cart successfully", cartItem });
//         }
//     } catch (error) {
//         res.status(500).json({ error: "Error adding item to cart" });
//     }
// };

export const addToCart = async (req, res) => {
    try {
        const { productId, userId } = req.body; // Extract userId from the request body
        const quantity = 1;

        // Fetch the product details including the price
        const product = await Products.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Check if the same product already exists in the cart for the user
        const existingCartItem = await CartItem.findOne({ user: userId, product: productId });

        if (existingCartItem) {
            // If the same product exists, update the quantity and total price
            existingCartItem.quantity += quantity;
            existingCartItem.totalPrice = existingCartItem.price * existingCartItem.quantity;
            await existingCartItem.save();
            return res.status(200).json({ message: "Quantity updated in cart", cartItem: existingCartItem });
        } else {
            // If the product is not in the cart, create a new cart item
            const cartItem = new CartItem({
                user: userId,
                product: productId,
                quantity: quantity,
                price: product.price,
                Totalprice: product.price * quantity
            });

            await cartItem.save();
            
            res.status(201).json({ message: "Item added to cart successfully", cartItem });
        }
    } catch (error) {
        res.status(500).json({ error: "Error adding item to cart" });
    }
};


// export const getCartItems = async (req, res) => {
//     try {
//         // Assuming you have a user authentication mechanism and you can get the user ID from the request
//         // const userId = req.user.id; // Replace this with the actual way you get the user ID

//         // Fetch all cart items for the user
//         const cartItems = await CartItem.find()
//             // Populate the product field with name and price

//         res.json(cartItems);
//     } catch (error) {
//         res.status(500).json({ error: "Error fetching cart items" });
//     }
// };
export const getCartItems = async (req, res) => {
    try {
        // Assuming you have a user authentication mechanism and you can get the user ID from the request
        // const userId = req.user.id; // Replace this with the actual way you get the user ID

        // Fetch all cart items for the user and populate the 'product' field
        const cartItems = await CartItem.find()
            .populate('product'); // Populate 'product' with 'name' and 'price' fields

        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: "Error fetching cart items" });
    }
};
// export const deleteCartItem = async (req, res) => {
//     try {
//         const cartItemId = req.params.cartItemId;

//         const deletedCartItem = await CartItem.findByIdAndDelete(cartItemId);

//         if (!deletedCartItem) {
//             return res.status(404).json({ message: "Cart item not found" });
//         }

//         res.json({ message: "Cart item deleted successfully", deletedCartItem });
//     } catch (error) {
//         res.status(500).json({ error: "Error deleting cart item" });
//     }
// };

export const deleteCartItem = async (req, res) => {
    try {
        const cartItemId = req.params.id;
        console.log(cartItemId)
        const cartItem = await CartItem.findById(cartItemId);

        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        if (cartItem.quantity > 1) {
            // Decrease the quantity by one and update total price
            cartItem.quantity -= 1;
            cartItem.totalPrice = cartItem.price * cartItem.quantity;
            await cartItem.save();

            return res.json({ message: "Cart item quantity decreased", updatedCartItem: cartItem });
        } else {
            // If quantity is 1 or less, delete the cart item
            await cartItem.remove();

            return res.json({ message: "Cart item deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting cart item" });
    }
};
