import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { auth } from './Firebase/Firebase'; 
import Header from './Component/Header';
import ToDoList from './Component/ToDo-List';
import AddTask from './Component/AddTask';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Footer from './Component/Footer'; 
import Profile from './Component/Profile';
import AboutUs from './Pages/LearnMore'; 
import Services from './Pages/OurServices';
import Contact from './Pages/GetInTouch'; 
import ViewTasks from './Component/View';
import Home from './Component/Home';

const App = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchedTasks = []; 
    const fetchedCategories = ['All', 'Work', 'Personal']; 
    setTasks(fetchedTasks);
    setFilteredTasks(fetchedTasks);
    setCategories(fetchedCategories);
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    filterTasks('All');
  };

  const filterTasks = (category) => {
    setFilteredTasks(category === 'All' ? tasks : tasks.filter(task => task.category === category));
  };

  return (
    <Router>
  <div className="bg-gray-100 min-h-screen">
    <Header user={user} />
    <div className="container mx-auto px-4 py-8">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home user={user} addTask={addTask} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/view-tasks" element={<ViewTasks tasks={filteredTasks} categories={categories} filterTasks={filterTasks} />} />
        <Route path="/task-manager" element={<TaskManager addTask={addTask} tasks={tasks} />} />
      </Routes>
    </div>
    <Footer />
  </div>
</Router>
  );
};

const TaskManager = ({ addTask, tasks }) => {
  return (
    <div className="max-w-lg mx-auto">
      <AddTask onAddTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
};

export default App;
