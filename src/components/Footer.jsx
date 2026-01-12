import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Hero Section */}
        <div className="footer-hero">
          <span className="footer-tagline">Ready to bring your story to life?</span>
          <h2>Let's create a cover that captivates your readers</h2>
          <p className="footer-hero-text">
            Transform your book with a stunning custom cover designed to stand out in the fantasy genre.
          </p>
          <button className="cta-button">Get Started Today</button>
        </div>

        {/* Main Content Section */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">Airsoft Studios</h3>
            <p className="footer-description">
              We help self-published fantasy authors enchant readers at first glance through high-quality book cover design.
            </p>
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

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#covers">Book Cover Design</a></li>
              <li><a href="#ebook">eBook Covers</a></li>
              <li><a href="#print">Print Covers</a></li>
              <li><a href="#series">Series Design</a></li>
              <li><a href="#marketing">Marketing Assets</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <HiOutlineLocationMarker className="contact-icon" />
                <span>38 Cornhill, London EC3V 3NG, UK</span>
              </li>
              <li>
                <HiOutlinePhone className="contact-icon" />
                <span>+44 7445 230599</span>
              </li>
              <li>
                <HiOutlineMail className="contact-icon" />
                <a href="mailto:Airsoftstudios01@gmail.com">Airsoftstudios01@gmail.com</a>
              </li>
            </ul>
            <button className="chat-button">Let's Chat</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">&copy; 2025 Airsoft Studios. All Rights Reserved.</p>
            <div className="footer-legal-links">
              <Link to="/terms">Terms & Conditions</Link>
              <span className="divider">|</span>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
