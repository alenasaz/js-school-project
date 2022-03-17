import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AdminLoginPage } from 'src/components/AdminLoginPage'
import { AdminPage } from 'src/components/AdminPage'
import { NavigationPageTypesEnum } from './constants'
import StudentPage from './components/StudentPage/StudentPage'

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
          element={<div>login</div>}
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
