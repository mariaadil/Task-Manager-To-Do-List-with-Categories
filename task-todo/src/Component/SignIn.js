import React from 'react';
import { auth } from '../Firebase/Firebase'; // Import the Firebase Auth object
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <button onClick={handleSignIn} className="bg-blue-600 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;