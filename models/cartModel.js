const mongoose = require("mongoose"); // Erase if already required

/**
 * 
 * products product count color 
 * paymentsIntent {}
 * orderStatus String
 */

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      count: Number,
      color: String,
      price: Number
    },
  ],
  cartTotal: Number,
  totalAfterDiscount: Number,
  paymentIntent: {},
  orderStatus: {
    type: String,
    default: "Not Processed",
    enum: [
      "Not Processed",
      "Cash on Delivery",
      "Processing",
      "Dispatched",
      "Canceled",
      "Delivered",
    ],
  },
  orderBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},{
    timestamps: true
});

//Export the model
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
