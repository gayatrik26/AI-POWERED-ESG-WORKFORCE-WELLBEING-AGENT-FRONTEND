import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../assets/esg-bg-2.png"; 
import backgroundImage2 from "../assets/esg-bg-4.jpg";
import backgroundImage3 from "../assets/esg-bg-3.avif"; 
import backgroundImage4 from "../assets/esg-bg.jpeg"; 
import backgroundImage5 from "../assets/esg-bg-5.avif"; 
import backgroundImage6 from "../assets/esg-bg-6.avif"; 

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black",
        }}
      >
        <motion.div
          className="hero-content glass-effect"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="hero-title">Elevate Your Workforce’s Wellbeing</h1>
          <p className="hero-description">
            Use data-driven insights to reduce burnout, boost productivity, and
            create a thriving team.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/dashboard" className="cta-button">
              Explore Dashboard
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Our Platform</h2>
        <p>
          Our AI-powered HR dashboard helps organizations monitor employee
          wellbeing, predict burnout risks, and enhance productivity. We
          integrate real-time data analytics with smart recommendations to
          foster a healthier work environment.
        </p>
      </section>

      {/* Features Section */}
      <section
        className="features"
        style={{
          backgroundImage: `url(${backgroundImage6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black",
        }}
      >
        <h2 className="features-text">Key Features</h2>
        <div className="features-grid">
          {[
            {
              title: "AI-Powered Recommendations",
              text: "Get personalized wellness recommendations powered by AI and machine learning.",
            },
            {
              title: "Real-Time Monitoring",
              text: "Stay updated with live monitoring of employee health, workload, and sentiment.",
            },
            {
              title: "Predictive Analytics",
              text: "Identify potential burnout risks before they impact performance.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card glass-effect"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="cta-section"
      >
        <h2>Take the First Step Towards a Healthier Workplace</h2>
        <p>
          Join the companies that are improving employee wellbeing with
          AI-driven insights.
        </p>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Link to="/dashboard" className="cta-button">
            Get Started Now
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 HR Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

// style={{
//   backgroundImage: `url(${backgroundImage4})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   color: "black",
// }}
