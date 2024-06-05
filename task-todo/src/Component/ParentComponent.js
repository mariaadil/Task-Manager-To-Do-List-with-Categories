import React from 'react';
import AddTask from './AddTask';

const ParentComponent = () => {
  const handleAddTask = (newTask) => {
    // Add logic to handle adding the task
    console.log('Task added:', newTask);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold text-center mb-4">Task Manager</h1>
      <div className="bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-md">
        <div className="p-6">
          <AddTask onAddTask={handleAddTask} />
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;
