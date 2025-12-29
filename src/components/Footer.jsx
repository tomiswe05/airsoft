import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Hero Section */}
        <div className="footer-hero">
          <h2>Visualize the content of your book for your readers with our studio's expertise.</h2>
          <button className="cta-button">Let's Get Started</button>
        </div>

        {/* Main Content Section */}
        <div className="footer-content">
          <div className="footer-section">
            <h3>We want to hear from you</h3>
            <button className="chat-button">Let's chat</button>
            <div className='contact'>
              <p>Address: 38 Cornhill, London EC3V 3NG, UK</p>
              <p>Phone Business number : +44 7445 230599  </p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Do you prefer personalized service</h3>
            <p className="message-prompt">Message us on</p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Follow us on social media</h3>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <p className="email-text">You can also send an email to</p>
            <a href="mailto:Airsoftstudios01@gmail.com  " className="email-link">
              Airsoftstudios01@gmail.com  
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>&copy;2024 All Right Reserve</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
