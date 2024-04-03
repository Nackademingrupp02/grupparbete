const Product = require("./ProductSchema");
require("dotenv").config();

const mongoose = require("mongoose");
//get the link to connect to mongodb atlas
const uri = process.env.MONGOOSE_LIVE_URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);

    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    //  adding a product (document) in collection named
    // const pro = new Products({ name: "fsss", price: 55, category: "404" })
    // console.log("\n ADDED product: ", pro);

    //To save the docs
    // await pro.save()
    //see all products
    const seepro = await Products.find();
    console.log(seepro);
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
