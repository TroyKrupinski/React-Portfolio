import React, { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState('');

    const changeBackground = () => {
        // Change to a new background color or image
        setBackgroundColor('new-color'); // Replace 'new-color' with the desired color or gradient
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        changeBackground(); // Change background on form submission

        try {
            const response = await axios.post('/send-email', {
                to: 'TroyKrupinski@my.unt.edu', // ensure this endpoint is configured correctly on your server
                name,
                email,
                message,
            });
            if (response.status === 200) {
                setFeedback('Thank you for your message!');
            } else {
                throw new Error('Non-200 response');
            }
        } catch (error) {
            console.error('Failed to send email:', error);
            setFeedback('Failed to send email. Please try again later.');
        }
    };

    return (
        <div className="contact-form-container" style={{ backgroundColor }}>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={e => setMessage(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
                <div>{feedback}</div>
            </form>
        </div>
    );
};

export default ContactForm;
