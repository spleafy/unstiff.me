const Post = require("../models/post");
const ResponseMessage = require("../models/responseMessage");

module.exports = async (req, res) => {
  const id = req.params.postId;

  const imagePrefix = "";

  const postdb = await Post.findOne({ _id: id });

  const postToUpdate = {
    name: req.body["post-name"],
    interview:
      req.body["interview-title-bg"] &&
      req.body["interview-description-bg"] &&
      req.body["interview-subtitle-bg"] &&
      req.body["interview-audio-url"]
        ? {
            "title-bg": req.body["interview-title-bg"],
            "title-en":
              req.body["interview-title-en"] &&
              req.body["interview-subtitle-en"] &&
              req.body["interview-description-en"]
                ? req.body["interview-title-en"]
                : "",
            "subtitle-bg": req.body["interview-subtitle-bg"],
            "subtitle-en":
              req.body["interview-title-en"] &&
              req.body["interview-subtitle-en"] &&
              req.body["interview-description-en"]
                ? req.body["interview-subtitle-en"]
                : "",
            "description-bg": req.body["interview-description-bg"],
            "description-en":
              req.body["interview-title-en"] &&
              req.body["interview-subtitle-en"] &&
              req.body["interview-description-en"]
                ? req.body["interview-description-en"]
                : "",
            audioURL: req.body["interview-audio-url"],
            imgSource:
              req.body["interview-remove-person-image"] == "on"
                ? ""
                : req.files && req.files["interview-person-image"]
                ? imagePrefix + req.files["interview-person-image"][0].filename
                : postdb.interview
                ? postdb.interview.imgSource
                : "",
            headingImgSource:
              req.body["interview-remove-header-image"] == "on"
                ? ""
                : req.files && req.files["interview-header-image"]
                ? imagePrefix + req.files["interview-header-image"][0].filename
                : postdb.interview
                ? postdb.interview.headingImgSource
                : "",
            type: "interview",
          }
        : null,
    recipe:
      req.body["recipe-title-bg"] &&
      req.body["recipe-description-bg"] &&
      req.body["recipe-audio-url"]
        ? {
            "title-bg": req.body["recipe-title-bg"],
            "title-en":
              req.body["recipe-title-en"] && req.body["recipe-description-en"]
                ? req.body["recipe-title-en"]
                : "",
            "description-bg": req.body["recipe-description-bg"],
            "description-en":
              req.body["recipe-title-en"] && req.body["recipe-description-en"]
                ? req.body["recipe-description-en"]
                : "",
            audioURL: req.body["recipe-audio-url"],
            headingImgSource: req.body["recipe-remove-header-image"]
              ? ""
              : req.files && req.files["recipe-header-image"]
              ? imagePrefix + req.files["recipe-header-image"][0].filename
              : postdb.recipe
              ? postdb.recipe.headingImgSource
              : "",
            type: "recipe",
          }
        : null,
    movement:
      req.body["movement-title-bg"] &&
      req.body["movement-description-bg"] &&
      req.body["movement-audio-url"]
        ? {
            "title-bg": req.body["movement-title-bg"],
            "title-en":
              req.body["movement-title-en"] &&
              req.body["movement-description-en"]
                ? req.body["movement-title-en"]
                : "",
            "description-bg": req.body["movement-description-bg"],
            "description-en":
              req.body["movement-title-en"] &&
              req.body["movement-description-en"]
                ? req.body["movement-description-en"]
                : "",
            audioURL: req.body["movement-audio-url"],
            headingImgSource:
              req.body["movement-remove-header-image"] == "on"
                ? ""
                : req.files && req.files["movement-header-image"]
                ? imagePrefix + req.files["movement-header-image"][0].filename
                : postdb.movement
                ? postdb.movement.headingImgSource
                : "",
            type: "movement",
          }
        : null,
    sutra:
      req.body["sutra-title-bg"] &&
      req.body["sutra-description-bg"] &&
      req.body["sutra-audio-url"]
        ? {
            "title-bg": req.body["sutra-title-bg"],
            "title-en":
              req.body["sutra-title-en"] && req.body["sutra-description-en"]
                ? req.body["sutra-title-en"]
                : "",
            "description-bg": req.body["sutra-description-bg"],
            "description-en":
              req.body["sutra-title-en"] && req.body["sutra-description-en"]
                ? req.body["sutra-description-en"]
                : "",
            audioURL: req.body["sutra-audio-url"],
            headingImgSource:
              req.body["sutra-remove-header-image"] == "on"
                ? ""
                : req.files && req.files["sutra-header-image"]
                ? imagePrefix + req.files["sutra-header-image"][0].filename
                : postdb.sutra
                ? postdb.sutra.headingImgSource
                : "",
            type: "sutra",
          }
        : null,
  };

  const post = await Post.findOneAndUpdate({ _id: id }, postToUpdate);
  res.redirect(
    `${process.env.API_URL}:${process.env.ADMIN_FE_PORT}/admin/edit/` + id
  );
};
