// import React, { useState } from "react";
// import { storage, db } from "../firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";
// import "../styles/uploadForm.css";
// import upload from "../assets/file-upload.png";

// function UploadForm() {
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [subject, setSubject] = useState("");
//   const [file, setFile] = useState(null);
//   const [status, setStatus] = useState("");

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file || !branch || !semester || !subject) {
//       setStatus("⚠️ Please fill all fields and select a file.");
//       return;
//     }

//     try {
//       setStatus("⏳ Uploading...");

//       // Upload file to Firebase Storage
//       const storageRef = ref(storage, `uploads/${file.name}`);
//       await uploadBytes(storageRef, file);

//       // Get file URL
//       const fileURL = await getDownloadURL(storageRef);

//       // Save metadata in Firestore
//       await addDoc(collection(db, "files"), {
//         branch,
//         semester,
//         subject,
//         name: file.name,
//         size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
//         url: fileURL,
//         status: "pending",
//         uploadedAt: new Date(),
//       });

//       setStatus(
//         "✅ File uploaded successfully and waiting for Admin approval!"
//       );
//       setBranch("");
//       setSemester("");
//       setSubject("");
//       setFile(null);
//     } catch (error) {
//       console.error("Upload failed:", error);
//       setStatus("❌ Upload failed, try again.");
//     }
//   };

//   return (
//     <div className="upload-form">
//       <h2>📤 Upload Study Material</h2>
//       <form onSubmit={handleUpload} className="upload-form-container">
//         <div className="DataInputDiv">
//           <label htmlFor="branch">Branch:</label>
//           <select
//             className="input"
//             type="text"
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}>
//             <option value="">-- Select Branch --</option>
//             <option value="CSE">CSE</option>
//             <option value="ECE">ECE</option>
//             <option value="EEE">EEE</option>
//             <option value="MECH">MECH</option>
//             <option value="CIVIL">CIVIL</option>
//           </select>
//         </div>

//         <div className="DataInputDiv">
//           <label htmlFor="semester">Semester:</label>
//           <select
//             className="input"
//             type="text"
//             value={semester}
//             onChange={(e) => setSemester(e.target.value)}>
//             <option value="">-- Select Semester --</option>
//             <option value="1-1">1-1</option>
//             <option value="1-2">1-2</option>
//             <option value="2-1">2-1</option>
//             <option value="2-2">2-2</option>
//             <option value="3-1">3-1</option>
//             <option value="3-2">3-2</option>
//             <option value="4-1">4-1</option>
//           </select>
//         </div>

//         <div className="DataInputDiv">
//           <label htmlFor="subject">Subject:</label>
//           <input
//             className="input"
//             type="text"
//             placeholder="Subject (e.g., Artificial Intelligence)"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//         </div>

//         <div className="upload-btn-wrapper">
//           <button className="btn" type="button">
//             <img src={upload} alt="" className="uploadImg" />
//             Upload File
//           </button>
//           <input
//             type="file"
//             onChange={(e) => setFile(e.target.files[0])}
//             name="myfile"
//           />
//         </div>

//         {file && <p className="file-name">📄 {file.name}</p>}

//         <button type="submit" className="UploadButton">
//           <span>Upload</span>
//         </button>
//       </form>
//       <p className="status-msg">{status}</p>
//     </div>
//   );
// }

// export default UploadForm;
