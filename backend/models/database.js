const Products = require("./ProductSchema");
require("dotenv").config();

const mongoose = require("mongoose");
//get the link to connect to mongodb atlas
const uri = process.env.MONGOOSE_LIVE_URI;



async function run() {
  try {
    await mongoose.connect(uri);

    await mongoose.connection.db;
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const view_products = await Products.find();
    console.log(view_products);
  } finally {
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
