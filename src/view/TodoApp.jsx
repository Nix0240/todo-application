import React, { useState } from 'react';
import TaskList from '../components/TaskList';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete project',
      description: 'Finish the task management project',
      dueDate: '2023-12-31',
      priority: 'High',
      completed: false,
      labels: ['Work', 'Important'],
    },
    {
      id: 2,
      title: 'Read a book',
      description: 'Read a book on React development',
      dueDate: '2023-12-15',
      priority: 'Medium',
      completed: true,
      labels: ['Personal'],
    },
  ]);

  const handleEdit = (taskId) => {
    // Handle edit logic
    console.log(`Edit task with id ${taskId}`);
  };

  const handleDelete = (taskId) => {
    // Handle delete logic
    console.log(`Delete task with id ${taskId}`);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default TodoApp;
