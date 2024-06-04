// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer'; 
import AboutUs from './Pages/LearnMore'; 
import Services from './Pages/OurServices'; 
import Contact from './Pages/GetInTouch'; 
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import TaskManager from './Component/TaskManager';

// Import the Home component or replace it with another existing component
 // Make sure to adjust the import path based on the actual location of the Home component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use the Home component */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/taskmanager" element={<TaskManager />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
