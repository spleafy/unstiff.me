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
  res.json(posts);
});

// Get All Interviews

app.post("/interviews", upload.none(), async (req, res) => {
  const post = await new Post(req.body).save();

  res.json(new ResponseMessage(200, { post }));
});

app.get("/interviews", async (req, res) => {
  const posts = await Post.find({ type: "interview" });
  res.json(new ResponseMessage(200, { posts }));
});

// Get One Interview

app.get("/interviews/:interviewId", async (req, res) => {
  const interviewId = req.params.interviewId;

  const post = await Post.findOne({ type: "interview", _id: interviewId });
  const other = await Post.find({ author: post.author });
  res.json(new ResponseMessage(200, { post, other }));
});

// Get All Recipes

app.get("/recipes", async (req, res) => {
  const posts = await Post.find({ type: "recipe" });
  res.json(new ResponseMessage(200, { posts }));
});

// Get One Recipe

app.get("/recipes/:recipeId", async (req, res) => {
  const recipeId = req.params.recipeId;

  const post = await Post.findOne({ type: "recipe", _id: recipeId });
  console.log(post);

  const other = await Post.find({ author: post.author });
  res.json(new ResponseMessage(200, { post, other }));
});

// Get All Movements

app.get("/movements", async (req, res) => {
  const posts = await Post.find({ type: "movement" });
  res.json(new ResponseMessage(200, { posts }));
});

// Get One Movement

app.get("/movements/:movementId", async (req, res) => {
  const movementId = req.params.movementId;

  const post = await Post.findOne({ type: "movement", _id: movementId });

  const other = await Post.find({ author: post.author });
  res.json(new ResponseMessage(200, { post, other }));
});

// Setup Listen Port

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
