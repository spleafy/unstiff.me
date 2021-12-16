const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  interview: {
    imgSource: String,
    title: String,
    subtitle: String,
    description: String,
    audioURL: String,
    headingImgSource: String,
    type: String,
  },
  recipe: {
    title: String,
    description: String,
    audioURL: String,
    headingImgSource: String,
    postColor: String,
    type: String,
  },
  movement: {
    title: String,
    description: String,
    audioURL: String,
    headingImgSource: String,
    postColor: String,
    type: String,
  },
  sutra: {
    title: String,
    description: String,
    audioURL: String,
    headingImgSource: String,
    postColor: String,
    type: String,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
