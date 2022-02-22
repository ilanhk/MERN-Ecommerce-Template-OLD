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

// @desc    Get user profile
// @route   GET /api/users/profile
// @access   Private
const getUserProfile = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user._id);


   if(user) {
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
    getUserProfile
};