import React from 'react';
import TaskList from './TaskList';

function TaskDashboard({ tasks, completeTask, deleteTask, reorderTasks }) {
  const now = new Date();

  const upcoming = tasks.filter(t => !t.completed && (!t.deadline || new Date(t.deadline) >= now));
  const overdue = tasks.filter(t => !t.completed && t.deadline && new Date(t.deadline) < now);
  const completed = tasks.filter(t => t.completed);

  return (
    <div className="dashboard">
      <section>
        <h2>Upcoming Tasks</h2>
        <TaskList tasks={upcoming} completeTask={completeTask} deleteTask={deleteTask} />
      </section>
      <section>
        <h2>Overdue Tasks</h2>
        <TaskList tasks={overdue} completeTask={completeTask} deleteTask={deleteTask} />
      </section>
      <section>
        <h2>Completed Tasks</h2>
        <TaskList tasks={completed} completeTask={completeTask} deleteTask={deleteTask} completed />
      </section>
    </div>
  );
}

export default TaskDashboard;