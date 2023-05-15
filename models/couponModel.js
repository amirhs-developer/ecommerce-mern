const mongoose = require('mongoose'); // Erase if already required

/**
 * name String
 * expiry Date
 * discount Number
 */

// Declare the Schema of the Mongo model
var couponSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        uppercase: true
    },
    expiry:{
        type:Date,
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    }
},
{
    timestamps: true
});

//Export the model
const Coupon = mongoose.model('Coupon', couponSchema);
module.exports = Coupon;