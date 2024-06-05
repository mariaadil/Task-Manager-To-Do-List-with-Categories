import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Web Development</h2>
            <p className="text-gray-700">
              We create custom websites and web applications using the latest technologies.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Mobile App Development</h2>
            <p className="text-gray-700">
              We design and develop mobile applications for iOS and Android platforms.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">UI/UX Design</h2>
            <p className="text-gray-700">
              Our team specializes in creating intuitive and user-friendly interfaces.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Digital Marketing</h2>
            <p className="text-gray-700">
              We help businesses reach their target audience through effective digital marketing strategies.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Graphic Design</h2>
            <p className="text-gray-700">
              Our talented designers create stunning visuals to enhance your brand identity.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Consulting Services</h2>
            <p className="text-gray-700">
              We offer expert consulting services to help you achieve your business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
