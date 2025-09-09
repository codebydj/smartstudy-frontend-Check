// File: src/pages/FilesPage.js
import React from "react";
import { useLocation } from "react-router-dom";
import filesData from "../data/FilesData";
import BackButton from "../components/BackButton";
import LocationPath from "../components/LocationPath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/FilesPage.css";

function FilesPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const branch = queryParams.get("branch");
  const semester = queryParams.get("semester");
  const subject = queryParams.get("subject");

  const files = filesData[branch]?.[semester]?.[subject] || [];

  // ✅ Utility function: Convert Google Drive "view" link → direct download
  const getDownloadLink = (url) => {
    if (!url) return "#";

    // Matches "file/d/FILE_ID/view"
    const match = url.match(/\/d\/(.*?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }

    return url; // fallback if it's already a direct link
  };

  return (
    <div>
      <BackButton />
      <LocationPath
        paths={[
          { name: "Home", link: "/" },
          { name: branch },
          { name: semester },
          {
            name: "Subjects",
            link: `/subject-files?branch=${branch}&semester=${semester}`,
          },
          { name: subject },
          { name: `Files (${files.length})` },
        ]}
      />

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
                  <span>
                    <FontAwesomeIcon
                      icon={faDatabase}
                      style={{ color: "#717182", marginRight: "5px" }}
                    />
                    {file.size}
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faFile}
                      style={{ color: "#717182", marginRight: "5px" }}
                    />
                    {file.pages} Pages
                  </span>
                </div>
                <div className="file-actions">
                  {/* ✅ View button (opens in new tab) */}
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn">
                    View
                  </a>

                  {/* ✅ Download button (Google Drive direct link) */}
                  <a
                    href={getDownloadLink(file.url)}
                    className="download-btn"
                    download>
                    Download
                  </a>
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
