import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../Login";
import Dashboard from "../Dashboard";
import { useAuth } from "../../contexts/AuthContext";

const Pages = () => {
  const { user } = useAuth();

// const location=useLocation()
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
       <Route path="/home" element={<Dashboard />} /> 
      </Routes>
    </>
  );
};

export default Pages;
