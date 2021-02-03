require('dotenv').config();

const mongoose = require('mongoose');

const express = require("express");

const app = express();

//middlewares those are used in my app
const bodyParser =require("body-parser");
const cookieParser=require("cookie-parser");
const cors= require("cors");


//MY ROUTES
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");



// database connection usning mongoose
mongoose.connect(process.env.DATABASE , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
}).then(()=> {
    console.log("DB CONNECTED");
});


//this is my middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My ROUTES
app.use("/api" , authRoutes);
app.use("/api" , userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);
app.use("/api",paymentBRoutes);




//hiding port number by using environment variable
const port =process.env.PORT || 8000;


//starting a server
app.listen(port , () => {
    console.log(`App is Running at ${port}`);
});