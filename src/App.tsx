import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AdminLoginPage } from './components/AdminLoginPage/AdminLoginPage'
import { AdminPage } from './components/AdminPage/AdminPage'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Ведомость школы JS</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route
          path="/admin-login"
          element={
            <div>
              <AdminLoginPage />
            </div>
          }
        />
        <Route path="/student" element={<div>student</div>} />
        <Route
          path="/admin"
          element={
            <div>
              <AdminPage isAdmin />
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
