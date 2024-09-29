const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/User");
const { generateToken, verifyToken } = require("../utils/token");
const { sendVerificationEmail } = require("../services/emailService");

const register = async (req, res) => {
  const { email, password, displayName } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({
      email,
      password: hashedPassword,
      displayName,
    });

    const token = generateToken({ email });
    user.verificationToken = token;

    await user.save();

    await sendVerificationEmail(user, token);

    res
      .status(201)
      .json({ message: "User registered. Please verify your email." });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = verifyToken(token);
    const user = await User.findOne({
      email: decoded.email,
      verificationToken: token,
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.json({ message: "Email verified successfully" });
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json(info);

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.json(user);
    });
  })(req, res, next);
};

const logout = (req, res) => {
  req.logout();
  res.json({ message: "Logged out successfully" });
};

module.exports = { register, verifyEmail, login, logout };
