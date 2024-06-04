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
      navigate('/add-task');
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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-3 py-2 border rounded mb-4"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-3 py-2 border rounded mb-4"
      />
      <button onClick={handleSignUp} className="bg-blue-600 text-white px-4 py-2 rounded">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;