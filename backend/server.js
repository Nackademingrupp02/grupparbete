const connectToMongoose = require("./config/mongoose.js");
const productRouter = require("./routes/productRoutes.js");
const categoryRouter = require("./routes/categoryRoutes.js");
const userRouter = require("./routes/userRoutes.js");
// const { addProductFromJSONData } = require("./controllers/productController.js");
const app = require("./express.js");

const port = process.env.PORT || 8000;

app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/adminpage", userRouter);

app.listen(port, () => {
  console.log("Server is Running on port ", port);
  connectToMongoose();
  // addProductFromJSONData();
});
