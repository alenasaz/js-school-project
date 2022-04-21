import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AdminLoginPage } from './components/AdminLoginPage'
import { AdminPage } from './components/AdminPage'
import { NavigationPageTypesEnum } from './constants'
import StudentPage from './components/StudentPage/StudentPage'
import StudentLoginPage from './components/StudentLoginPage/StudentLoginPage'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path={NavigationPageTypesEnum.homePage}
          element={<div>Ведомость школы JS</div>}
        />
        <Route
          path={NavigationPageTypesEnum.loginPage}
          element={
            <div>
              <StudentLoginPage />
            </div>
          }
        />
        <Route
          path={NavigationPageTypesEnum.adminLoginPage}
          element={
            <div>
              <AdminLoginPage />
            </div>
          }
        />
        <Route
          path={NavigationPageTypesEnum.studentPage}
          element={<StudentPage />}
        />
        <Route
          path={NavigationPageTypesEnum.adminPage}
          element={
            <div>
              <AdminPage />
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
