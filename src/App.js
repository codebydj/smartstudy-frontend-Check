import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import LatestNotes from "./pages/LatestNotes";
import SubjectFiles from "./pages/SubjectsPage";
import FilesPage from "./pages/FilesPage";
import UploadForm from "./components/UploadForm";
import Downloading from "./components/Downloading";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./AuthLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout with Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/latest-notes" element={<LatestNotes />} />
          <Route path="/subject-files" element={<SubjectFiles />} />
          <Route path="/files" element={<FilesPage />} />
          <Route path="/uploadform" element={<UploadForm />} />
          <Route path="/downloading" element={<Downloading />} />
        </Route>

        {/* Auth Layout (no Navbar/Footer) */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
