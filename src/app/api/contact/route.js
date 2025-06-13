

import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            // SENDER
            from: email,
            // RECEIVER
            to: process.env.RECEIVER_EMAIL,
            // OBJECT
            subject: `New contact form submission from ${name}`,
            // MESSAGE
            text: message,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error sending email" }), { status: 500 });
    }
}
