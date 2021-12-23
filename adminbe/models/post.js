const mongoose = require("mongoose");

// const postSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   recipe: {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     audioURL: {
//       type: String,
//       required: true,
//     },
//     headingImgSource: String,
//     postColor: String,
//     type: {
//       type: String,
//       required: true,
//     },
//   },
//   movement: {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     audioURL: {
//       type: String,
//       required: true,
//     },
//     headingImgSource: String,
//     postColor: String,
//     type: {
//       type: String,
//       required: true,
//     },
//   },
//   sutra: {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     audioURL: {
//       type: String,
//       required: true,
//     },
//     headingImgSource: String,
//     postColor: String,
//     type: {
//       type: String,
//       required: true,
//     },
//   },
//   interview: {
//     imgSource: {
//       type: String,
//       required: true,
//     },
//     title: {
//       type: String,
//       required: true,
//     },
//     subtitle: {
//       type: String,
//       requiredL: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     audioURL: {
//       type: String,
//       required: true,
//     },
//     headingImgSource: String,
//     type: {
//       type: String,
//       required: true,
//     },
//   },
// });

const postSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  recipe: mongoose.SchemaTypes.Mixed,
  movement: mongoose.SchemaTypes.Mixed,
  sutra: mongoose.SchemaTypes.Mixed,
  interview: mongoose.SchemaTypes.Mixed,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
