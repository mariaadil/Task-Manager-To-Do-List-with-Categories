import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h2 className="text-lg font-semibold">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
      <span className="text-sm text-gray-400">{task.category}</span>
    </div>
  );
};

export default TaskItem;
