const nodemailer = require("nodemailer");

const sendVerificationEmail = async (user, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "YOUR_EMAIL@gmail.com",
      pass: "YOUR_EMAIL_PASSWORD",
    },
  });

  const mailOptions = {
    from: "YOUR_EMAIL@gmail.com",
    to: user.email,
    subject: "Email Verification",
    text: `Verify your email by clicking the following link: http://localhost:3000/verify-email?token=${token}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail };
