import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, markCompleted }) => {
    return (
        <div className="task-list">
            <h2>Your Tasks</h2>
            {tasks.length === 0 ? (
                <p>No tasks added yet.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Difficulty</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
                                <td>{task.title}</td>
                                <td>{task.difficulty}</td>
                                <td>{task.dueDate}</td>
                                <td>{task.priority}</td>
                                <td>
                                    <input type="checkbox" checked={task.completed} onChange={() => markCompleted(task.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TaskList;
