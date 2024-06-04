// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';

const Header = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to='/' className="text-xl font-semibold">Task Manager</Link>
      <nav>
        <ul className="flex space-x-4">
          {user ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleSignOut}>Sign Out</button></li>
            </>
          ) : (
            <>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
