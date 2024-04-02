import Products from "./ProductSchema.js"


import mongoose from "mongoose";
//get the link to connect to mongodb atlas
const uri = "mongodb+srv://nackademing02:4ELTwXD8jQRlJGdG@g2.3ozytrh.mongodb.net/?retryWrites=true&w=majority&appName=G2";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
    try {


        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);

        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        //  adding a product (document) in collection named  
        const pro = new Products({ name: "fsss", price: 55, category: "404" })
        console.log("\n ADDED product: ", pro);


        await pro.save()


    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
run().catch(console.dir);
