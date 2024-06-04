import React from 'react';
import CategoryFilter from './CategoryFilter';
import ToDoItem from './ToDoItem';

const View = ({ tasks, categories, filterTasks }) => {
  return (
    <div>
      <h1>View Tasks</h1>
      <CategoryFilter categories={categories} filterTasks={filterTasks} />
            <div>
              {tasks.map((task) => (
                <ToDoItem key={task.id} task={task} />
              ))}
            </div>
    </div>
  );
};

export default View;