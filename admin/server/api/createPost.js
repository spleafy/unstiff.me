const Post = require("../models/post");
const ResponseMessage = require("../models/responseMessage");

module.exports = async (req, res) => {
  console.log(req.body);
  // const post = await new Post(JSON.parse(req.body.object)).save();
  res.json(new ResponseMessage(200, { post: "da" }));
};
