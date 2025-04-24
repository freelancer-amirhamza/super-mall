const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
require('./config/database');
const userRouter = require("./routes/user-routes.js");
const categoryRouter = require("./routes/category-routes.js")
const uploadImageRouter = require("./routes/uploadImage-routes.js")
const subCategoryRouter = require("./routes/sub-category-routes.js");
const productRouter = require("./routes/product-routes.js");
const cartRouter = require("./routes/cart-routes.js");
const addressRouter = require("./routes/address-routes.js");
const orderRouter = require("./routes/order-routes.js");

const allowedOrigins = [
    "https://deshimotors.vercel.app",
    "https://deshimotorsclient.vercel.app"
];

app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan());
app.use(helmet({
    contentSecurityPolicy: false
}));



app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/file", uploadImageRouter);
app.use("/api/sub-category", subCategoryRouter);
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order",orderRouter);

module.exports = app;