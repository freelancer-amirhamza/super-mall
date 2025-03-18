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

module.exports = app;