import React, { useState } from 'react';
import './DistractionBlockerPage.css'; // Import the CSS file for styling

const DistractionBlockerPage = () => {
    const [blockedSites, setBlockedSites] = useState([]);
    const [newSite, setNewSite] = useState('');

    const addSite = () => {
        if (newSite && !blockedSites.includes(newSite)) {
            setBlockedSites([...blockedSites, newSite]);
            setNewSite('');
        }
    };

    const removeSite = (site) => {
        const updatedSites = blockedSites.filter(url => url !== site);
        setBlockedSites(updatedSites);
    };

    return (
        <div className="distraction-blocker-page">
            <h1>Distraction Blocker</h1>
            <div className="form-container">
                <input
                    type="text"
                    value={newSite}
                    onChange={(e) => setNewSite(e.target.value)}
                    placeholder="Enter website URL"
                />
                <button onClick={addSite}>Block</button>
            </div>
            <div className="blocked-sites-container">
                <h2>Blocked Sites</h2>
                <ul>
                    {blockedSites.map((site, index) => (
                        <li key={index}>
                            {site}
                            <button onClick={() => removeSite(site)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DistractionBlockerPage;
