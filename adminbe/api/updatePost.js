const Post = require("../models/post");
const ResponseMessage = require("../models/responseMessage");

module.exports = async (req, res) => {
  const id = req.params.postId;

  const imagePrefix = "";

  // const postdb = await Post.findOne({ _id: id });

  console.log(req.files["interview-person-image"]);

  const postToUpdate = {
    name: req.body["post-name"],
    interview:
      req.body["interview-title"] &&
      req.body["interview-description"] &&
      req.body["interview-subtitle"]
        ? {
            title: req.body["interview-title"],
            subtitle: req.body["interview-subtitle"],
            description: req.body["interview-description"],
            audioURL: req.body["interview-audio-url"],
            imgSource:
              req.files && req.files["interview-person-image"]
                ? imagePrefix + req.files["interview-person-image"][0].filename
                : // : postdb.interview
                  // ? postdb.interview.imgSource
                  "",
            headingImgSource:
              req.files && req.files["interview-header-image"]
                ? imagePrefix + req.files["interview-header-image"][0].filename
                : // : postdb.interview
                  // ? postdb.interview.headingImgSource
                  "",
            type: "interview",
          }
        : null,
    recipe:
      req.body["recipe-title"] && req.body["recipe-description"]
        ? {
            title: req.body["recipe-title"],
            description: req.body["recipe-description"],
            audioURL: req.body["recipe-audio-url"],
            headingImgSource:
              req.files && req.files["recipe-header-image"]
                ? imagePrefix + req.files["recipe-header-image"][0].filename
                : // : postdb.recipe
                  // ? postdb.recipe.headingImgSource
                  "",
            type: "recipe",
          }
        : null,
    movement:
      req.body["movement-title"] && req.body["movement-description"]
        ? {
            title: req.body["movement-title"],
            description: req.body["movement-description"],
            audioURL: req.body["movement-audio-url"],
            headingImgSource:
              req.files && req.files["movement-header-image"]
                ? imagePrefix + req.files["movement-header-image"][0].filename
                : // : postdb.movement
                  // ? postdb.movement.headingImgSource
                  "",
            type: "movement",
          }
        : null,
    sutra:
      req.body["sutra-title"] && req.body["sutra-description"]
        ? {
            title: req.body["sutra-title"],
            description: req.body["sutra-description"],
            audioURL: req.body["sutra-audio-url"],
            headingImgSource:
              req.files && req.files["sutra-header-image"]
                ? imagePrefix + req.files["sutra-header-image"][0].filename
                : // : postdb.sutra
                  // ? postdb.sutra.headingImgSource
                  "",
            type: "sutra",
          }
        : null,
  };

  const post = await Post.findOneAndUpdate({ _id: id }, postToUpdate);
  res.redirect(
    `${process.env.API_URL}:${process.env.ADMIN_FE_PORT}/admin/edit/` + id
  );
};
