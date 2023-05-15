const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler"); // for handling async error
const {cloudinaryUploadImage,cloudinaryDeleteImage} = require('../utils/cloudinary');
const slugify = require("slugify"); // for
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // jsonwebtoken for authentication
const { generateAccessToken } = require("../config/jwtToken"); // generate access token
const { generateRefreshToken } = require("../config/refreshToken"); // generate refresh token
const validateMongodbId = require("../utils/validateMongodbId"); // validation of mongodb id
const { json } = require("express");
const { findByIdAndUpdate } = require("../models/userModel");
const User = require("../models/userModel");
const fs = require('fs');
//? Create Product
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    let newProduct = new Product({
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      brand: req.body.brand,
      quantity: req.body.quantity,
      color: req.body.color,
    });
    newProduct = await newProduct.save();
    res.json({ newProduct });
  } catch (error) {
    throw new Error(error);
  }
});

//? update One Product
const updateOneProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const UpdateOneProduct = await Product.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        slug: req.body.slug,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand,
        color: req.body.color,
      },
      {
        new: true,
      }
    );
    res.json(UpdateOneProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get One Product
const getOneProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const findOneProduct = await Product.findById(id);
    res.json({ product: findOneProduct });
  } catch (error) {
    throw new Error(error);
  }
});

//? Get All Product
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    //* filtering
    const queryObject = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObject[el]);
    let queryStrJson = JSON.stringify(queryObject); //convert queryObj to json
    queryStrJson = queryStrJson.replace(
      /\b(gte|gt|lte|lt)\b/,
      (match) => `$${match}`
    );
    let query = Product.find(JSON.parse(queryStrJson)); //query = convert queryStrJson to object
    //* sorting
    if (req.query.sort) {
      const sortedBy = req.query.sort.split(",").join(" ");
      console.log(sortedBy);
      query = query.sort(sortedBy);
    } else {
      query = query.sort("-createdAt");
    }
    //* limiting of fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }
    //* pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    console.log(page, limit, skip);
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productsCount = await Product.countDocuments();
      if (skip > productsCount) throw new Error("Page Not Exist");
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

//? add product to wish List User
const addToWishList = asyncHandler(async (req, res) => {
  // const { _id } = req.user;
  const loginUserId = req?.user?._id;
  const { productId } = req.body;
  console.log(productId.toString());
  let user;
  try {
    user = await User.findById(loginUserId);
    const alreadyAddedProduct = user?.wishList?.find(
      (id) => id.toString() === productId.toString()
    );
    if (alreadyAddedProduct) {
      console.log("a");
      const user = await User.findByIdAndUpdate(
        loginUserId,
        {
          $pull: { wishList: productId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      const user = await User.findByIdAndUpdate(
        loginUserId,
        {
          $push: { wishList: productId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, productId, comment } = req.body;
  try {
    const product = await Product.findById(productId);
    let alreadyRated = product.ratings.find(
      (productId) => productId.postedBy.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
      // res.json(updateRating);
    } else {
      const ratedProduct = await Product.findByIdAndUpdate(
        productId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedBy: _id,
            },
          },
        },
        {
          new: true,
        }
      );
      // res.json(ratedProduct);
    }
    const getAllRatingsProduct = await Product.findById(productId);
    const numberOfRatings = getAllRatingsProduct.ratings.length;
    const sumOfRatings = getAllRatingsProduct.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let rate = Math.round(sumOfRatings / numberOfRatings);
    const finalProduct = await Product.findByIdAndUpdate(
      productId,
      {
        totalrating: rate,
      },
      {
        new: true,
      }
    );
    res.json(finalProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//? Upload Images 
const UploadImages = asyncHandler(async (req,res) => {
  const {id} = req.params; // id of product sending in request for update and upload images
  validateMongodbId(id); // validate product id
  console.log(req.files); // sending files in request.files
  try{
    const uploader =  async (path) => cloudinaryUploadImage(path,'images');
    const urls = [];
    const files = req.files;
    for(const file of files){
      const {path} = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const findProduct = await Product.findByIdAndUpdate(id,{
      images: urls.map((file) => {
        return file
      })
    },{
      new: true
    })
    res.json(findProduct);
  }catch(error){
    throw new Error(error);
  }
})
//? Delete One Product
const deleteOneProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deleteOneProduct = await Product.findByIdAndRemove(id);
    res.json({ deleted_product: deleteOneProduct });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getOneProduct,
  getAllProducts,
  updateOneProduct,
  deleteOneProduct,
  addToWishList,
  rating,
  UploadImages
};
