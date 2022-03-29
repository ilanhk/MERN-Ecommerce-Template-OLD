import asyncHandler from "express-async-handler"; // express-async-handler so that you dont have to do try catch to catch error of every route promise. docs: https://www.npmjs.com/package/express-async-handler/v/1.1.4
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access   Public
const getProducts = asyncHandler(async(req, res)=>{
    const products = await Product.find({}); //async bc of mongoose, also passing in an empty object in .find() gives us everthing
 
    res.json(products); // will convert products to json
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access   Public
const getProductById = asyncHandler(async(req, res)=>{
    const product = await Product.findById(req.params.id); //req.params.id this is from the url
    if (product){
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product Not Found'); //this error will go through our customer error handler
    }
});

export{
    getProducts,
    getProductById
};