const User = require("../models/userModel");
const asyncHandler = require("express-async-handler"); // for handling async error 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // jsonwebtoken for authentication
require("dotenv").config(); // configuration variables
const { generateAccessToken } = require("../config/jwtToken"); // generate access token
const {generateRefreshToken} = require('../config/refreshToken') // generate refresh token
const validateMongodbId = require('../utils/validateMongodbId'); // validation of mongodb id
const crypto = require("crypto");
const sendEmailToUser = require("./emailController");

//? SignUp User
const createUser = asyncHandler(async (req, res) => {
  //* create User-Model
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    //* Create User
    let newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      mobile: req.body.mobile,
      password: bcrypt.hashSync(req.body.password, 10),
    });
    newUser = await newUser.save();
    return res.json(newUser);
  } else {
    //* User Already Exist in Database
    throw new Error("User already exists");
    //   return res.json({
    //     message: "User already exists",
    //     success: false,
    //   });
  }
});

//? login User
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email: email }); // user exists in database or not 
  if(findUser.isBlocked == true) {
    return;
  }
  //* User Exist or not
  if (findUser && (await bcrypt.compareSync(password, findUser.password))) {
    const refreshToken = await generateRefreshToken(findUser._id);
    console.log(refreshToken);
    const userUpdate = await User.findByIdAndUpdate(findUser._id, {
        refreshToken: refreshToken
    },{
        new: true
    })
    res.cookie('refreshToken',refreshToken,{
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000 //3d expire
    })
    res.status(200).json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateAccessToken(findUser?._id),
    });
  } else {
    throw new Error(
      "your email or password is incorrect && invalid credential"
    );
  }
});

//? login Admin 
const loginAdmin = asyncHandler(async (req,res) => {
  const {email,password} = req.body;
  const findAdmin = await User.findOne({email: email});
  // user with admin role exist or not
  if(findAdmin && (await bcrypt.compareSync(password, findAdmin.password))){
    if(findAdmin.role !== 'admin'){
      throw new Error('Your are not admin');
    }
    //generate refresh token 
    const refreshToken = await generateRefreshToken(findAdmin._id);
    // save refresh token on database
    const updateAdmin = await User.findByIdAndUpdate(findAdmin._id,{
      refreshToken: refreshToken
    },{
      new: true
    })
    // save refresh token on cookies user of role admin
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000 //3d expire
    })
    res.status(200).json({
      _id: findAdmin?._id,
      firstname: findAdmin?.firstname,
      lastname: findAdmin?.lastname,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateAccessToken(findAdmin?._id),
    })
  } else {
    throw new Error(
      "your email or password is incorrect && invalid credential"
    );
  }
})

//? update Password or reset password
const updatePassword = asyncHandler(async (req,res) => {
    const {_id} = req.user; //current user requested
    const {password} = req.body; // reset password from user
    validateMongodbId(_id); // validate the id of user
    const user = await User.findById(_id);
    if(user && password){
        user.password = bcrypt.hashSync(password,10);
        // user.createPasswordResetToken(); // create a new password reset token
        const updatedPassword = await user.save();
        res.json(updatedPassword)
    }else{
        res.json(user);
    }
})

//? forgot password for reset password user
const forgotPasswordToken = asyncHandler(async (req,res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) throw new Error('User not found with this email');
    try{
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Hi please follow this link to reset your password, this link is valid till 30 minute 
        <a href='http://localhost:4000/reset-password/${token}'>Click Here</a>
        `
        const data = {
            to: email,
            text: 'Hey User',
            subject: 'Forgot Password Link',
            htm: resetURL,
        }
        sendEmailToUser(data);
        res.json(token);

    }catch(error){
        throw new Error(error);
    }
})

//? reset token handler for forgot password token
const resetPassword = asyncHandler(async (req,res) => {
    const {password} = req.body;
    const {token} = req.params;
    const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
    console.log(hashedToken);
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: {$lte: Date.now()},
    });
    if(!user) throw new Error('invalid reset token');
    user.password = bcrypt.hashSync(password,10);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
})

//? refreshToken handler for refreshToken user and generate AccessToken
const refreshTokenHandler = asyncHandler(async (req,res) => {
    const cookie = req.cookies;
    // console.log(cookie);
    if(!cookie?.refreshToken) throw new Error('Not refresh token available in cookies'); 
    const refreshToken = cookie.refreshToken;
    // console.log(refreshToken);
    const user = await User.findOne({refreshToken: refreshToken });
    if(!user) throw new Error('No Refresh token present in database or not matched or expired');
    jwt.verify(refreshToken,process.env.SECRET_KEY,(err,decoded) => {
        // console.log(decoded);
        if(err || user.id !== decoded.id){
            throw new Error('there is something wrong with refresh token');
        }
        const accessToken = generateAccessToken(user._id);
        res.json({accessToken: accessToken})
    });
})

//? logout functionality
const logout = asyncHandler(async (req,res) => {
    const cookie = req.cookies;
    if(!cookie?.refreshToken) throw new Error('Not refresh token available in cookies');
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken: refreshToken});
    if(!user){
        res.clearCookie('refreshToken',{
            httpOnly: true,
            secure: true,
        })
        return res.sendStatus(204); //forbidden
    }

    await User.findOneAndUpdate(refreshToken,{
        refreshToken: ""
    }) 
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true
    })
    res.sendStatus(204); // forbidden not content

})

//? Update a One User
const updateOneUser = asyncHandler(async (req, res, next) => {
  // const {id} = req.params;
  const { _id } = req.user;
  try {
    const updateOneUser = await User.findOneAndUpdate(
      _id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json({ user_updated: updateOneUser });
  } catch (error) {
    throw new Error(error);
  }
});

//? const save Address User 
const saveAddressUser = asyncHandler(async (req, res, next) => {
  const {_id} = req.user;
  validateMongodbId(_id);
  try{
    const updateUserAddress = await User.findByIdAndUpdate(_id,{
      address: req?.body?.address
    },
    {
      new: true,
    })
    res.json(updateUserAddress);
  }catch(error){
    throw new Error(error);
  }
})

//? Block a One User
const blockOneUser = asyncHandler(async (req, res, next) => {
    const {_id} = req.user;
    const currentUserIdRequest = _id.valueOf();
    const {id} = req.params;
    validateMongodbId(id); //module 
    try{
        console.log(currentUserIdRequest);
        console.log(id);
        if(currentUserIdRequest === id){
            res.json({
                message: 'You can not block your self'
            });
            return;
        }
        const blockUser = await User.findByIdAndUpdate(id,{
            isBlocked : true
        },{
            new: true
        })
        res.json({
            message: "user blocked"
        })
    }catch(error){
        throw new Error(error);
    }
});

//? Unblock a One User
const unblockOneUser = asyncHandler(async (req, res, next) => {
    const {id} = req.params;
    validateMongodbId(id); // module 
    try{
        const unblockUser = await User.findByIdAndUpdate(id,{
            isBlocked : false
        },{
            new: true
        })
        res.json({
            message: "user unblocked"
        })
    }catch(error){
        throw new Error(error);
    }
});

//? Get Users List
const getAllUsers = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get a One User
const getOneUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongodbId(id); //module 
  try {
    const findOneUser = await User.findById(id);
    res.json({
      user: findOneUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//? get Wishlist of user
const getWishListUser = asyncHandler(async (req, res, next) => {
  const {_id} = req.user;
  validateMongodbId(_id); //module 
  try{
    const user = await User.findById(_id).populate('wishList');
    res.json(user);
  }catch(error){
    throw new Error(error);
  }
})

//? Delete a One User
const deleteOneUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongodbId(id); //module
  try {
    const deleteOneUser = await User.findByIdAndDelete(id);
    res.json({
      user_deleted: deleteOneUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  blockOneUser,
  unblockOneUser,
  refreshTokenHandler,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishListUser,
  saveAddressUser
};
