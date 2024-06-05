import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase'; // Import the Firebase Auth object
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Header from './Header';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError('Error signing in. Please try again.');
      console.error('Error signing in:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen bg-gray-100">

      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Sign In</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button 
        onClick={handleSignIn} 
        disabled={loading}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </button>
      <p className="mt-4 text-sm text-gray-600">or continue with other methods</p>
    </div>
  );
};

export default SignIn;
