const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');
const PORT = process.env.PORT || 4000;
const connectDB = require('./db/connect');

//* routes 
const authRouter = require('./routes/authRouter');
const productRouter = require('./routes/productRouter');
const blogRouter = require('./routes/blogRouter');
const categoryRouter = require('./routes/categoryRouter');
const blogCategoryRouter = require('./routes/blogCategoryRouter');
const brandRouter = require('./routes/brandRouter');
const couponRouter = require('./routes/couponRouter');
const colorRouter = require('./routes/colorRouter');
const enqRouter = require('./routes/enqRouter');

//* middleware components
const {notFound} = require('./middleware/errorHandler');
const {errorHandler} = require('./middleware/errorHandler');

//* middleware : 
//* cors for request client and server // allow http request all origin
app.use(cors());
app.options("*", cors());
//* load the cookie-parsing middleware
app.use(cookieParser());
app.use(morgan('dev'))
app.use(express.json());
app.use(bodyParser.json());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log('Database connected successfully');
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

app.get('/', (req, res) => {
  res.status(200).send('ok');
})

//* routes
app.use('/api/user', authRouter);
app.use('/api/product',productRouter);
app.use('/api/blog',blogRouter);
app.use('/api/category',categoryRouter);
app.use('/api/blogcategory',blogCategoryRouter);
app.use('/api/brand',brandRouter);
app.use('/api/coupon',couponRouter);
app.use('/api/color/',colorRouter);
app.use('/api/enquiry',enqRouter);

//* middleware
app.use(notFound);
app.use(errorHandler);



    
 
