import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // true per 465, false per altri
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO,
            subject: 'Nuovo messaggio dal contact form',
            text: message,
            html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Messaggio:</strong><br/>${message}</p>`,
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
        });
    } catch (error) {
        console.error('Errore invio email:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
        });
    }
}
