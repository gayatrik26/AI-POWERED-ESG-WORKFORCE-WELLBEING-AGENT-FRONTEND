import React, { useEffect, useState } from "react";
import { fetchBurnoutData } from "../services/api";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import "../styles/Analysis.css";
import { color, motion } from "framer-motion";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement
);

const Analysis = () => {
  const [burnoutData, setBurnoutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [workabilityScore, setWorkabilityScore] = useState(null);
  const [workabilityDate, setWorkabilityDate] = useState("");

  useEffect(() => {
    const fetchAllBurnoutData = async () => {
      const employeeIds = [
        "i10012",
        "i10013",
        "i10014",
        "i10015",
        "i10016",
        "i10017",
        "i10018",
        "i10019",
        "i10020",
      ];

      try {
        const data = await Promise.all(
          employeeIds.map(async (empId) => {
            const response = await fetchBurnoutData(empId);
            return response;
          })
        );

        const processedData = data.map((employee) => ({
          ...employee,
          sentiment_score:
            (employee.email_sentiment_score +
              employee.feedback_sentiment_score) /
            2,
        }));

        setBurnoutData(processedData);
      } catch (error) {
        console.error("Error fetching burnout data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBurnoutData();
    fetchWorkabilityScore();
  }, []);

  const fetchWorkabilityScore = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/get_workability_score"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch workability score");
      }
      const data = await response.json();
      setWorkabilityScore(data["Workability Score"].toFixed(4) * 100);
      setWorkabilityDate(data["Date"]);
    } catch (error) {
      console.error("Error fetching workability score:", error);
    }
  };


  if (loading) return <div className="loading">Loading Insights...</div>;

  // Calculate Averages
  const avgBurnout =
    burnoutData.reduce((sum, data) => sum + data.burnout_score, 0) /
    burnoutData.length;
  const highRiskCount = burnoutData.filter(
    (data) => data.burnout_score > 0.7
  ).length;
  const avgSentiment =
    burnoutData.reduce((sum, data) => sum + data.sentiment_score, 0) /
    burnoutData.length;

  // Bar Chart Data (Burnout vs Stress)
  const barChartData = {
    labels: burnoutData.map((data) => data.employee_id),
    datasets: [
      {
        label: "Burnout Score",
        data: burnoutData.map((d) => d.burnout_score),
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
      {
        label: "Stress Score",
        data: burnoutData.map((d) => d.stress_score),
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
    ],
  };

  // Pie Chart (Burnout Risk Distribution)
  const pieChartData = {
    labels: ["Low Risk", "Medium Risk", "High Risk"],
    datasets: [
      {
        data: [
          burnoutData.filter((d) => d.burnout_score <= 0.5).length,
          burnoutData.filter(
            (d) => d.burnout_score > 0.5 && d.burnout_score <= 0.7
          ).length,
          highRiskCount,
        ],
        backgroundColor: ["#2ecc71", "#f39c12", "#e74c3c"],
        hoverOffset: 12,
      },
    ],
  };

  // Line Chart (Burnout Trends)
  const lineChartData = {
    labels: burnoutData.map((d) => d.employee_id),
    datasets: [
      {
        label: "Burnout Over Time",
        data: burnoutData.map((d) => d.burnout_score),
        borderColor: "#f39c12",
        backgroundColor: "rgba(243, 156, 18, 0.2)",
        fill: true,
      },
    ],
  };

  // Doughnut Chart (Sentiment Distribution)
  const doughnutChartData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [
          burnoutData.filter((d) => d.sentiment_score > 0.5).length,
          burnoutData.filter(
            (d) => d.sentiment_score > 0 && d.sentiment_score <= 0.5
          ).length,
          burnoutData.filter((d) => d.sentiment_score < 0).length,
        ],
        backgroundColor: ["#2ecc71", "#f1c40f", "#e74c3c"],
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div className="dashboard-analysis">
      <h1>Employee Burnout Insights</h1>

      <div className="workability-score">
      <motion.div
        className="workability-score-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2>Analysis for {workabilityDate}</h2>
        <p>
          Environment Workability Score:{" "}
          <strong style={{ color: "#2ecc71" }}>
            {workabilityScore !== null ? workabilityScore.toFixed(2) : "N/A"} %
          </strong>
        </p>
      </motion.div>
      </div>

      {/* KPIs */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <p>Avg Burnout</p>
          <h2 style={{ color: "#2ecc71" }}>{avgBurnout.toFixed(2)}</h2>
        </div>
        <div className="kpi-card">
          <p>High Risk Employees</p>
          <h2 style={{ color: "#2ecc71" }}>{highRiskCount}</h2>
        </div>
        <div className="kpi-card">
          <p>Avg Sentiment</p>
          <h2 style={{ color: "#2ecc71" }}>{avgSentiment.toFixed(2)}</h2>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="chart-grid">
        <div className="chart-row-1">
          <div className="card">
            <h3>Burnout vs Stress Overview</h3>
            <Bar data={barChartData} 
            />
          </div>
          <div className="card">
            <h3>Burnout Risk Split</h3>
            <Pie data={pieChartData} />
          </div>
        </div>
        <div className="chart-row-2">
          <div className="card">
            <h3>Burnout Trend Over Time</h3>
            <Line data={lineChartData} />
          </div>
          <div className="card">
            <h3>Sentiment Distribution</h3>
            <Doughnut data={doughnutChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
