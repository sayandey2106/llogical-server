const jwt = require("jsonwebtoken");
require('dotenv').config();
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    let currentUser = req.get("currentUser");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.SALT, (err, decoded) => {
        if (err) {
          return res.json({
            status: 400,
            message: "Invalid Token..."
          });
        } else {

          if (decoded.result.email === currentUser) {
            req.decoded = decoded.result;
            next();
          } else {
            return res.status(400).json({
              status: 400,
              message: "Token is not valid for this user.!! Please retry with a valid user."
            });
          }
         
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};