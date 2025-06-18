// UTILITY
import nodemailer from 'nodemailer';


// ASSETS
import utilityContent from '../../../../assets/data/utilityContent';


// EXPORT
export async function POST(request) {

    // Utility Content
    const content = utilityContent.contactForm.submitContent;

    // Form Fields
    const {
        name,
        surname,
        email,
        phone,
        message,
        privacy1,
        privacy2,
        privacy3,
    } = await request.json();

    // Mandatory Fields Check
    if (!name || !surname || !email || !phone) {
        return new Response(JSON.stringify({ error: utilityContent.errorMsg.requiredField }), {
            status: 400,
        });
    }

    // ENV Variables
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `${name} ${surname} | <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `${content.emailSubject} ${name} ${surname} (${email})`,
            html: `
                <h2>Messaggio da ${name} ${surname}</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Cognome:</strong> ${surname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefono:</strong> ${phone}</p>
                <p><strong>Consenso Privacy 1:</strong> ${privacy1 ? '✅' : '❌'}</p>
                <p><strong>Consenso Privacy 2:</strong> ${privacy2 ? '✅' : '❌'}</p>
                <p><strong>Consenso Privacy 3:</strong> ${privacy3 ? '✅' : '❌'}</p>
                <p><strong>Messaggio:</strong></p>
             <p>${message}</p>
                <hr />
            `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(content.submitErrorMsg, error);
        return new Response(JSON.stringify({ error: content.submitErrorMsg }), { status: 500 });
    }
}
