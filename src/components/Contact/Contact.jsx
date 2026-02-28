import React, { useRef, useState, useEffect } from 'react'
import './contact.scss'
import '../shared/animated-titles.scss'
import Phone from '../../images/phone.webp'
import Email from '../../images/email.webp'
import Address from '../../images/address.webp'
import emailjs from '@emailjs/browser';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

function Contact() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_subject: '',
        user_email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef();
    
    const [setElements] = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in, .c_container');
        setElements(Array.from(elements));
    }, [setElements]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const { user_name, user_email, user_subject, message } = formData;
        if (!user_name || !user_subject || !message) return false;
        
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(user_email.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            alert("Please fill out all fields correctly.");
            return;
        }

        setIsSubmitting(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(() => {
            alert("Thank you for your message! I'll get back to you soon.");
            setFormData({
                user_name: '',
                user_subject: '',
                user_email: '',
                message: ''
            });
            setIsSubmitting(false);
        })
        .catch((error) => {
            console.error("EmailJS Error:", error.text);
            alert("Oops! Something went wrong. Please try again later.");
            setIsSubmitting(false);
        });
    };
    
    return (
        <div id="contact" className="contact fade-in">
            <div className="c_container">
                <div className="c_left">
                    <h1 className="c_title animated-title contact-title">Interested in my work? Contact Me!</h1>
                    <div className="c_info">
                        <div className="c_info_item">
                            <img src={Phone} alt="Phone" className="c_icon" />
                            +1 980 267 6925
                        </div>
                        <div className="c_info_item">
                            <img src={Email} alt="Email" className="c_icon" />
                            jaybhatt2502@gmail.com
                        </div>
                        <div className="c_info_item">
                            <img src={Address} alt="Address" className="c_icon" />
                            Charlotte, NC
                        </div>
                    </div>
                </div>
                <div className="c_right">
                    <p className="c_desc">OR, simply fill out the form below with your message and email, and I'll get back to you as soon as I can.</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="user_name"
                            value={formData.user_name} 
                            onChange={handleChange} 
                            placeholder='Your Name' 
                            required
                        />
                        <input 
                            type="text" 
                            name="user_subject"
                            value={formData.user_subject} 
                            onChange={handleChange} 
                            placeholder='Subject' 
                            required
                        />
                        <input 
                            type="email" 
                            name="user_email"
                            value={formData.user_email} 
                            onChange={handleChange} 
                            placeholder='Your Email' 
                            required
                        />
                        <textarea 
                            rows="5" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                        />
                        <button 
                            type="submit" 
                            className='contactSubmitButton'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
