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

## File Structure
The structured as follows:

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
