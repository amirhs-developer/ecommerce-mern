const mongoose = require('mongoose'); // Erase if already required

/**
 * title String 
 * description String 
 * category String
 * numViews Number
 * isLike Boolean
 * isDisliked Boolean
 * likes[] User
 * dislikes[] User
 * author String default admin
 */

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    },
    category: {
        type: String,
        required: true,
    },
    numViews: {
        type: Number,
        default: 0
    },
    isLiked: {
        type: Boolean,
        default: false
    },
    isDislike: {
        type: Boolean,
        default: false
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    image: {
        type: String,
        default: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg",
    },
    author: {
        type: String,
        default: 'admin'
    }
},
{
    toJSON:{
        virtuals: true
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
});

//Export the model
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;