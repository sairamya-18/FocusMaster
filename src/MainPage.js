// MainPage.js
import React from 'react';
import './MainPage.css'; // Import the CSS file

const MainPage = () => {
    return (
        <div>
            {/* Background Image with Text */}
            <section className="hero">
                <div className="hero-content">
                    <h1>From Procrastination to Productivity with FocusMastery</h1>
                    <p>Manage your tasks, beat procrastination, and improve your concentration with our AI-driven platform.</p>
                    <div className="buttons">
                        <button className="get-started">Get Started</button>
                        <button className="learn-more">Learn More</button>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-us">
                <div className="container">
                    <h2>Our Mission</h2>
                    <p>At FocusMaster, we're committed to revolutionizing productivity and helping individuals unlock their full potential. Our mission is simple: to empower users to overcome procrastination, enhance concentration, and achieve their goals with the aid of AI-driven assistance and productivity tools.</p>

                    <h2>Who We Are</h2>
                    <p>FocusMaster is a team of dedicated individuals passionate about productivity, technology, and personal development. Founded in [year], we've set out to create a platform that combines cutting-edge AI algorithms with proven productivity techniques to support users in their journey towards peak performance.</p>

                    <h2>Our Approach</h2>
                    <p>At FocusMaster, we believe in a holistic approach to productivity. Our platform integrates advanced AI-powered features such as task analysis, distraction blocking, and productivity prediction with tried-and-tested techniques like the Pomodoro Technique and task management systems. By combining the best of both worlds, we provide users with a comprehensive toolkit to optimize their workflow, minimize distractions, and maximize their focus.</p>

                    <h2>Meet the Team</h2>
                    <ul>
                        <li><strong>Founder's Name</strong>, CEO: Brief bio</li>
                        <li><strong>Developer's Name</strong>, Lead Developer: Brief bio</li>
                        <li><strong>Designer's Name</strong>, Lead Designer: Brief bio</li>
                        <li><strong>Other Team Members</strong>: Brief bios</li>
                    </ul>

                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Innovation:</strong> We're committed to continuous innovation and improvement, always seeking new ways to enhance our platform and better serve our users.</li>
                        <li><strong>Integrity:</strong> We operate with integrity and transparency in everything we do, ensuring that our users can trust us to support them on their productivity journey.</li>
                        <li><strong>Empowerment:</strong> We believe in empowering individuals to take control of their productivity and achieve their goals on their terms.</li>
                    </ul>

                    <h2>Join Us</h2>
                    <p>Ready to take your productivity to the next level? Join the FocusMaster community today and start your journey towards greater focus, efficiency, and success.</p>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="faqs">
                <div className="container">
                    <h2>Frequently Asked Questions (FAQs)</h2>

                    <ol>
                        <li>
                            <h3>What is FocusMaster?</h3>
                            <p>FocusMaster is a web application designed to assist users in managing their daily tasks, combating procrastination, and improving concentration through AI-driven techniques.</p>
                        </li>
                        <li>
                            <h3>How does FocusMaster work?</h3>
                            <p>FocusMaster employs various features such as task management, Pomodoro Technique integration, distraction blocker, task insights, and motivational reminders to help users stay focused and productive.</p>
                        </li>
                        <li>
                            <h3>What is the Pomodoro Technique?</h3>
                            <p>The Pomodoro Technique is a time management method that breaks work into focused intervals (typically 25 minutes) followed by short breaks (usually 5 minutes). FocusMaster integrates this technique to help users work with increased efficiency and focus.</p>
                        </li>
                        <li>
                            <h3>How does the distraction blocker feature work?</h3>
                            <p>The distraction blocker prevents access to distracting websites or applications during focused work sessions. It uses AI algorithms to learn from user behavior and dynamically adjust the list of blocked distractions for maximum effectiveness.</p>
                        </li>
                        <li>
                            <h3>Can I track my productivity with FocusMaster?</h3>
                            <p>Yes, FocusMaster offers task insights and analytics features that allow users to track their productivity and analyze task completion trends over time. AI-powered analytics provide insights into productivity patterns and identify factors that affect focus and concentration.</p>
                        </li>
                        <li>
                            <h3>Are there motivational features in FocusMaster?</h3>
                            <p>Yes, FocusMaster sends motivational messages, quotes, or visual cues to encourage users and keep them motivated throughout the day. AI algorithms personalize motivational content based on user preferences and past interactions.</p>
                        </li>
                        <li>
                            <h3>How can I get started with FocusMaster?</h3>
                            <p>To get started with FocusMaster, simply sign up for an account on our website. Once registered, you can start using the platform's features to improve your focus, productivity, and task management skills.</p>
                        </li>
                        <li>
                            <h3>Is FocusMaster compatible with different devices?</h3>
                            <p>Yes, FocusMaster is designed to be responsive and accessible across various devices, including desktops, tablets, and mobile phones. You can access the platform from any device with an internet connection.</p>
                        </li>
                        <li>
                            <h3>Can I customize my experience with FocusMaster?</h3>
                            <p>Absolutely! FocusMaster offers customization options such as task prioritization, distraction blocker settings, and personalized task recommendations to align with your preferences and goals.</p>
                        </li>
                        <li>
                            <h3>Is my data secure with FocusMaster?</h3>
                            <p>Yes, we take data security and privacy seriously. FocusMaster employs industry-standard security measures to protect your data and ensure a safe and secure user experience.</p>
                        </li>
                    </ol>
                </div>
            </section>

            {/* Analytics Section */}
            {/* Your Analytics section content here */}
        </div>
    );
}

export default MainPage;














