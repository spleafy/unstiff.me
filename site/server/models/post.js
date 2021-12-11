const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  imgSource: String,
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  description: String,
  redirectURL: {
    type: String,
    required: true,
  },
  audioURL: {
    type: String,
    required: true,
  },
  headingImgSource: String,
  postColor: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
