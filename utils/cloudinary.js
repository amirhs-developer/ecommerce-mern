const cloudinary = require("cloudinary");
require("dotenv").config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//? upload
const cloudinaryUploadImage = async (FileToUploads) => {
  // upload image
  return new Promise((resolve) => {
    cloudinary.uploader.upload(FileToUploads, (result) => {
      resolve(
        {
          url: result.secure_url,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

module.exports = {cloudinaryUploadImage};
