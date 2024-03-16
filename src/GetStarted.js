import React, { useState } from 'react';
import './GetStarted.css'; // Corrected import statement

const GetStarted = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Add sign-up logic here
    };

    return (
        <div>
            <h2>Get Started Page</h2>
            <form onSubmit={handleSignUp}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default GetStarted;
