import React, { useState } from 'react';
import './GetSomeMotivationPage.css'; // Import the CSS file for styling

const GetSomeMotivationPage = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [motivationalQuotes, setMotivationalQuotes] = useState({
        study: [
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
            "The only way to do great work is to love what you do. - Steve Jobs",
            "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. - Confucius",
            // Add more study-related quotes here
        ],
        courage: [
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Courage is resistance to fear, mastery of fear, not absence of fear. - Mark Twain",
            "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. - Eleanor Roosevelt",
            // Add more courage-related quotes here
        ],
        motivation: [
            "Your limitation—it's only your imagination.",
            "Push yourself, because no one else is going to do it for you.",
            "Great things never come from comfort zones.",
            // Add more motivation-related quotes here
        ],
        positivity: [
            "Dream it. Wish it. Do it.",
            "Success doesn’t just find you. You have to go out and get it.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",
            // Add more positivity-related quotes here
        ],
        perseverance: [
            "Dream bigger. Do bigger.",
            "Don’t stop when you’re tired. Stop when you’re done.",
            "Wake up with determination. Go to bed with satisfaction.",
            // Add more perseverance-related quotes here
        ],
        // Add more categories and corresponding quotes here
    });

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const getRandomQuote = () => {
        const quotes = motivationalQuotes[selectedOption];
        if (quotes) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
        }
        return "Select an option to get motivation!";
    };

    return (
        <div className="motivation-page">
            <h1>Get Some Motivation</h1>
            <select onChange={handleOptionChange} value={selectedOption}>
                <option value="">Select an option</option>
                <option value="study">Study</option>
                <option value="courage">Courage</option>
                <option value="motivation">Motivation</option>
                <option value="positivity">Positivity</option>
                <option value="perseverance">Perseverance</option>
                {/* Add more options here */}
            </select>
            <div className="motivational-quote">
                <p>{getRandomQuote()}</p>
            </div>
        </div>
    );
};

export default GetSomeMotivationPage;
