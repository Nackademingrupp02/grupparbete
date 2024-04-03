const Product = require("./ProductSchema");

const mongoose = require("mongoose");
//get the link to connect to mongodb atlas
const uri =
  "mongodb+srv://nackademing02:4ELTwXD8jQRlJGdG@g2.3ozytrh.mongodb.net/?retryWrites=true&w=majority&appName=G2";



async function run() {
  try {
    await mongoose.connect(uri);

    await mongoose.connection.db;
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const pro = new Product({ name: "fsss", price: 55.222, category: "404" })
    console.log("\n ADDED product: ", pro);

    await pro.save()
    const seepro = await Product.find();
    console.log(seepro);
  } finally {
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
