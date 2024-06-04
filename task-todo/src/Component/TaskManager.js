import React, { useState, useEffect } from 'eact';
import AddTask from '../Component/AddTask';
import CategoryFilter from '../Component/CategoryFilter';
import TaskList from '../Component/TaskList';
import Category from '../Pages/Category';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [categories, setCategories] = useState(['All', 'Work', 'Personal', 'Shopping', 'Others']);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
      setFilteredTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const filterTasks = (category) => {
    if (category === 'All') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter(task => task.category === category);
      setFilteredTasks(filtered);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>
      <Category categories={categories} setCategories={setCategories} />
      <CategoryFilter categories={categories} filterTasks={filterTasks} />
      <AddTask addTask={addTask} categories={categories} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default TaskManager;
