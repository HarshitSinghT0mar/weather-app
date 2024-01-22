import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {
    const {user}=useAuth()
    const location=useLocation()
  return (
    <>
      {user.isAuthenticated ? <Outlet />: <Navigate to='/' state={{from: location}} replace/>}
    </>
  )
}

export default ProtectedRoute
