import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div>
      <p>{task}</p>
      <button onClick={onDelete}>Delete</button>
      <button>Share</button>
    </div>
  );
};

export default TaskItem;
