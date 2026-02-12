import React, { use, useEffect, useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  const [currentPage, setCurrentPage] = useState("Signup")
  const [currentUser, setcurrentUser] = useState(null)

  const handleSignup = (formData) => {
    const users = JSON.parse(localStorage.getItem("users") || '[]')
    const existingUser = users.find(user => user.email === formData.email)
    if(existingUser){
      alert("Email already registered, please login")
      setCurrentPage("login")
      return
    }

    users.push(formData)
    localStorage.setItem("users", JSON.stringify(users))
    setcurrentUser(formData)
    localStorage.setItem("currentUser", JSON.stringify(formData))
    setCurrentPage("dashboard")

  }

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(user => user.email === email && user.password === password)
    if(user){
      setCurrentPage(user)
      localStorage.setItem("currentUser", JSON.stringify(user))
      setCurrentPage("Dashboard")
    }else{
      alert("invalid email and password")
    }
  }

  const handleLogout = () => {
    setCurrentPage(null)
    localStorage.removeItem("currentUser")
    setCurrentPage("Signup")
  }

  useEffect(()=>{
    const user = localStorage.getItem("currentUser")
    if(user){
      setcurrentUser(JSON.parse(user))
      setCurrentPage("Dashboard")
    }
  })


  return (
    <div>
      {currentPage === 'Signup' && <Signup onSignup={handleSignup} switchToLogin = {()=>setCurrentPage("Login")} />}
      {currentPage === 'Login' && <Login onLogin={handleLogin} switchToSignup={()=>setCurrentPage("Signup")} />}
      {currentPage === 'Dashboard' && <Dashboard user={currentUser} onLogout={handleLogout} />}
    </div>
  )
}

export default App
