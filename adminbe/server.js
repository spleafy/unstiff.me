const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + "-post-image-" + file.originalname;
    console.log("writing to: " + filename);
    cb(null, filename);
  },
});

const upload = multer({ storage });

require("dotenv").config();

const PORT = process.env.ADMIN_PORT || 9090;

const app = express();

const corsSettings = {
  // origin: "localhost",
};

app.use(cors(corsSettings));

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/images", express.static("images"));

const mongooseStringIP = process.env.MONGODB_HOST; //"164.90.194.91"; //"127.0.0.1"; //"localhost";
const mongooseStringPort = process.env.MONGODB_PORT;
const mongooseStringUsername = process.env.MONGODB_USERNAME;
const mongooseStringPassword = process.env.MONGODB_PASSWORD;
const mongooseStringDatabase = process.env.MONGODB_DATABASE;

const mongoDBConnectionString = `mongodb://${mongooseStringUsername}:${mongooseStringPassword}@${mongooseStringIP}:${mongooseStringPort}/${mongooseStringDatabase}`;
console.log("Connecting to MongoDB with: " + mongoDBConnectionString);
// mongoose.connect(mongoDBConnectionString);
mongoose.connect("mongodb://root:rootpassword@161.35.146.31:27017/Unstiff");
// mongoose.connect("mongodb://localhost:27017/Unstiff");

const userLogin = require("./api/userLogin");

const createPost = require("./api/createPost");

const getPosts = require("./api/getPosts");

const deletePost = require("./api/deletePost");

const getPost = require("./api/getPost");

const updatePost = require("./api/updatePost");

const checkUserState = require("./api/chekUserState");

const verifyToken = require("./middleware/verifyToken");

const changePassword = require("./api/changePassword");

const changeUsername = require("./api/changeUsername");

app.post("/login", upload.none(), userLogin);

app.post(
  "/post",
  upload.fields([
    { name: "interview-header-image", maxCount: 1 },
    { name: "interview-person-image", maxCount: 1 },
    { name: "recipe-header-image", maxCount: 1 },
    { name: "movement-header-image", maxCount: 1 },
    { name: "sutra-header-image", maxCount: 1 },
  ]),
  createPost
);

app.get("/posts", getPosts);

app.get("/post/:postId", getPost);

app.post(
  "/post/:postId",
  upload.fields([
    { name: "interview-header-image", maxCount: 1 },
    { name: "interview-person-image", maxCount: 1 },
    { name: "recipe-header-image", maxCount: 1 },
    { name: "movement-header-image", maxCount: 1 },
    { name: "sutra-header-image", maxCount: 1 },
  ]),
  updatePost
);

// app.post("/create/admin", upload.none(), (req, res) => {
//   new Admin(req.body).save();
// });

app.delete("/post/:postId", deletePost);

app.get("/user", verifyToken, checkUserState);

app.put("/user/password", verifyToken, upload.none(), changePassword);

app.put("/user/username", verifyToken, upload.none(), changeUsername);

app.listen(PORT, () => {
  console.log(`Admin system listening on port ${PORT}`);
});
