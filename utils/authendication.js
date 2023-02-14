// const { expressjwt } = require('express-jwt');
const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
  const { cookies } = req;
  console.log(cookies);
  console.log("req:", req);

  if (cookies.accessToken) {
    const data = await jwt.verify(cookies.accessToken, process.env.SECRET_KEY);
    console.log(data._id);
    req.id = data._id;
  }

  if (!req.id) {
    return res.status(401).send({ message: "Not Authorised.." });
  }

  next();
};

