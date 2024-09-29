const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = (passport) => {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });

  // Google Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: "YOUR_GOOGLE_CLIENT_ID",
        clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
        callbackURL: "http://localhost:5000/api/auth/google/callback",
      },
      async (token, tokenSecret, profile, done) => {
        try {
          let user = await User.findOne({ googleId: profile.id });
          if (user) {
            return done(null, user);
          }
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            credits: 200,
          });
          await user.save();
          return done(null, user);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );

  // Facebook Strategy
  passport.use(
    new FacebookStrategy(
      {
        clientID: "YOUR_FACEBOOK_CLIENT_ID",
        clientSecret: "YOUR_FACEBOOK_CLIENT_SECRET",
        callbackURL: "http://localhost:5000/api/auth/facebook/callback",
        profileFields: ["id", "displayName", "emails"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ facebookId: profile.id });
          if (user) {
            return done(null, user);
          }
          user = new User({
            facebookId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            credits: 200,
          });
          await user.save();
          return done(null, user);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );

  // LinkedIn Strategy
  passport.use(
    new LinkedInStrategy(
      {
        clientID: "YOUR_LINKEDIN_CLIENT_ID",
        clientSecret: "YOUR_LINKEDIN_CLIENT_SECRET",
        callbackURL: "http://localhost:5000/api/auth/linkedin/callback",
        scope: ["r_emailaddress", "r_liteprofile"],
      },
      async (token, tokenSecret, profile, done) => {
        try {
          let user = await User.findOne({ linkedinId: profile.id });
          if (user) {
            return done(null, user);
          }
          user = new User({
            linkedinId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            credits: 200,
          });
          await user.save();
          return done(null, user);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );

  // Local Strategy
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) {
            return done(null, false, { message: "Invalid email or password" });
          }
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return done(null, false, { message: "Invalid email or password" });
          }
          return done(null, user);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
};
