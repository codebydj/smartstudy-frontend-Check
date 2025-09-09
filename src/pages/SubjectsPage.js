import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import subjectsData from "../data/SubjectsData";
import filesData from "../data/FilesData"; // ✅ Import filesData
import BackButton from "../components/BackButton";
import LocationPath from "../components/LocationPath";
import subjectIcon from "../assets/bookmark-icon.png";
import "../styles/SubjectsPage.css";

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
      <LocationPath
        paths={[
          { name: "Home", link: "/" },
          { name: branch },
          { name: semester },
          { name: `Subject's  (${subjects.length})` },
        ]}
      />

      <div className="subjects-page">
        <h2 className="subjects-page-title">
          Subjects for {branch} - Semester {semester}
        </h2>
        <div className="subjects-container">
          {subjects.length > 0 ? (
            subjects.map((subject, index) => {
              const fileCount =
                filesData[branch]?.[semester]?.[subject.name]?.length || 0;

              return (
                <div className="subject-card" key={index}>
                  <img
                    src={subjectIcon}
                    alt={subject.name}
                    className="subject-icon"
                  />
                  <h3 className="subject-name">{subject.name}</h3>
                  <p className="subject-files">Total Files: {fileCount}</p>
                  <button
                    className="view-files-btn"
                    onClick={() => handleViewFiles(subject.name)}>
                    View Files
                  </button>
                </div>
              );
            })
          ) : (
            <p className="no-subjects">
              No subjects found for this selection. Will be updated soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectsPage;
