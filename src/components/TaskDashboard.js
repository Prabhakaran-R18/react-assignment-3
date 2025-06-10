import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './TaskDashboard.css';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const toggleComplete = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteAllTasks = () => setTasks([]);

  const deleteCompletedTasks = () =>
    setTasks(tasks.filter((task) => !task.completed));

  const deletePendingTasks = () =>
    setTasks(tasks.filter((task) => task.completed));

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  return (
    <div className="dashboard">
      <h1>📅 PlanWise Daily Planner</h1>
      <TaskForm onAddTask={addTask} />
      <div className="filters">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </div>
      <div className="actions">
        <button className="danger" onClick={deleteAllTasks}>🗑 Delete All</button>
        <button className="warning" onClick={deletePendingTasks}>🕒 Delete Pending</button>
        <button className="success" onClick={deleteCompletedTasks}>✅ Delete Completed</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default TaskDashboard;
