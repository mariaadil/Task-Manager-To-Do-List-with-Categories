import React from 'react';
import ToDoItem from './ToDoItem';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center mt-4 text-gray-500">No tasks available</p>
      ) : (
        tasks.map((task) => <ToDoItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
