const jwt = require("jsonwebtoken");
const ResponseMessage = require("../models/responseMessage");

module.exports = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;

    await jwt.verify(token, process.env.TOKEN_SECRET, (err, authData) => {
      if (err) {
        res.json(new ResponseMessage(403, { id: "" }));
      } else {
        req.admin = authData;
        next();
      }
    });
  } else {
    res.json(new ResponseMessage(403, { id: "" }));
  }
};
