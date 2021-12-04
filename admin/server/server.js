const express = require("express");

require("dotenv").config({
  path: "config/.env",
});

const PORT = process.env.ADMIN_PORT ?? 9090;

const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/Unstiff");

require("./config/passport");

app.listen(PORT, () => {
  console.log(`Admin system listening on port ${PORT}`);
});
