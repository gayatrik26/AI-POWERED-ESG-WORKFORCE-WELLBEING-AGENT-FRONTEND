export const getAllEmployees = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/employees"); 
    const data = await response.json();
    return data; 
  } catch (err) {
    console.error("Error fetching employees:", err);
    return { employees: [] };
  }
};

// services/api.js

export const fetchBurnoutData = async (empId) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/burnout/${empId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${empId}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching burnout data:", error);
    throw error;
  }
};