import connectToMongoose from "./config/mongoose";
import app from "./express";

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is Running on port ", port);
  connectToMongoose();
});
