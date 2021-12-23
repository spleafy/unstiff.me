const Post = require("../models/post");
const ResponseMessage = require("../models/responseMessage");

module.exports = async (req, res) => {
  const imagePrefix = "";

  const postToSave = {
    name: req.body["post-name"],
    interview:
      req.body["interview-title"] &&
      req.body["interview-description"] &&
      req.body["interview-subtitle"] &&
      req.body["interview-audio-url"]
        ? {
            title: req.body["interview-title"],
            subtitle: req.body["interview-subtitle"],
            description: req.body["interview-description"],
            audioURL: req.body["interview-audio-url"],
            imgSource:
              req.files && req.files["interview-person-image"]
                ? imagePrefix + req.files["interview-person-image"][0].filename
                : "",
            headingImgSource:
              req.files && req.files["interview-header-image"]
                ? imagePrefix + req.files["interview-header-image"][0].filename
                : "",
            type: "interview",
          }
        : null,
    recipe:
      req.body["recipe-title"] &&
      req.body["recipe-description"] &&
      req.body["recipe-audio-url"]
        ? {
            title: req.body["recipe-title"],
            description: req.body["recipe-description"],
            audioURL: req.body["recipe-audio-url"],
            headingImgSource:
              req.files && req.files["recipe-header-image"]
                ? imagePrefix + req.files["recipe-header-image"][0].filename
                : "",
            type: "recipe",
          }
        : null,
    movement:
      req.body["movement-title"] &&
      req.body["movement-description"] &&
      req.body["movement-audio-url"]
        ? {
            title: req.body["movement-title"],
            description: req.body["movement-description"],
            audioURL: req.body["movement-audio-url"],
            headingImgSource:
              req.files && req.files["movement-header-image"]
                ? imagePrefix + req.files["movement-header-image"][0].filename
                : "",
            type: "movement",
          }
        : null,
    sutra:
      req.body["sutra-title"] &&
      req.body["sutra-description"] &&
      req.body["sutra-audio-url"]
        ? {
            title: req.body["sutra-title"],
            description: req.body["sutra-description"],
            audioURL: req.body["sutra-audio-url"],
            headingImgSource:
              req.files && req.files["sutra-header-image"]
                ? imagePrefix + req.files["sutra-header-image"][0].filename
                : "",
            type: "sutra",
          }
        : null,
  };

  const post =
    req.body["post-name"] != "" ? await new Post(postToSave).save() : "";
  res.redirect(
    `${process.env.API_URL}:${process.env.ADMIN_FE_PORT}/admin/create`
  );
};
