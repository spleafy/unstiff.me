const Post = require("../models/post");
const ResponseMessage = require("../models/responseMessage");

module.exports = async (req, res) => {
  const id = req.params.postId;

  const post = await Post.findOne({ _id: id });

  res.json(new ResponseMessage(200, { post }));
};
