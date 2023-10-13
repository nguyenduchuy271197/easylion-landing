import nodemailer from "nodemailer";

export interface Email {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { from, to, subject, html } = body as Email;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
    return Response.json({ message: "ok" });
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
