import mongoose from "mongoose";

const databaseURI = process.env.MONGOOSE_LIVE_URI

function connectToMongoose()  {
    mongoose.connect(databaseURI)
    .then(() =>  {
        console.log("Connected to DB", databaseURI)
    })  
    .catch ((error) => {
        console.log("error", error)
    })
};

export default connectToMongoose