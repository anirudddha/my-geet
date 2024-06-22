import React from 'react';
import './Footer.css'; // Make sure to create and import this CSS file for styling
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="RAAAG Logo" className="logo-img" />
          <h2>My Geet</h2>
          {/* <p>Your Story penned <br /> in timeless musical…</p> */}
        </div>

        {/* <div className="footer-explore">
          <h3>EXPLORE</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Condition</a></li>
            <li><a href="/refund">Refund Policy</a></li>
            <li><a href="/delivery">Delivery Guidelines</a></li>
          </ul>
        </div> */}

        <div className="footer-contact">
          <h3>FOLLOW Us</h3>
          <div className="social-icons">
            <a style={{marginLeft:"0px"}} href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
          <p><a href="mailto:raagasagift@gmail.com">xyz@gmail.com</a></p>
          <p>+91 00000 00000</p>
          <p>Rhythmix Music Private Limited 138 Shiv Apartments Malhotra Nagar VKI Jaipur Rajasthan 302013</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© All Copyright by My Geet Music Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
