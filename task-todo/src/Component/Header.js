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
              <li><Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link></li>
              <li><button onClick={handleSignOut} className="text-gray-300 hover:text-white">Sign Out</button></li>
            </>
          ) : (
            <>
              <li><Link to="/signin" className="text-gray-300 hover:text-white">Sign In</Link></li>
              <li><Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
