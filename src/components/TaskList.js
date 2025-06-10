import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <div className="task-info">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(index)}
            />
            <span>{task.text}</span>
          </div>
          <div className="task-meta">
            <span className="timestamp">{task.date}</span>
            <button onClick={() => onDeleteTask(index)}>🗑</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
