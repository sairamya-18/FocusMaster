import React, { useState } from 'react';
import ChallengeForm from './ChallengeForm';
import './ChallengesPage.css'; // Import the CSS file for styling

const ChallengesPage = () => {
    const [challenges, setChallenges] = useState([]);

    const addChallenge = (newChallenge) => {
        setChallenges([...challenges, newChallenge]);
    };

    return (
        <div className="challenges-page">
            <h1>Challenges</h1>
            <ChallengeForm addChallenge={addChallenge} />
            <div className="challenges-list">
                <h2>Current Challenges</h2>
                <ul>
                    {challenges.map((challenge, index) => (
                        <li key={index}>
                            <strong>{challenge.type}</strong> - {challenge.duration} - {challenge.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChallengesPage;
