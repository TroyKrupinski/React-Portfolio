import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const changeBackground = () => {
        // Change to a new background color or image
        setBackgroundColor('new-color'); // Replace 'new-color' with a color or gradient
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, message });
        // Here you would usually send the data to the server
        alert("Thank you for your message!");
    };

    return (
        
        <div 
        className="contact-form-container" 
        onClick={changeBackground}
        style={{ backgroundColor }}
        
    >
        <form className="contact-form">
        <form onSubmit={handleSubmit}>
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
                <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
        </form>

        </div>
        
    );
};

export default ContactForm;
