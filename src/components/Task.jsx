import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Task = ({ task, onEdit, onDelete }) => {
  const { title, description, dueDate, priority, completed, labels } = task;

  return (
    <div className={`border p-4 mb-4 ${completed ? 'bg-green-100' : 'bg-white'} rounded-md shadow-md transition duration-300 ease-in-out`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex gap-2">
          <FaEdit onClick={() => onEdit(task.id)} className="cursor-pointer text-gray-600 text-lg hover:text-indigo-600" />
          <FaTrash onClick={() => onDelete(task.id)} className="cursor-pointer text-gray-600 text-lg hover:text-red-600" />
        </div>
      </div>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-700"><span className="font-bold">Due Date:</span> {dueDate}</p>
      <p className="text-gray-700"><span className="font-bold">Priority:</span> {priority}</p>
      <p className="text-gray-700"><span className="font-bold">Labels:</span> {labels.join(', ')}</p>
      <div className="flex items-center mt-4">
        <input type="checkbox" checked={completed} readOnly className="mr-2" />
        <label className="text-gray-700 text-sm">Completed</label>
      </div>
    </div>
  );
};

export default Task;
