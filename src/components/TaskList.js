import React from 'react';

function TaskList({ tasks, completeTask, deleteTask, completed }) {
  if (tasks.length === 0) return <p className="empty">No tasks.</p>;

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-card${task.completed ? ' completed' : ''}`}>
          <div>
            <strong>{task.title}</strong>
            {task.category && <span className="category">{task.category}</span>}
            {task.deadline && (
              <span className="deadline">
                Due: {new Date(task.deadline).toLocaleDateString()}
              </span>
            )}
            {task.description && <p className="desc">{task.description}</p>}
          </div>
          <div className="task-actions">
            {!task.completed && (
              <button onClick={() => completeTask(task.id)} title="Mark as done">✔️</button>
            )}
            <button onClick={() => deleteTask(task.id)} title="Delete">🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;