const jwt = require("jsonwebtoken");
const User = require("../model/users");

const isAuthencated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(403)
        .send({ auth: false, message: "No token provided." });
    }

    const decoded = await jwt.verify(token,process.env.JWT_SECRET);

    if (!decoded) {
      console.log("token invalid");
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { isAuthencated };
