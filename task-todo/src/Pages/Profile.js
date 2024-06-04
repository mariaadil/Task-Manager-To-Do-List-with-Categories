import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = () => {
    if (!name.trim() || !email.trim() || !bio.trim()) {
      setErrorMessage('Please fill in all fields before saving.');
      return;
    }

    // Perform save operation here (e.g., send data to server)

    // After save operation is successful
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      setErrorMessage(''); // Clear any previous error message
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="bg-white shadow-md p-4 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your bio"
            rows="4"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        {errorMessage && (
          <div className="mb-4 text-red-600">
            {errorMessage}
          </div>
        )}
        <div className="flex justify-end">
          <button 
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
      {isSaved && (
        <div className="mt-4 text-green-600">
          Your profile is saved.
        </div>
      )}
    </div>
  );
};

export default Profile;
