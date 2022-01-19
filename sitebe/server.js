const express = require("express");
const mongoose = require("mongoose");
const mongoID = mongoose.mongo.ObjectID;
const Post = require("./models/post");
const ResponseMessage = require("./models/responseMessage");
const multer = require("multer");
const upload = multer();

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4040;

const mongooseStringIP = process.env.MONGODB_HOST; //"164.90.194.91"; //"127.0.0.1"; //"localhost";
const mongooseStringPort = process.env.MONGODB_PORT;
const mongooseStringUsername = process.env.MONGODB_USERNAME;
const mongooseStringPassword = process.env.MONGODB_PASSWORD;
const mongooseStringDatabase = process.env.MONGODB_DATABASE;

const mongoDBConnectionString = `mongodb://${mongooseStringUsername}:${mongooseStringPassword}@${mongooseStringIP}:${mongooseStringPort}/${mongooseStringDatabase}`;
console.log("Connecting to MongoDB with: " + mongoDBConnectionString);
mongoose.connect(mongoDBConnectionString).catch((error) => {
  console.warn("Mongoose Connect Error", error);
});
// mongoose.connect("mongodb://localhost:27017/Unstiff");

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

app.get("/", async (req, res) => {
  res.json({ status: "OK" });
});

// Setup Listen Port

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
