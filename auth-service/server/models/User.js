const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  facebookId: String,
  linkedinId: String,
  displayName: String,
  email: { type: String, unique: true },
  password: String,
  credits: { type: Number, default: 200 },
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
});

module.exports = mongoose.model("User", userSchema);
