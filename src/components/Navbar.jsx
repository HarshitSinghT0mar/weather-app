// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div>
        <span className="text-lg font-bold">Weather App</span>
      </div>
      <div className="flex items-center">
        <button className="text-white hover:text-gray-300 mr-4">Login</button>
      
        <div className="relative ml-4">
          <input type="checkbox" id="toggle" className="hidden" />
          <label
            htmlFor="toggle"
            className="cursor-pointer bg-yellow-400 h-6 w-12 rounded-full"
          >
            <span className="block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
