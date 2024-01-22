// Navbar.js
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setDark, dark }) => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
    setUser({ isAuthenticated: false });
    navigate("/");
  };
  return (
    <nav
      className={`${
        dark ? "bg-stone-700" : "bg-blue-500"
      } p-4 text-white flex justify-between items-center`}
    >
      <div>
        <span className="text-lg font-bold">Weather App</span>
      </div>
      <div className="flex items-center">
        {user.isAuthenticated ? (
          <button
            className="text-white hover:text-gray-300 mr-4"
            onClick={logOutUser}
          >
            Logout
          </button>
        ) : (
          <button className="text-white hover:text-gray-300 mr-4">Login</button>
        )}

        <div className="relative ml-4">
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={dark}
            onChange={toggleDarkMode}
          />
          <label
            htmlFor="toggle"
            className="cursor-pointer bg-yellow-400 h-6 w-12 rounded-full"
          >
            <span className="block h-5 w-5 rounded-full  bg-white shadow-md transform transition-transform duration-300 ease-in-out" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
