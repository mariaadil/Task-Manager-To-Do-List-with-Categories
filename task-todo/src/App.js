import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './Firebase/Firebase'; 
import Header from './Component/Header';
import ToDoList from './Component/ToDo-List';
import ToDoItem from './Component/ToDoItem';
import AddTask from './Component/AddTask';
import CategoryFilter from './Component/CategoryFilter';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Footer from './Component/Footer'; 
import AboutUs from './Pages/LearnMore'; 
import Services from './Pages/OurServices'; 
import Contact from './Pages/GetInTouch'; 
import View from './Component/View';
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState(['All']); // Initialize with 'All'
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from database
    const fetchedTasks = []; // Example tasks fetched from database
    setTasks(fetchedTasks);
    setFilteredTasks(fetchedTasks);

    // Fetch categories from database
    const fetchedCategories = ['All', 'Work', 'Personal']; // Example categories fetched from database
    setCategories(fetchedCategories);
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    filterTasks('All'); // To show updated task list
  };

  const filterTasks = (category) => {
    if (category === 'All') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.category === category);
      setFilteredTasks(filtered);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ToDoList tasks={filteredTasks} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/view" element={<View tasks={tasks} categories={categories} filterTasks={filterTasks} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {user && (
          <>
            <AddTask addTask={addTask} categories={categories} />
            <CategoryFilter categories={categories} filterTasks={filterTasks} />
            <div>
              {filteredTasks.map((task) => (
                <ToDoItem key={task.id} task={task} />
              ))}
            </div>
            <button onClick={() => window.location.href = '/view'}>View Tasks</button>

          </>
        )}
        <Footer />
      </div>
    </Router>
  );
};

export default App;