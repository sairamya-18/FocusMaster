import React, { useState, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const scrollToAboutUs = () => {
        navigate('/#about-us');
    };

    const scrollToFaq = () => {
        navigate('/#faqs');
    };

    // Scroll to the specified element when the component mounts
    useLayoutEffect(() => {
        if (window.location.hash === '#about-us') {
            const aboutUsSection = document.getElementById('about-us');
            aboutUsSection.scrollIntoView({ behavior: 'smooth' });
        } else if (window.location.hash === '#faqs') {
            const faqSection = document.getElementById('faqs');
            faqSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="navbar">
            <div className="logo" onClick={() => navigate('/')}>
                <img src='https://th.bing.com/th/id/OIP.Wa4MHXbaOcOxwz9YtU_q2AHaHa?rs=1&pid=ImgDetMain' alt='Logo' style={{ width: '50px', height: '50px' }} />
            </div>

            <div className="navbar-content">
                <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <button className="dropbtn">Features</button>
                    <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                        <Link to="/taskmanagement">Task Management</Link>
                        <Link to="/pomodorotimers">Pomodoro Timers</Link>
                        <Link to="/distractionblocker">Distraction Blocker</Link>
                        <Link to="/analytics">Analytics</Link>
                        <Link to="/challenges">Challenges</Link>
                        <Link to="/motivation">Get Some Motivation</Link>
                    </div>
                </div>
                <a href='#' onClick={scrollToFaq}>FAQ'S</a>
                <a href='#' onClick={scrollToAboutUs}>About Us</a>
                <Link to="/login">Login</Link>
                <Link to="/getstarted">Get Started</Link>
                
            </div>
        </div>
    );
}

export default Header;
