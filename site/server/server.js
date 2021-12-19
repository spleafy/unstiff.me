const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");
const ResponseMessage = require("./models/responseMessage");
const multer = require("multer");
const upload = multer();

require("dotenv").config({
  path: "config/.env",
});

const app = express();

const PORT = process.env.PORT ?? 4000;

mongoose.connect("mongodb://localhost:27017/Unstiff");

const db = mongoose.connection;

// Get All Posts

app.get("/posts", async (req, res) => {
  const posts = await Post.find({});

  res.json(new ResponseMessage(200, { posts: posts }));
});
// Get A Single Post

app.get("/post/:postId", async (req, res) => {
  const postId = req.params.postId;

  const post = await Post.find({ _id: postId });

  res.json(new ResponseMessage(200, { post }));
});

// Setup Listen Port

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
