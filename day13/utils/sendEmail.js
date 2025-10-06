import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text) => {
  try {
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
  } catch (error) {
  next(error)
}
};

export default sendEmail;
