// src/components/Contact.js
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser'; // Import emailjs
import './Contact.css';
import useAnimateOnScroll from '../utils/AnimateOnScroll'; // Import the hook

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false); // New state for loading indicator
  const [statusMessage, setStatusMessage] = useState(''); // New state for status messages

  const addAnimateRef = useAnimateOnScroll(); // Initialize the hook
  const contactTitleRef = useRef(null);
  const contactDescriptionRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    addAnimateRef(contactTitleRef.current);
    addAnimateRef(contactDescriptionRef.current);
    addAnimateRef(contactFormRef.current);
    addAnimateRef(contactInfoRef.current);
  }, [addAnimateRef]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Start loading
    setStatusMessage(''); // Clear previous status

    // Replace with your actual EmailJS Service ID, Template ID, and Public Key
    const serviceId = 'service_11czdtr'; // e.g., 'service_xxxxxxxx'
    const templateId = 'template_ca76uut'; // e.g., 'template_xxxxxxxx'
    const publicKey = '44wV_XPzWyQvhmRMb'; // e.g., 'your_public_key_xxxxxxxx'

    // The object names here must match the variables in your EmailJS template (e.g., {{user_name}})
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        setStatusMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        setStatusMessage('Oops! Something went wrong. Please try again later.');
      })
      .finally(() => {
        setIsSending(false); // End loading
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
       
        <h2>Get in Touch</h2>
        <h2 className="animate-on-scroll" ref={contactTitleRef}></h2>
        <p className="section-description animate-on-scroll" ref={contactDescriptionRef}>
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        
        <div className="contact-content">
         
          <form onSubmit={handleSubmit} className="contact-form animate-from-left" ref={contactFormRef}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name" // Make sure name attribute matches formData keys
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email" // Make sure name attribute matches formData keys
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message" // Make sure name attribute matches formData keys
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
           

           
          <div className="contact-info animate-from-right" ref={contactInfoRef}>
            <h3>Find Me Here:</h3>
            <p><strong>Email:</strong> <a href="sandunipiyumika1623@gmail.com">sandunipiyumika1623@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sanduni-1623-gamage/" target="_blank" rel="noopener noreferrer">Sanduni Gamage</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/sandu1623" target="_blank" rel="noopener noreferrer">Sanduni Piyumika</a></p>
            <p><strong>Behance:</strong> <a href="https://www.behance.net/sandunigamage1623" target="_blank" rel="noopener noreferrer">Sanduni Gamage</a></p>
            <p><strong>Location:</strong> Matara, Sri Lanka.</p>
            <div className="social-icons">
              {/* Add SVG or FontAwesome icons here for better visuals */}
              <a href="https://www.linkedin.com/in/sanduni-1623-gamage/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> {/* Requires Font Awesome */}
              </a>
              <a href="https://github.com/sandu1623" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> {/* Requires Font Awesome */}
              </a>
              {/* Add more social links like Dribbble, Behance etc. */}
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default Contact;