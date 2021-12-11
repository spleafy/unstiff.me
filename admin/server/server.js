const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");

const upload = multer();

require("dotenv").config({
  path: "config/.env",
});

const PORT = process.env.ADMIN_PORT ?? 9090;

const app = express();

app.use(cors());

mongoose.connect("mongodb://localhost:27017/Unstiff");

require("./config/passport");

const passportLogin = require("./api/passportLogin");

app.post("/login", upload.none(), passportLogin);

app.listen(PORT, () => {
  console.log(`Admin system listening on port ${PORT}`);
});
