import nodemailer from "nodemailer";

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from,
    html: `
        <h3>${subject}</h3>
        <p>${message}</p>
        <br/>
        <p>보낸사람:${from}</p>
        `,
  };
  return transporter.sendMail(mailData);
}
