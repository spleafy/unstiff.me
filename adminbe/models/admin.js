const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
