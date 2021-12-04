const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
