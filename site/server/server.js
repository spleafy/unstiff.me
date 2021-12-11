const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");

require("dotenv").config({
  path: "config/.env",
});

const app = express();

const PORT = process.env.PORT ?? 4000;

mongoose.connect("mongodb://localhost:27017/Unstiff");

const db = mongoose.connection;

app.get("/posts", async (req, res) => {
  const posts = await Post.find({});
  console.log(posts);
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
