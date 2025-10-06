import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendEmail = async (to, subject, text) => {
  // console.log('EMAIL_USER:', process.env.MY_EMAIL);
  // console.log('EMAIL_PASS:', process.env.MY_PASSWORD);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
// console.log('Recipient:', to);

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to,
    subject,
    text,
  };
  const info = await transporter.sendMail(mailOptions);
  return info;
};

export default sendEmail;
