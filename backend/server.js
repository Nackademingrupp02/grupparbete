const connectToMongoose = require("./config/mongoose.js");
const app = require("./express.js");

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is Running on port ", port);
  connectToMongoose();
});
