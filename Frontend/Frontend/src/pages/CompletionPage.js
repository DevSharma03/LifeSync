import axios from "axios";
import "../styles/CompletionPage.css";
import { useNavigate } from "react-router-dom";

export default function CompletionPage({ answers }) {
  const navigate = useNavigate();

  const submitProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/lifesync/infer-profile",
        answers,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("LifeSync profile generated successfully 🎉");
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Profile generation failed");
    }
  };

  return (
    <div className="completion-container">
      <div className="completion-card">
        <h1>🎯 Assessment Completed</h1>
        <p>Your responses are being analyzed to build your LifeSync profile.</p>

        <button onClick={submitProfile}>Generate My LifeSync Profile 🚀</button>
      </div>
    </div>
  );
}
