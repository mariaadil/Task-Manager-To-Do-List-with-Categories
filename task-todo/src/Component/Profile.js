import React from 'react';

const Profile = () => {
  const profileData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A passionate learner and developer.',
    interests: ['Coding', 'Design', 'Reading'],
    skills: ['JavaScript', 'React', 'HTML', 'CSS']
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Name:</h3>
          <p className="text-gray-800">{profileData.name}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Email:</h3>
          <p className="text-gray-800">{profileData.email}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Bio:</h3>
          <p className="text-gray-800">{profileData.bio}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Interests:</h3>
          <ul className="list-disc list-inside text-gray-800">
            {profileData.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Skills:</h3>
          <ul className="list-disc list-inside text-gray-800">
            {profileData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
