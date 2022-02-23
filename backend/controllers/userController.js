import asyncHandler from "express-async-handler"; // express-async-handler so that you dont have to do try catch to catch error of every route promise. docs: https://www.npmjs.com/package/express-async-handler/v/1.1.4
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Authenticate the user & get a token
// @route   POST /api/users/login
// @access   Public
const authUser = asyncHandler(async(req, res)=>{
   const { email, password } = req.body; // this is from the client side

   const user = await User.findOne({ email }); //find user with this email

   if (user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
   } else {
    res.status(401); //401 is unauthorized
    throw new Error('Invaild email or password')
   };
});


// @desc    Register a new user
// @route   POST /api/users
// @access   Public
const registerUser = asyncHandler(async(req, res)=>{
    const { name, email, password } = req.body; 
 
    const userExist = await User.findOne({ email }); 
 
    if(userExist){
        res.status(400); // 400 is a bad request
        throw new Error('User already exists');
    };

    const user = await User.create({
        name,
        email,
        password
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        }); //201 means something was created
    } else{
        res.status(400);
        throw new Error('Invalid user data input');
    };


 });
 



// @desc    Get user profile
// @route   GET /api/users/profile
// @access   Private
const getUserProfile = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user._id);

   if (user) {
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    });
   } else{
       res.status(404);
       throw new Error('User not found');
   }
 });

export {
    authUser,
    registerUser,
    getUserProfile
};