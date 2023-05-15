const mongoose = require("mongoose");


const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ecommerce-app'
  });
};

module.exports = connectDB;

//   .then(() => console.log(`Successfully Connected to the database ...`))
//   .catch((err) => console.log(err));
