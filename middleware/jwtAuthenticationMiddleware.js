const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
require("dotenv").config();

//* accept user jwt for access to web server (routes)
const jwtAuthenticationMiddleware = asyncHandler(async (req,res,next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]; //payload
        try{
            if(token){
                const decodedToken = jwt.verify(token,process.env.SECRET_KEY)
                console.log(decodedToken);
                const user = await User.findById(decodedToken?.id); //get user document
                console.log(user);
                req.user = user; //send user to request
                next()
            }
        }catch(error){
            throw new Error('Not authorized token expired , Please try again ! ...');
        }
    }else {
        throw new Error('There is no token attached to header request');
    }
})

//* check the user role for accessibility
const isAdminMiddleware = asyncHandler(async (req, res, next) => {
    // console.log(req.user);
    const {email} = req.user;
    const user = await User.findOne({email});
    if(user.role !== 'admin'){
        throw new Error('You Are not Admin');
    } else {
        next();
    }
})

module.exports = {jwtAuthenticationMiddleware,isAdminMiddleware};



