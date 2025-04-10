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
<<<<<<< HEAD
const productRouter = require("./routes/product-routes.js");
=======
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))
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
<<<<<<< HEAD
app.use("/api/product", productRouter)
=======
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70

module.exports = app;