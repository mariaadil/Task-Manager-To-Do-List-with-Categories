// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-xl font-bold text-blue-500">Stay Connected</h2>
            <p className="mt-2">Join our newsletter for the latest updates.</p>
            <div className="mt-4 flex justify-center lg:justify-start">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full lg:w-auto border rounded-lg focus:outline-none" />
              <button className="bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg hover:bg-blue-700 focus:outline-none">Subscribe</button>
            </div>
            <p className="text-green-500 mt-2">You are connected! Thanks.</p>
          </div>
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-xl font-bold">Let's</h2>
            <ul className="mt-4 flex space-x-4">
              <li><Link to="/aboutus">Learn More</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-bold">Company Info</h2>
            <div className="mt-4">
              <p className="text-gray-400">123 Street Name, City, Country</p>
              <p className="text-gray-400">info@example.com</p>
              <p className="text-gray-400">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Task Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
