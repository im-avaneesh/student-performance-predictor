Student Performance Predictor (ML + Dashboard UI)

A full-stack machine learning application that predicts student performance, risk level, and model confidence using academic behavior metrics.
Includes single-student prediction, CSV batch prediction, and a premium dashboard UI.

📌 Live Demo

🌐 Frontend: https://student-performance-predictorr.netlify.app/index.html
🔗 Backend API: https://student-performance-predictor-1-kais.onrender.com


🧠 Project Overview

This system predicts a student's final performance using:

📘 Attendance (%)

⏳ Study Hours

📝 Internal Marks

📚 Assignments

🎯 Co-curricular Activities

The ML model outputs:

Predicted Score (0–100)

Pass / Fail

Risk Level (Low / Medium / High)

ML Confidence (%)

The frontend is designed as a premium dashboard, optimized for hackathons with clean UI, responsive layout, and intuitive visualization.

🎯 Features
🔹 1. Single Student Prediction

Enter the 5 academic parameters

Instant ML prediction

Beautiful confidence bar

Result + Risk Level badge

Score comparison chart

🔹 2. Batch Prediction (CSV Upload)

Upload a CSV of multiple students

Displays prediction table with:

Score

Pass/Fail

Risk level

Confidence

Auto-generated bar chart

🔹 3. High-Quality UI

Premium SaaS-style layout

Blue gradient theme

Responsive on desktop + mobile

Professional cards, shadows, graphs

🔹 4. ML Model

Trained on synthetic academic dataset

Algorithm: Random Forest Regressor

Achieved ~94% R² score

Confidence calculated using:

Tree variance

Score strength

Stability weighting

🏗️ Tech Stack
Frontend

HTML

CSS

JavaScript

Chart.js (for visualizations)

Netlify (hosting)

Backend

Flask

Flask-CORS

scikit-learn

pandas

numpy

Render (hosting)

📂 Project Structure
student-performance/
│
├── backend/
│   ├── app.py
│   ├── train_model.py
│   ├── model.pkl
│   ├── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── csv.html
│   ├── style.css
│   ├── script.js
│   ├── csv.js
│
└── README.md

⚙️ How to Run Locally
1️⃣ Install dependencies
cd backend
pip install -r requirements.txt

2️⃣ Start backend
python app.py


Backend runs at:
👉 http://127.0.0.1:5000

3️⃣ Open frontend

Open index.html in any browser.

🌐 Deployment
🔹 Backend (Render)

Connect GitHub repo

Root: /backend

Build: pip install -r requirements.txt

Start: gunicorn app:app

🔹 Frontend (Netlify)

Drag & drop /frontend folder

Update script.js & csv.js:

const BASE = "https://your-render-backend-url";

📊 Model Details
📌 ML Algorithm

RandomForestRegressor (500 trees)
Works best for mixed numeric features with non-linear patterns.

📌 Confidence Calculation

Confidence is generated using:

Tree Variance (lower variance → higher confidence)

Score Strength (higher score → more stable)

Blended weight system

Slight smoothing for UI interpretability

This prevents confusing 20–30% confidence values and ensures consistent ML dashboard behavior.

📝 Sample CSV Format

Your CSV must contain these exact columns:

Attendance,StudyHours,InternalMarks,Assignments,Activities
85,3.5,40,5,3
60,2,22,2,1
...

📘 API Endpoints
🔹 POST /predict

Input:

{
  "Attendance": 75,
  "StudyHours": 3,
  "InternalMarks": 35,
  "Assignments": 5,
  "Activities": 4
}


Response:

{
  "PredictedScore": 66.76,
  "Result": "Pass",
  "Risk": "Medium Risk",
  "Confidence": 74.84
}

🔹 POST /predict-csv

Upload a CSV file → returns predictions for all rows.

🚀 Future Improvements

User login dashboard

Result history storage

More features (CGPA, past attendance trends)

Faculty analytics mode


Explainable AI (feature contribution graph)
