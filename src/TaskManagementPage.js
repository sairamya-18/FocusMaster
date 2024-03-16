import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './TaskManagementPage.css'; // Import the CSS file for styling

const TaskManagementPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [sortBy, setSortBy] = useState('Priority'); // Default sort by Priority
    const navigate = useNavigate(); // Initialize useNavigate hook

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const markCompleted = (taskId) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    // Function to navigate back to the main page
    const navigateToMainPage = () => {
        navigate('/'); // Navigate to the main page
    };

    // Function to sort tasks based on selected option
    const sortTasks = () => {
        let sortedTasks = [...tasks];
        switch (sortBy) {
            case 'Priority':
                sortedTasks = sortedTasks.sort((a, b) => a.priority.localeCompare(b.priority));
                break;
            case 'Due Date':
                sortedTasks = sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
                break;
            case 'Difficulty':
                sortedTasks = sortedTasks.sort((a, b) => a.difficulty - b.difficulty);
                break;
            default:
                break;
        }
        setTasks(sortedTasks);
    };

    return (
        <div className="task-management-page">
            <h1>Task Management</h1>
            <button onClick={toggleForm} className="add-task-btn">Add Task</button>
            {showForm && <TaskForm addTask={addTask} />}
            <div className="sorting-dropdown">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="Priority">Sort by Priority</option>
                    <option value="Due Date">Sort by Due Date</option>
                    <option value="Difficulty">Sort by Difficulty</option>
                </select>
                <button onClick={sortTasks}>Sort</button>
            </div>
            <TaskList tasks={tasks} markCompleted={markCompleted} />
            <button onClick={navigateToMainPage}>Go Back to Main Page</button>
        </div>
    );
};

export default TaskManagementPage;
