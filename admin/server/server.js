const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const upload = multer();

require("dotenv").config({
  path: "config/.env",
});

const PORT = process.env.ADMIN_PORT ?? 9090;

const app = express();

app.use(cors());

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

mongoose.connect("mongodb://localhost:27017/Unstiff");

const userLogin = require("./api/userLogin");

app.post("/login", upload.none(), userLogin);

app.listen(PORT, () => {
  console.log(`Admin system listening on port ${PORT}`);
});
