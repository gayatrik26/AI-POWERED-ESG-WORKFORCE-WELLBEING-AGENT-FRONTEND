# ESG Workforce Wellbeing Agent

## Overview
The **ESG Workforce Wellbeing Agent** is an AI-powered system designed to monitor employee wellbeing through multimodal data analysis. It integrates **computer vision, wearable sensors, environmental data, behavioral patterns, and sentiment analysis** to detect signs of burnout and suggest personalized wellness programs.

## Features
- **Burnout Detection**: Uses meeting overload, sentiment analysis, and behavioral data.
- **Emotion & Posture Analysis**: Facial expression recognition and slouch detection.
- **Wearable Sensor Integration**: Monitors heart rate, skin conductance, and stress levels.
- **Environmental Analysis**: Tracks noise levels, temperature, and office conditions.
- **Keystroke & Mouse Interaction Analysis**: Detects stress patterns via typing and mouse movements.
- **LLM-based Wellness Suggestions**: Recommends personalized wellness programs.

---

## Backend Architecture
The backend is implemented using **FastAPI** and **Python**. It consists of the following core modules:

### 📂 **File Structure**

```plaintext
backend/
│── api/
│   ├── audio.py
│   ├── burnout.py
│   ├── employees.py
│   ├── environmental.py
│   ├── get_audio.py
│   ├── get_images.py
│   ├── keyboard.py
│   ├── productivity.py
│   ├── wellness.py
│── services/
│   ├── audio_analysis.py
│   ├── behavioural_analysis.py
│   ├── burnout_calculator.py
│   ├── cv_emotion.py
│   ├── environmental_analysis.py
│   ├── llm.py
│   ├── productivity_analysis.py
│   ├── sentiment_analysis.py
│── data_pipeline/
│── model/
│── main.py
│── .env

```
## Frontend Architecture
The frontend is built with **React** , providing an interactive **HR dashboard**.

### 📂 **File Structure**
```plaintext

frontend/
│── node_modules/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── EmployeeCard.jsx
│   │   ├── EmployeeModal.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tooltip.jsx
│   ├── pages/
│   │   ├── Analysis.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   ├── services/
│   │   ├── api.js
│   ├── styles/
│   │   ├── Analysis.css
│   │   ├── Dashboard.css
│   │   ├── EmployeeCard.css
│   │   ├── EmployeeModal.css
│   │   ├── Home.css
│   │   ├── Navbar.css
│   │   ├── Tooltip.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│── .gitignore
│── eslint.config.js


```


### 🔹 **Key UI Components**
- **Dashboard**: Displays overall workforce health.
- **Analysis Page**: Shows burnout trends & heatmaps.
- **Employee Modal**: Displays individual employee well-being insights.

---

## Installation
### 📌 **Backend Setup**
```sh
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
### **Frontend Setup**
```sh
cd frontend
npm install
npm run dev
```

---

## AI Models & Data Sources
| Feature | Model / Dataset |
|---------|----------------|
| **Audio/Voice Analysis** | CNN + RNN Model |
| **Microexpressions** | EfficientNetB0 (fine-tuned) |
| **Body Posture Detection** | MediaPipe / OpenPose |
| **Environmental Data** | Synthetic Data |
| **Keyboard & Mouse Movement Analysis** | Online Dataset |
| **Productivity Data** | Kaggle Dataset |
| **Sensory & Physiological Data** | Kaggle Dataset |
| **Sentiments (Emails & HR Feedback)** | RoBERTa |

---

## API Endpoints

### 🏢 **Employee Data**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/employees` | Fetch all employee data |

### 🔥 **Burnout & Well-being**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/burnout/{employee_id}` | Get Burnout Score |
| **GET** | `/api/wellness/{employee_id}` | Get Wellness Program |

### 📈 **Productivity & Workability**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/get_productivity_score` | Get Productivity Score |
| **GET** | `/api/get_workability_score` | Get Workability Score |

### 🖼 **Employee Images**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/images/{employee_id}/{image_name}` | Get Employee Image |

### 🎤 **Audio Analysis**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/predict-emotion/{employee_id}` | Predict Emotion from Audio |
| **GET** | `/api/audio/{employee_id}/{audio_name}` | Get Employee Audio |

### ⌨️ **Keyboard & Mouse Behavior**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/get_dominant_keyboard_emotion` | Get Keyboard-Based Emotion Score |

### 🌿 **Environmental Analysis**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/get_workability_score` | Get Workability Score |


---

## 💡 Next Steps
- Add **Federated Learning** for privacy-preserving AI  
- Expand **multimodal fusion model** for better predictions  
- Improve **anomaly detection** for physiological data  

---

## 📊 Execution Results
### Latest Run Summary
- **Date:** 2025-04-01  
- **Total Employees Processed:** 12  
- **Burnout Score Calculation Time:** 1.2s per employee  
- **Emotion Recognition Accuracy:** 78% (EfficientNetB0)  
- **Emotion Recognition Accuracy:** 76% (CNN + RNN)

---

## 🖥️ Execution Logs & Screenshots  
- **[Screenshot: API Endpoints Execution](./screenshots/api_execution.png)**  
- **[Screenshot: Burnout Heatmap](./screenshots/burnout_heatmap.png)**  
- **[Execution Log](./logs/execution_log_2025-04-01.txt)**  

---

## 📂 Output Files
| File | Description |
|------|------------|
| `burnout_scores.csv` | Burnout scores of all employees |
| `sentiment_analysis.json` | Sentiment scores from emails and HR feedback |
| `keystroke_emotion_results.csv` | Predicted emotions from keyboard behavior |

---

## 🔬 Edge Case Testing
### **1️⃣ Extreme Burnout Cases**
- Simulated employees with **back-to-back meetings for 10+ hours**  
- Result: **Burnout score = 0.98 (High Risk)**  

### **2️⃣ Audio Emotion Edge Cases**
- Tested **whispered vs. shouted speech**  
- Model misclassified **low-energy speech** as negative sentiment → Adjustment required  

---

## 🔥 Future Improvements
- Improve real-time stress detection accuracy with more training data  
- Optimize **API response times** for large employee datasets  
- Integrate **real-time alerts for high burnout risks**  

---


✉ **For questions, contact:** `gayatrik22803@gmail.com`
