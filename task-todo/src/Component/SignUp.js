import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Basic email format validation
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignUp = async () => {
    setError(''); // Clear previous error messages

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to task manager after signing up
      navigate('/task-manager');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already in use. Please use a different email.');
      } else if (error.code === 'auth/weak-password') {
        setError('The password is too weak. Please use a stronger password.');
      } else if (error.code === 'auth/invalid-email') {
        setError('The email address is not valid. Please check and try again.');
      } else {
        setError('Failed to sign up. Please try again.');
      }
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleSignUp} 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Sign Up
        </button>
        <p className="text-sm mt-4 text-gray-600 text-center">
          Already have an account? <a href="/signin" className="text-blue-500 hover:underline">Sign in here</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
