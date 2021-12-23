const ResponseMessage = require("../models/responseMessage");

module.exports = (req, res) => {
  res.json(new ResponseMessage(200, { id: req.admin.admin._id }));
};
