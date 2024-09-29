const express = require("express");
const passport = require("passport");
const {
  register,
  verifyEmail,
  login,
  logout,
} = require("../controllers/authController");
const { ensureAuthenticated } = require("../middleware/authMiddleware");

const router = express.Router();

// Local auth routes
router.post("/register", register);
router.get("/verify-email", verifyEmail);
router.post("/login", login);
router.get("/logout", logout);

// Google auth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

// Facebook auth routes
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

// LinkedIn auth routes
router.get("/linkedin", passport.authenticate("linkedin"));
router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

module.exports = router;
