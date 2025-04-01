import React from "react";
import { motion } from "framer-motion";
import { FaRegSmile, FaRegFrown, FaRegSadCry } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import "../styles/EmployeeModal.css";

const EmployeeModal = ({ employee, onClose }) => {
  if (!employee) return null;

  const {
    name,
    burnout_score,
    stress_score,
    normalized_productivity_score,
    overtime_hours,
    email_sentiment_label,
    feedback_sentiment_label,
    wellness_recommendation,
    hr_feedback,
    employee_satisfaction_score,
    audio_analysis_emotion,
    keyboard_emotion,
    emails,
    image_detected_emotions,
  } = employee;

  const sentimentIcons = {
    positive: <FaRegSmile color="#27ae60" />,
    neutral: <FaRegFrown color="#f39c12" />,
    negative: <FaRegSadCry color="#e74c3c" />,
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2 style={{ marginBottom: "20px" }}>{name}'s Details</h2>

        <div className="modal-metrics">
          <div>
            <p>
              <strong>Burnout Score : </strong> <div style={{color: "#2ecc71", marginLeft:"5px"}}> {burnout_score.toFixed(2)}</div>
            </p>
            <p>
              <strong>Stress Score : </strong> <div style={{color: "#2ecc71" , marginLeft:"5px"}}>{stress_score.toFixed(2)}</div>
            </p>
          </div>
          <div>
            <p>
              <strong>Productivity Score : </strong>{" "}
              <div style={{color: "#2ecc71" , marginLeft:"5px"}}>{normalized_productivity_score.toFixed(2)}</div>
            </p>
            <p>
              <MdOutlineAccessTime /> <strong style={{marginLeft: "6px"}}>Overtime : </strong>{" "}
              <div style={{color: "#2ecc71" , marginLeft:"5px"}}>{overtime_hours} hrs</div>
            </p>
            <p>
              <GiBrain /> <strong style={{marginLeft: "6px"}}>Employee Satisfaction : </strong>{" "}
              <div style={{color: "#2ecc71" , marginLeft:"5px"}}>{employee_satisfaction_score} / 5</div>
            </p>
          </div>
        </div>

        <div className="modal-section">
          <h4>Sentiments</h4>
          <p>
            <strong>Email Sentiment : </strong>{" "}
            {sentimentIcons[email_sentiment_label] || email_sentiment_label}
          </p>
          <p>
            <strong>Feedback Sentiment : </strong>{" "}
            {sentimentIcons[feedback_sentiment_label] ||
              feedback_sentiment_label}
          </p>
        </div>

        <div className="modal-section">
          <h4>Emotion Analysis</h4>
          <p>
            <strong>Audio Emotion : </strong> {audio_analysis_emotion}
          </p>
          <p>
            <strong>Keyboard Emotion : </strong> {keyboard_emotion}
          </p>
          <p>
            <strong>Image Analysed Emotion : Neutral</strong> 
          </p>
        </div>

        <div className="modal-section">
          <h4>HR Feedback</h4>
          <p>{hr_feedback}</p>
        </div>

        <div className="modal-section">
          <h4>Wellness Tip</h4>
          <p>{wellness_recommendation}</p>
        </div>

        <div className="modal-section">
          <h4>Email History</h4>
          <ul>
            {emails.map((email, index) => (
              <li key={index}>"{email.body}"</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default EmployeeModal;
