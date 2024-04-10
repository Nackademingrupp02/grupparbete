const mongoose = require("mongoose");
require("dotenv").config();

const databaseURI = process.env.MONGOOSE_LOCAL_URI;

function connectToMongoose() {
  mongoose
    .connect(databaseURI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log("error", error);
    });
}

module.exports = connectToMongoose;
