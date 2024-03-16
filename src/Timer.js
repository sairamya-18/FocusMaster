import React, { useState, useEffect } from 'react';

const Timer = ({ timer }) => {
    const [seconds, setSeconds] = useState(timer.duration * 60);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (!isPaused && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPaused, seconds]);

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setSeconds(timer.duration * 60);
        setIsPaused(false);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="timer">
            <h2>{timer.type} Timer</h2>
            <div className="timer-display">{formatTime(seconds)}</div>
            <div className="timer-buttons">
                <button onClick={handlePauseResume}>{isPaused ? 'Resume' : 'Pause'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
