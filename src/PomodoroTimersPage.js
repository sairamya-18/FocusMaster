

import React, { useState } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';
import './PomodoroTimersPage.css'; // Import the CSS file for styling

const PomodoroTimersPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [timers, setTimers] = useState([]);
    const [activeTimer, setActiveTimer] = useState(null);
    const [motivationalQuotes] = useState([
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        // Add more quotes as needed
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Success doesn’t just find you. You have to go out and get it.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Dream bigger. Do bigger.",
        "Don’t stop when you’re tired. Stop when you’re done.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Do something today that your future self will thank you for.",
        "Little things make big days.",
        "It’s going to be hard, but hard does not mean impossible.",
        "Don’t wait for opportunity. Create it.",
    ]);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const addTimer = (newTimer) => {
        setTimers([...timers, newTimer]);
        if (!activeTimer) {
            setActiveTimer(newTimer);
        }
    };

    const deleteTimer = (timerId) => {
        setTimers(timers.filter(timer => timer.id !== timerId));
        if (activeTimer && activeTimer.id === timerId) {
            setActiveTimer(null);
        }
    };

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        return motivationalQuotes[randomIndex];
    };

    return (
        <div className="pomodoro-timers-page">
            <h1>Pomodoro Timers</h1>
            <button onClick={toggleForm} className="add-timer-btn">New Timer</button>
            {showForm && <TimerForm addTimer={addTimer} />}
            <div className="timers-container">
                {timers.map((timer, index) => (
                    <Timer key={index} timer={timer} onDelete={() => deleteTimer(timer.id)} isActive={timer === activeTimer} />
                ))}
            </div>
            <div className="motivational-quote">
                <p>{getRandomQuote()}</p>
            </div>
        </div>
    );
};

export default PomodoroTimersPage;
