import React, { useState } from 'react';
// import { images } from '../../constants';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client'; // <-- No longer needed for contact form
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Helper function to encode data for Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    // Prevent default form behavior if necessary, though this is a button click
    setLoading(true);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact', // This must match the name in index.html
        name,
        email,
        message
      }),
    })
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <>
      <h2 className="head-text">Ready to <span>collaborate?</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <AiOutlineMail size={25} color="var(--primary-color)" style={{ margin: '0 0.7rem' }} />
          <a href="mailto:sabiranthapa@gmail.com" className="p-text">sabiranthapa@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <AiOutlinePhone size={25} color="var(--primary-color)" style={{ margin: '0 0.7rem' }} />
          <a href="tel:+16475626399" className="p-text">+1 (647) 562-6399</a>
        </div>

        {/* Social Links for Principal Credibility */}
        <div className="app__footer-card">
          <a href="https://www.linkedin.com/in/sabiranthapa" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AiFillLinkedin size={25} color="var(--primary-color)" />
            <span className="p-text">LinkedIn</span>
          </a>
        </div>
        <div className="app__footer-card">
          <a href="https://github.com/sabiranthapa" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AiFillGithub size={25} color="var(--primary-color)" />
            <span className="p-text">GitHub</span>
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          {/* Important: Removed "form" tag here to prevent double submission issues in React. 
              We handle it via the button onClick */}

          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending...' : 'Send Message'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text-success">Thank you for getting in touch!</h3>
        </div>
      )}

      {/* --- COPYRIGHT SECTION --- */}
      <div className="copyright">
        <p className="p-text">@{new Date().getFullYear()} SABIRAN</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);