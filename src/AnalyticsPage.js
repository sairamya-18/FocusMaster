import React, { useState, useEffect } from 'react';
import './AnalyticsPage.css'; // Import the CSS file for styling

const AnalyticsPage = () => {
    const [tasksCompleted, setTasksCompleted] = useState(0);
    const [totalTasks, setTotalTasks] = useState(0);
    const [pomodoroSessions, setPomodoroSessions] = useState(0);
    const [distractionSitesBlocked, setDistractionSitesBlocked] = useState(0);
    const [taskDetails, setTaskDetails] = useState([]);

    useEffect(() => {
        // Fetch data from the server or calculate the analytics data
        // For demonstration purposes, setting dummy data
        setTasksCompleted(25);
        setTotalTasks(50);
        setPomodoroSessions(10); // Dummy number of Pomodoro sessions done
        setDistractionSitesBlocked(5); // Dummy number of distraction sites blocked
        
        // Fetch task details from local storage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTaskDetails(tasks);
    }, []);

    return (
        <div className="analytics-page">
            <h1>Analytics</h1>
            <div className="analytics-summary">
                <div className="analytics-item">
                    <h2>Tasks Completed</h2>
                    <p>{tasksCompleted}</p>
                </div>
                <div className="analytics-item">
                    <h2>Total Tasks</h2>
                    <p>{totalTasks}</p>
                </div>
                <div className="analytics-item">
                    <h2>Pomodoro Sessions</h2>
                    <p>{pomodoroSessions}</p>
                </div>
                <div className="analytics-item">
                    <h2>Distraction Sites Blocked</h2>
                    <p>{distractionSitesBlocked}</p>
                </div>
            </div>
            <div className="task-details">
                <h2>Task Details</h2>
                <ul>
                    {taskDetails.map((task, index) => (
                        <li key={index}>
                            <strong>{task.title}</strong> - {task.priority} - {task.dueDate}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AnalyticsPage;
