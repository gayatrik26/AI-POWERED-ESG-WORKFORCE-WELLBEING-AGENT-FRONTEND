import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import "../styles/Dashboard.css";
import { color, motion } from "framer-motion";
import { FaSortAlphaDown } from "react-icons/fa";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/employees");
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await response.json();
        setEmployees(data.employees);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchWorkabilityScore = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/get_workability_score"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch workability score");
        }
        const data = await response.json();
        // setWorkabilityScore(data["Workability Score"].toFixed(4) * 100);
        // setWorkabilityDate(data["Date"]);
      } catch (error) {
        console.error("Error fetching workability score:", error);
      }
    };

    fetchData();
    fetchWorkabilityScore();
  }, []);

  // Sort employees by burnout score
  const sortEmployees = (ascending) => {
    const sorted = [...employees].sort((a, b) =>
      ascending
        ? a.burnout_score - b.burnout_score
        : b.burnout_score - a.burnout_score
    );
    setEmployees(sorted);
  };

  const toggleSortOrder = () => {
    const newOrder = !isAscending;
    setIsAscending(newOrder);
    sortEmployees(newOrder);
  };

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading employees...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <motion.h2
          className="dashboard-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Employee Dashboard
        </motion.h2>

        <div className="sort-container">
          <button className="sort-button" onClick={toggleSortOrder}>
            {/* Sort by Burnout Score ({isAscending ? "Ascending" : "Descending"}) */}
            <FaSortAlphaDown />
          </button>
        </div>
      </div>

      <motion.div
        className="employee-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      >
        {employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Dashboard;