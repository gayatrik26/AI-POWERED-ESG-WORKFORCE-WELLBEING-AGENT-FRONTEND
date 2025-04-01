import React, { useState } from "react";
import "../styles/EmployeeCard.css";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import EmployeeModal from "./EmployeeModal";

const EmployeeCard = ({ employee }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract a random detected emotion image if available
  const emotionImages = Object.keys(employee.image_detected_emotions || {});
  const randomImage =
    emotionImages.length > 0
      ? emotionImages[Math.floor(Math.random() * emotionImages.length)]
      : null;

  const imageUrl = randomImage
    ? `http://127.0.0.1:8000/api/images/${employee.id}/${randomImage}`
    : "https://via.placeholder.com/100"; // Fallback image

  // Render satisfaction stars
  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const halfStar = score % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => <FaStar key={i} className="star full" />)}
        {halfStar && <FaStarHalfAlt className="star half" />}
        {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} className="star empty" />)}
      </div>
    );
  };

  // Burnout score color gradient (green to red)
  const burnoutColor = `hsl(${(1 - employee.burnout_score) * 150}, 100%, 50%)`;

  return (
    <>
      <motion.div 
        className="employee-card glass-effect" 
        layout 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.3 }}
      >
        {/* Employee Image Before Modal */}
        <div className="profile-section">
          <img className="employee-image" src={imageUrl} alt={employee.name} />
          <div className="info">
            <h3 className="employee-name">{employee.name}</h3>
            <p className="employee-id">ID: {employee.id}</p>
          </div>
        </div>

        {/* Working Hours */}
        <p className="working-hours">
          <MdWorkOutline /> <strong>Working Hours: </strong> {employee.working_hours} hrs / week
        </p>

        {/* Burnout Score Before Modal */}
        <div className="burnout-score">
          <strong>Burnout Score: </strong> 
          <span className="burnout-box" style={{ color: burnoutColor }}>
            {employee.burnout_score.toFixed(2)}
          </span>
        </div>

        {/* Employee Satisfaction */}
        <div className="satisfaction">
          <strong>Employee Satisfaction: {employee.employee_satisfaction_score} / 5</strong>  {renderStars(employee.employee_satisfaction_score)}
        </div>

        <button className="view-details" onClick={() => setIsModalOpen(true)}>
          View More
        </button>
      </motion.div>

      {/* Modal Opens When Clicked */}
      {isModalOpen && <EmployeeModal employee={employee} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default EmployeeCard;

