import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import home from '../Images/home.gif';

const Home = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 text-blue-700">Welcome to Task Manager</h1>
      
      {/* Get Started Button */}
      <animated.div
        style={props}
        className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <Link to="/task-manager" className="text-lg md:text-xl font-semibold">
          Get Started
        </Link>
      </animated.div>
      
      {/* Animated GIF */}
      <div className="relative w-full max-w-md mt-8">
        <img
          src={home}
          alt="Animated GIF"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-blue-900 rounded-lg opacity-75"></div>
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-xl font-semibold mb-2">Organize Your Tasks Effortlessly</h2>
          <p className="text-lg">Plan, track, and manage your tasks with ease.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
