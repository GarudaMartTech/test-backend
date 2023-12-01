const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = 4000;

mongoose
  .connect("mongodb+srv://ankushku72:Ankush1234@cluster0.m55eusy.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log(`db connected successfull ${res.connection.host}`);
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("backend deployment successfull");
});

app.listen(PORT, () => {
  console.log(`server is running at PORT : ${PORT}`);
});
