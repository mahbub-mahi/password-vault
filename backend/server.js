const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/index");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//routes
app.use("/", router);

//connection
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
