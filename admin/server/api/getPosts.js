const Post = require("../models/post");
const ResponseMessage = require("../models/responseMessage");

module.exports = async (req, res) => {
  const posts = await Post.find({});

  res.json(new ResponseMessage(200, { posts }));
};
