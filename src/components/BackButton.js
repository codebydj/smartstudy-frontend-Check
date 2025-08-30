import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css";

export default function BackButton() {
  const navigate = useNavigate(); // inside functional component
  return (
    <div className="BackButton">
      <button onClick={() => navigate(-1)} className="back-btn">
      ← Back
    </button>
    </div>
  );
}