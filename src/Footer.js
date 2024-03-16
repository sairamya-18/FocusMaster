// Footer.js

import React from 'react';
import './Footer.css'; // Import the corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <a href="#">Terms of Service</a>
                    <a href="#">Blogs</a>
                    <a href="#">Careers</a>
                    <div className="social-media">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="credit">
                    <p>Developed by Sai Ramya &copy; FocusMaster 2024</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
