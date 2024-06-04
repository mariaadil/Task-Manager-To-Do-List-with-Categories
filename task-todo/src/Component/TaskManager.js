// TaskManager.js
import React from 'react';
import AddTask from '../Component/AddTask';
import CategoryFilter from '../Component/CategoryFilter';
import TaskList from '../Component/TaskList';
import Category from '../Pages/Category'; // Import the Category component

const TaskManager = ({ categories, setCategories, filterTasks, addTask, filteredTasks }) => {
  return (
    <div>
      <h1>Task Manager</h1>
      <Category categories={categories} setCategories={setCategories} /> {/* Render the Category component */}
      <CategoryFilter categories={categories} filterTasks={filterTasks} />
      <AddTask addTask={addTask} categories={categories} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default TaskManager;
