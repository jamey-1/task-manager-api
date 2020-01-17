const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_EMAIL_PSW,
  },
});

const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: email,
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    // console.log("Email sent: " + info.response);
    return info;
  } catch (e) {
    console.log(e);
  }
};

const sendCancelationEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: email,
    subject: `Sorry to see you go!`,
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

// // test sendWelcomeEmail method //////////////////////////
// sendWelcomeEmail(process.env.USER_EMAIL, "James111")
//   .then(info => {
//     console.log("Email sent: " + info.response);
//   })
//   .catch(e => {
//     console.log(e);
//   });
/////////////////////////////////////////////////////////////

// // test sendMail method which return a promise ///////////
// const mailOptions = {
//   from: process.env.USER_EMAIL,
//   to: process.env.USER_EMAIL,
//   subject: "Sending Email using Node.js",
//   text: `Hello world! Frome task-manager.111`,
// };

// transporter
//   .sendMail(mailOptions)
//   .then(info => {
//     console.log("Email sent: " + info.response);
//   })
//   .catch(error => {
//     console.log(error);
//   });
//////////////////////////////////////////////////////////////

// // sendMail original method ///////////////////////////////
// transporter.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
