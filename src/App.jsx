import React, { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  const [currentPage, setCurrentPage] = useState("Signup")

  return (
    <div>
      {currentPage === 'Signup' && <Signup />}
      {currentPage === 'Login' && <Login />}
      {currentPage === 'Dashboard' && <Dashboard />}
    </div>
  )
}

export default App
