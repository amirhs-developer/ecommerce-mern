const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt"); // bcrypt module is available
const crypto = require("crypto"); //
const rounds = 10;
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String
    },
    wishList: [{type: mongoose.Schema.Types.ObjectId,ref: "Product"}],
    refreshToken: {
      type: String,
    },
    passwordChangeAt:{
        type: Date
    },
    passwordResetToken: {
        type: String
    },
    passwordResetExpires: {
        type: Date
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // const hash = await bcrypt.hash(this.password,rounds);
  // this.password = hash;
  if (!this.isModified("password")) {
    next();
  }
  next()
});

// userSchema.methods = async function checkingPassword(enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
// }

// userSchema.method('checkingPassword', async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
// })

userSchema.methods.createPasswordResetToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  console.log(resetToken);
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = new Date() + 30 * 60 * 1000; //30 minute
  return resetToken;
};

//Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
