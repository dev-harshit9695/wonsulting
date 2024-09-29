const jwt = require("jsonwebtoken");

const generateToken = (payload) =>
  jwt.sign(payload, "SECRET", { expiresIn: "1h" });
const verifyToken = (token) => jwt.verify(token, "SECRET");

module.exports = { generateToken, verifyToken };
