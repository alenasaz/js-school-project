import React from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import GithubLoginPage from './components/GithubLoginPage';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Ведомость школы JS</div>} />
        <Route path="/login" element={<GithubLoginPage/>} />
        <Route path="/admin-login" element={<div>admin-login</div>} />
        <Route path="/student" element={<div>student</div>} />
        <Route path="/admin" element={<div>admin</div>} />
      </Routes>
    </div>
  );
}

export default App;
