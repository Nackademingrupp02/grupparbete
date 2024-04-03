const connectToMongoose = require("./config/mongoose.js");
const productRouter = require("./routes/productRoutes.js")
// const { addProductFromJSONData } = require("./controllers/productController.js");
const app = require("./express.js");

const port = process.env.PORT || 8000;


app.use('/products', productRouter);

app.listen(port, () => {
  console.log("Server is Running on port ", port);
  connectToMongoose();
  // addProductFromJSONData();
});
