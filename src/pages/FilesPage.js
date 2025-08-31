// File: src/pages/FilesPage.js

import React from "react";
import { useLocation } from "react-router-dom";
import { filesData } from "../data/FilesData";
import BackButton from "../components/BackButton";
import LocationPath from "../components/LocationPath";
import "../styles/FilesPage.css";

function FilesPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const branch = queryParams.get("branch");
  const semester = queryParams.get("semester");
  const subject = queryParams.get("subject");

  const files = filesData[branch]?.[semester]?.[subject] || [];

  return (
    <div>
      <BackButton />
     <LocationPath paths={[{ name: "Subjects", link: `/subjects?branch=${branch}&semester=${semester}` }, { name: subject }]} />


      <div className="files-page">
        <h2 className="files-page-title">
          Files for {subject} ({branch} - Semester {semester})
        </h2>

        <div className="files-container">
          {files.length > 0 ? (
            files.map((file, index) => (
              <div className="file-card" key={index}>
                <div className="file-name">{file.name}</div>
                <div className="file-details">
                  <span>Size: {file.size}</span>
                  <span>Pages: {file.pages}</span>
                </div>
                <div className="file-actions">
                  <button className="view-btn">View</button>
                  <button className="download-btn">Download</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-files">No files available for this subject.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilesPage;
