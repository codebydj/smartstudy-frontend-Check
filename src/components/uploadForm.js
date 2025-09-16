import { useState } from "react";
import "../styles/uploadForm.css";

function UploadForm() {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [notesName, setNotesName] = useState("");
  const [link, setLink] = useState("");
  const [size, setSize] = useState("");
  const [pages, setPages] = useState("");

  // Function to add a new file to localStorage
  const addFile = (file) => {
    const existingFiles = JSON.parse(localStorage.getItem("filesData")) || {};

    if (!existingFiles[file.branch]) {
      existingFiles[file.branch] = {};
    }
    if (!existingFiles[file.branch][file.semester]) {
      existingFiles[file.branch][file.semester] = {};
    }
    if (!existingFiles[file.branch][file.semester][file.subject]) {
      existingFiles[file.branch][file.semester][file.subject] = [];
    }

    existingFiles[file.branch][file.semester][file.subject].push({
      name: file.notesName,
      url: file.link,
      size: file.size,
      pages: file.pages,
      date: file.date,
    });

    localStorage.setItem("filesData", JSON.stringify(existingFiles));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !branch ||
      !semester ||
      !subject ||
      !notesName ||
      !link ||
      !size ||
      !pages
    ) {
      alert("⚠️ Please fill all fields");
      return;
    }

    const newFile = {
      branch,
      semester,
      subject,
      notesName,
      link,
      size,
      pages,
      date: new Date().toLocaleDateString(),
    };
    addFile(newFile);

    alert("✅ File added successfully!");

    // reset form
    setBranch("");
    setSemester("");
    setSubject("");
    setNotesName("");
    setLink("");
    setSize("");
    setPages("");
  };

  return (
    <div className="upload-form">
      <h2>📤 Upload Study Material</h2>
      <form onSubmit={handleSubmit} className="upload-form-container">
        <div className="DataInputDiv">
          <label>Branch:</label>
          <select
            className="input"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}>
            <option value="">-- Select Branch --</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>
        </div>

        <div className="DataInputDiv">
          <label>Semester:</label>
          <select
            className="input"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}>
            <option value="">-- Select Semester --</option>
            <option value="1-1">1-1</option>
            <option value="1-2">1-2</option>
            <option value="2-1">2-1</option>
            <option value="2-2">2-2</option>
            <option value="3-1">3-1</option>
            <option value="3-2">3-2</option>
            <option value="4-1">4-1</option>
          </select>
        </div>

        <div className="DataInputDiv">
          <label>Subject:</label>
          <input
            className="input"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="DataInputDiv">
          <label>Notes Name:</label>
          <input
            className="input"
            type="text"
            placeholder="Enter notes name"
            value={notesName}
            onChange={(e) => setNotesName(e.target.value)}
          />
        </div>

        <div className="DataInputDiv">
          <label>File Link:</label>
          <input
            className="input"
            type="url"
            placeholder="Paste Google Drive link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className="DataInputDiv">
          <label>Size:</label>
          <input
            className="input"
            type="text"
            placeholder="e.g., 2 MB"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

        <div className="DataInputDiv">
          <label>No. of Pages:</label>
          <input
            className="input"
            type="number"
            placeholder="e.g., 25"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>

        <button type="submit" className="UploadButton">
          <span>Upload</span>
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
