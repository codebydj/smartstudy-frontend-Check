import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LatestNotes from "./pages/LatestNotes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import SubjectFiles from "./pages/SubjectsPage";
import FilesPage from "./pages/FilesPage";
import Footer from "./components/Footer";
import Downloading from "./components/Downloading";
import UploadForm from "./components/uploadForm";
import AuthLayout from "./AuthLayout";

import "./App.css";

function App() {
  return (
    <Router className="app">
      {/* Navbar & Footer should not show on Auth pages → we handle that with layout */}
      <Routes>
        {/* Pages with Navbar + Footer */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/latest-notes"
          element={
            <>
              <Navbar />
              <LatestNotes />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/subject-files"
          element={
            <>
              <Navbar />
              <SubjectFiles />
              <Footer />
            </>
          }
        />
        <Route
          path="/files"
          element={
            <>
              <Navbar />
              <FilesPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/UploadForm"
          element={
            <>
              <Navbar />
              <UploadForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/downloading"
          element={
            <>
              <Navbar />
              <Downloading />
              <Footer />
            </>
          }
        />

        {/* Auth Pages (no Navbar/Footer) */}
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

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
