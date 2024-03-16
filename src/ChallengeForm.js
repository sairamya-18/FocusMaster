import React, { useState } from 'react';

const ChallengeForm = ({ addChallenge }) => {
    const [duration, setDuration] = useState('weekly');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation code here if necessary
        addChallenge({ duration, type, description });
        // Clear form fields after submission
        setDuration('weekly');
        setType('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="duration">Duration:</label>
                <select id="duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="daily">Daily</option>
                </select>
            </div>
            <div>
                <label htmlFor="type">Type:</label>
                <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit">Create Challenge</button>
        </form>
    );
};

export default ChallengeForm;
