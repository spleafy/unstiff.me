const Admin = require("../models/admin");
const ResponseMessage = require("../models/responseMessage");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username });
  if (admin != null) {
    if (await bcrypt.compare(req.body.password, admin.password)) {
      const token = jwt.sign({ admin }, process.env.TOKEN_SECRET);
      res.json(new ResponseMessage(200, { login: true, token }));
    } else {
      res.json(new ResponseMessage(400, { login: false }));
    }
  } else {
    res.json(new ResponseMessage(400, { login: false }));
  }
};
