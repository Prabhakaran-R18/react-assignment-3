import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    onAddTask({ text: taskText, date: new Date().toLocaleString() });
    setTaskText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
