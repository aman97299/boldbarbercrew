import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import helmet from "helmet"
import mongoose from "mongoose"
import morgan from "morgan"
import multer from "multer"
import path from "path"
import swaggerUi from 'swagger-ui-express'
import { fileURLToPath } from "url"
import { addCategories, deleteCategory, getCategories } from "./controller/categories.js"
import swagger_output from './swagger_output.json' assert { type: "json" }
import { addServices, deleteService, getServices } from "./controller/services.js"
import { addProducts, deleteProduct, getProductById, getProducts } from "./controller/products.js"
import { addBookings, getBookings } from "./controller/bookings.js"
import { addToCart, deleteCartItem, getCartItems } from "./controller/CartItime.js"
import { login, register } from "./controller/User.js"

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()

const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, "public/assets")))

/* FILE STORAGE */
const storage = multer.diskStorage({ destination: function (req, file, cb) { cb(null, "public/assets") }, filename: function (req, file, cb) { cb(null, file.originalname) }, })
const upload = multer({ storage })

/*  ROUTES */

//user api
app.post('/register', register);
app.post('/login', login);

// category routes
app.post("/addCategory", upload.single("image"), addCategories)
app.get("/getCategories", getCategories)
app.post("/deleteCategory", deleteCategory)


//service routes
app.post("/addService", upload.single("image"), addServices)
app.get("/getServices", getServices)
app.post("/deleteService", deleteService)

//product routes
app.post("/addProduct", upload.single("image"), addProducts)
app.get("/getProducts", getProducts)
app.post("/deleteProduct", deleteProduct)
app.get("/getproductid/:id",getProductById)

//CartItiem routes
app.post("/carditem", addToCart);
app.delete("/carditem/delete/:id",deleteCartItem);
app.get("/carditem/get",getCartItems)

//booking routes
app.post("/addBooking", addBookings)
app.get("/getBookings", getBookings)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger_output));


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3001
mongoose.connect(process.env.MONGO_DB_URL).then(() => { app.listen(PORT, () => console.log(`Server Port: ${PORT}`)) })
    .catch((error) => console.log(`${error} did not connect`))
