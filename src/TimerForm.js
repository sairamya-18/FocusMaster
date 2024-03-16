import React, { useState } from 'react';

const TimerForm = ({ addTimer }) => {
    const [timerDetails, setTimerDetails] = useState({
        type: 'Standard', // Default timer type
        duration: '',
        numBreaks: '',
        notifications: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTimerDetails({ ...timerDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTimer({ ...timerDetails, id: Date.now(), running: false });
        setTimerDetails({
            type: 'Standard', // Reset to default timer type
            duration: '',
            numBreaks: '',
            notifications: false
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="type">Timer Type:</label>
            <select name="type" value={timerDetails.type} onChange={handleChange}>
                <option value="Standard">Standard</option>
                <option value="Short Break">Short Break</option>
                <option value="Long Break">Long Break</option>
                {/* Add more options for different timer types */}
            </select>
            <label htmlFor="duration">Duration (minutes):</label>
            <input type="number" name="duration" value={timerDetails.duration} onChange={handleChange} />
            <label htmlFor="numBreaks">Number of Breaks:</label>
            <input type="number" name="numBreaks" value={timerDetails.numBreaks} onChange={handleChange} />
            <label htmlFor="notifications">Enable Notifications:</label>
            <input type="checkbox" name="notifications" checked={timerDetails.notifications} onChange={handleChange} />
            <button type="submit">Add Timer</button>
        </form>
    );
};

export default TimerForm;
