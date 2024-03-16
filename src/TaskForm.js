import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
    const [taskDetails, setTaskDetails] = useState({
        title: '',
        priority: '',
        dueDate: '',
        difficulty: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskDetails({ ...taskDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskDetails.title.trim() !== '') {
            addTask({ ...taskDetails, id: Date.now(), completed: false });
            setTaskDetails({
                title: '',
                priority: '',
                dueDate: '',
                difficulty: ''
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={taskDetails.title} onChange={handleChange} placeholder="Task Title" />
            <input type="text" name="priority" value={taskDetails.priority} onChange={handleChange} placeholder="Priority" />
            <input type="date" name="dueDate" value={taskDetails.dueDate} onChange={handleChange} />
            <input type="text" name="difficulty" value={taskDetails.difficulty} onChange={handleChange} placeholder="Difficulty" />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskForm;
