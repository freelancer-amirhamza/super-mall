const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
require('./config/database');
const userRouter = require("./routes/user-routes.js");

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



app.use("/api/user", userRouter)

module.exports = app;