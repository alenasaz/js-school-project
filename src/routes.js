import { Routes, Route } from "react-router-dom";
import React from "react";

import { HomePage } from "./components/HomePage/HomePage";
import { TeacherPage } from "./components/TeacherPage/TeacherPage";
import { StudentPage } from "./components/StudentPage/StudentPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/TeacherPage" element={<TeacherPage />} />
      <Route path="/StudentPage/:slug" element={<StudentPage />} />
    </Routes>
  );
};
