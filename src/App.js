import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import { initialState, reducer } from "./store/reducer";
import {AdminLoginPage} from './components/AdminLoginPage/AdminLoginPage'
import {AdminPanelPage} from './components/AdminPanelPage/AdminPanelPage'

import "./App.css";

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin-page" element={<AdminPanelPage />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
