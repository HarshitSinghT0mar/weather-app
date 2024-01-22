import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
const [dark, setDark]=useState(true)

  return (
    <div className={`${dark ? 'bg-stone-800': 'bg-white'} w-full h-screen`}>
    <Navbar setDark={setDark} dark={dark} />
    <Dashboard dark={dark} />
     <Login />
    </div>
  )
}

export default App
