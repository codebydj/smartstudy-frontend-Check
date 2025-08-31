// File: src/components/FileCard.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DataCard.css";
import library from "../assets/library-icon.png";

export default function DataCard() {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!branch || !semester) {
      alert("Please select both branch and semester");
      return;
    }
    navigate(`/subject-files?branch=${branch}&semester=${semester}`);
  };

  return (
    <div className="FileCard">
      {/* Header */}
      <div className="project-card-header">
        <img src={library} alt="library" className="PCLogo" />
        <div className="PCHeader">Find Your Study Materials</div>
        <div className="PCContent">
          Select your branch and semester to access relevant notes and resources
        </div>
      </div>

      {/* Branch and Semester Selection */}
      <div className="project-card-details">
        <div className="Branch-data">
          <span>Select Branch</span>
          <select
            name="branch"
            id="branch"
            className="branch my-select"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}>
            <option value="" disabled>
              Select a branch
            </option>
            <option value="CSE">Computer Science Engineering (CSE)</option>

            {/* <option value="CIV">Civil Engineering (CIV)</option>
            <option value="CSEAI">Computer Science Engineering (CSE-AI)</option>
            <option value="ECE">
              Electronics & Communication Engineering (ECE)
            </option>
            <option value="ME">Mechanical Engineering (ME)</option> */}
          </select>
        </div>

        <div className="semester-data">
          <span>Select Semester</span>
          <select
            name="semester"
            id="semester"
            className="semester my-select"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}>
            <option value="" disabled>
              Select a semester
            </option>
            {/* <option value="1-1">Year 1 - Sem 1</option>
            <option value="1-2">Year 1 - Sem 2</option>
            <option value="2-1">Year 2 - Sem 1</option>
            <option value="2-2">Year 2 - Sem 2</option> */}
            <option value="3-1">Year 3 - Sem 1</option>
            {/* <option value="3-2">Year 3 - Sem 2</option>
            <option value="4-1">Year 4 - Sem 1</option> */}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="project-card-submit-button">
        <button className="getSubButton" onClick={handleSubmit}>
          Get Subjects
        </button>
      </div>
    </div>
  );
}
