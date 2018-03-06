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
  to: string,
  subject: string,
  text: ?string,
  html?: string
): Promise<void> => {
  let promise = Promise.resolve();

  const options = {
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

// module.exports = { sendEmail, sendHtmlEmail };
export default sendEmail;
