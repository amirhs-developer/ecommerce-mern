const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");


const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
  ];

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images")); // storage of uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    console.log(uniqueSuffix)
    cb(null, file.fieldname + "-" + uniqueSuffix + '.jpeg');
  },
});

const multerFilter = (req, file, cb) => {
  if (whitelist.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported File format",
      },
      false
    );
  }
};

const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 2000000 },
});

//* Upload Image for Product
const productImageResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/products/${file.filename}`);
        fs.unlinkSync(`public/images/products/${file.filename}`);
    })
  );
  next();
};

//* upload Image for Blog
const blogImageResize = async (req, res, next) => {
    if (!req.files) return next();
    await Promise.all(
      req.files.map(async (file) => {
        await sharp(file.path)
          .resize(300, 300)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(`public/images/blogs/${file.fieldname}`);
          fs.unlinkSync(`public/images/blogs/${file.filename}`);
      })
    );
    next();
  };


module.exports = {uploadPhoto,productImageResize,blogImageResize};
