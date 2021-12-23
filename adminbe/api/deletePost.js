const ResponseMessage = require("../models/responseMessage");
const Post = require("../models/post");

module.exports = async (req, res) => {
  const id = req.params.postId;
  const deletedPost = await Post.findByIdAndDelete(id);
  const posts = await Post.find({});
  res.json(new ResponseMessage(200, { posts }));
};
