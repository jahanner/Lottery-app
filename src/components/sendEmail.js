import { nodemailer } from "nodemailer";
// const nodemailer = require("nodemailer");

function sendHtmlEmail(
  to: string,
  subject: string,
  html?: string
): Promise<void> {
  return sendEmail(to, subject, null, html);
}

const sendEmail = (
  to: "hannerj@objectcomputing.com",
  subject: "test",
  text: "test",
  html?: ""
): Promise<void> => {
  let promise = Promise.resolve();

  const options = {
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    service: "gmail",
    auth: {
      user: "hannerj@objectcomputing.com",
      pass: "Gl0r!ous"
    }
  };
  const transporter = nodemailer.createTransport(options);

  const data = {
    from: options.auth.user,
    to: to,
    subject: subject,
    text: text,
    html: html
  };
  promise = new Promise((resolve, reject) => {
    transporter.sendMail(data, err => {
      if (err) return reject(err);
      resolve();
    });
  });

  return promise;
};

sendEmail();
// module.exports = { sendEmail, sendHtmlEmail };
export default sendEmail;
