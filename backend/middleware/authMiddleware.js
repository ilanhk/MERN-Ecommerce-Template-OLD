//This will be used to preotect private routes
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

 const protect = asyncHandler(async (req, res, next) =>{
     let token;

     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password'); // this will select the object we want without the password. we will have access to req.user in allow our protected routes
            // next();
        } catch (error){
            console.error(error);
            res.status(401); //401 is unauthorized
            throw new Error('Not authorized, token failed');
        }
     } else if(!token){
        res.status(401);
        throw new Error('Not authorized, no token');
    };
    
     next();
 });

 export { protect };