// File: src/pages/SubjectsPage.js

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import subjectsData from "../data/SubjectsData";
import BackButton from "../components/BackButton";
import "../styles/SubjectsPage.css"; // Import CSS

function SubjectsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const branch = queryParams.get("branch");
  const semester = queryParams.get("semester");

  const subjects = subjectsData[branch]?.[semester] || [];

  const handleViewFiles = (subjectName) => {
    navigate(
      `/Files?branch=${branch}&semester=${semester}&subject=${subjectName}`
    );
  };

  return (
    <div>
      <BackButton />
        <div className="subjects-page">
          <h2 className="subjects-page-title">
          Subjects for {branch} - Semester {semester}
        </h2>
          <div className="subjects-container">
            {subjects.length > 0 ? (
              subjects.map((subject, index) => (
              <div className="subject-card" key={index}>
                <img
                  src={subject.icon}
                  alt={subject.name}
                  className="subject-icon"
                />
                <h3 className="subject-name">{subject.name}</h3>
                <p className="subject-files">
                  Total Files: {subject.totalFiles}
                </p>
                <button
                  className="view-files-btn"
                  onClick={() => handleViewFiles(subject.name)}>
                  View Files
                </button>
              </div>
            ))
          ) : (
            <p className="no-subjects">No subjects found for this selection.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectsPage;
