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
import "./App.css"

function App() {
  return (
    <Router className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest-notes" element={<LatestNotes />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/subject-files" element={<SubjectFiles />} />
        <Route path="/files" element={<FilesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
