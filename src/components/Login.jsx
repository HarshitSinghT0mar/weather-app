// src/components/LoginForm.js

import React, {useState } from "react";
import { userData } from "../userData";
import { useAuth } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });
const navigate=useNavigate()
  const [error, setError] = useState(null);

  const { setUser, user } = useAuth();
  


     


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = userData.find(
      (user) =>
        user.username === inputData.username &&
        user.password === inputData.password
    );

    if (loggedInUser) {
      const { name, username, city } = loggedInUser;
      setUser({ name: name, username: username, city: city  ,isAuthenticated: true});
      setError(null);
      navigate('/home')
    } else {
      setError("Invalid username or password. Please try again.");
    }

    setInputData({ username: "", password: "" });
  };

 
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={` bg-white p-8 rounded shadow-md w-96`}>
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={inputData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md outline-none "
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500  text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
