const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { to, name, email, message } = JSON.parse(event.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or another service
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
        }
    });

    const mailOptions = {
        from: 'you@example.com',
        to: to,
        subject: `New message from ${name}`,
        text: `You have received a new message from ${email}: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email" })
        };
    }
};
