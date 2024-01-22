import { Suspense, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

import Login from './components/Login'
import Navbar from './components/Navbar'
import Pages from './components/Pages/Pages'

function App() {
const [dark, setDark]=useState(false)

  return (
    <div className={`${dark ? 'bg-stone-800': 'bg-white'} w-full h-screen`}>
    <Navbar setDark={setDark} dark={dark} />
    <Suspense fallback={<p>Loading...</p>}>
        <Pages />
      </Suspense>
      
    {/* <Dashboard dark={dark} />
     <Login /> */}
    </div>
  )
}

export default App
