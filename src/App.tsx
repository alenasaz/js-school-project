import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AdminLoginPage } from './components/AdminLoginPage/AdminLoginPage'
import { AdminPage } from './components/AdminPage/AdminPage'
import StudentPage from './components/StudentPage/StudentPage'
import { GetUserNameById } from './gql/index'

const App = () => {
  //TODO: удалить, тестовые данные для Hasura
  const hasuraTestQuery = GetUserNameById(77278863)
  console.log(hasuraTestQuery)

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
        <Route path="/student" element={<StudentPage />} />
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
