const Post = require("../models/post");
const ResponseMessage = require("../models/responseMessage");
const mongoID = require("mongoose").mongo.ObjectId;

module.exports = async (req, res) => {
  const id = req.params.postId;

  let post = [{}];

  if (mongoID.isValid(id)) {
    post = await Post.findOne({ _id: id });
    if (post.length < 1) {
      res.json(new ResponseMessage(404, { post: [{}] }));
      return;
    }
  } else {
    res.json(new ResponseMessage(404, { post: [{}] }));
    return;
  }

  res.json(new ResponseMessage(200, { post }));
};
