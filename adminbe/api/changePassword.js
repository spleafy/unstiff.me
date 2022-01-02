const bcrypt = require("bcryptjs");
// const bcrypt = require("bcrypt");
const Admin = require("../models/admin");
const ResponseMessage = require("../models/responseMessage");

module.exports = async (req, res) => {
  const admin = await Admin.findOne({});

  if (await bcrypt.compare(req.body.oldpassword, admin.password)) {
    await Admin.findOneAndUpdate(
      { _id: admin._id },
      { password: await bcrypt.hash(req.body.newpassword, 10) }
    );
    res.json(new ResponseMessage(200));
  } else {
    res.json(new ResponseMessage(401));
  }
};
