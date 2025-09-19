import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${firstName} ${lastName}`,
      text: `Phone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
