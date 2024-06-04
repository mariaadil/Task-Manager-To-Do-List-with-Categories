// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold">Task Manager</Link> {/* Link to the root URL */}
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
