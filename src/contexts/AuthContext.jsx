import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')) || {})

useEffect(()=>{
localStorage.setItem('user', JSON.stringify(user))
},[user])




  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>;
};



export const useAuth=()=>{
    return useContext(AuthContext)
}