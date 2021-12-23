const express = require("express");
const mongoose = require("mongoose");
const mongoID = mongoose.mongo.ObjectID;
const Post = require("./models/post");
const ResponseMessage = require("./models/responseMessage");
const multer = require("multer");
const upload = multer();

require("dotenv").config({
  path: "config/.env",
});

const app = express();

const PORT = process.env.PORT ?? 4040;

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

  let post = [{}];

  if (mongoID.isValid(postId)) {
    post = await Post.find({ _id: postId });
    if (post.length < 1) {
      post = [{}];
    }
  } else {
    post = [{}];
  }

  res.json(new ResponseMessage(200, { post: post[0] }));
});

// Setup Listen Port

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
