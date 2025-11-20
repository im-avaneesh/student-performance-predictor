# 🎓 Student Performance Predictor (ML + Dashboard UI)

A full-stack machine learning application that predicts **student performance**, **risk level**, and **model confidence** using key academic behavior metrics.

It includes:

* ✨ Single-student prediction
* 📥 CSV batch prediction
* 📊 Faculty analytics dashboard
* 💠 Clean, premium UI optimized for hackathons

---

## 📌 Live Demo

🌐 **Frontend:**
[https://student-performance-predictorr.netlify.app/index.html](https://student-performance-predictorr.netlify.app/index.html)

🔗 **Backend API:**
[https://student-performance-predictor-1-kais.onrender.com](https://student-performance-predictor-1-kais.onrender.com)

---

## 🧠 Project Overview

This system predicts a student's final performance using:

* 📘 **Attendance (%)**
* ⏳ **Study Hours per Day**
* 📝 **Internal Marks**
* 📚 **Assignments Submitted**
* 🎯 **Co-curricular Activities**

The ML model outputs:

* **Predicted Score (0–100)**
* **Pass / Fail**
* **Risk Level** (Low / Medium / High)
* **ML Confidence (%)**

The UI is designed with a **premium dashboard layout**, fully responsive and ideal for demo presentations.

---

## 🎯 Features

### 🔹 1. Single Student Prediction

* Enter 5 input parameters
* Real-time ML prediction
* Confidence bar visualization
* Risk level badge
* Comparison score chart

---

### 🔹 2. Batch Prediction (CSV Upload)

* Upload a CSV of multiple students
* Automatic predictions for each row
* Shows score, result, risk, confidence
* Auto-generated bar chart
* Fully responsive

---

### 🔹 3. Machine Learning Model

* Trained on 300+ synthetic records
* Algorithm: **Random Forest Regressor**
* Achieved **94% R² Score**

Confidence is calculated using:

* Decision-tree variance
* Score strength
* Stability weighting + smoothing

This avoids unstable 10–30% confidence values and produces clean, meaningful outputs.

---

## 🏗️ Tech Stack

### 🖥 Frontend

* HTML
* CSS
* JavaScript
* Chart.js
* Netlify (deployment)

### ⚙️ Backend

* Flask
* Flask-CORS
* scikit-learn
* numpy
* pandas
* Render (deployment)

---

## 📂 Project Structure

```
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
```

---

## ⚙️ How to Run Locally

### 1️⃣ Install backend dependencies

```
cd backend
pip install -r requirements.txt
```

### 2️⃣ Run backend

```
python app.py
```

Backend starts at:
👉 [http://127.0.0.1:5000](http://127.0.0.1:5000)

### 3️⃣ Open frontend

Open `index.html` directly in the browser.

---

## 🌐 Deployment Instructions

### 🔹 Backend (Render)

1. Connect GitHub repo
2. Set **Root Directory:** `/backend`
3. **Build Command:**

```
pip install -r requirements.txt
```

4. **Start Command:**

```
gunicorn app:app
```

### 🔹 Frontend (Netlify)

1. Upload the `/frontend` folder
2. Update API base URL in:

   * `script.js`
   * `csv.js`

```
const BASE = "https://your-render-backend-url";
```

---

## 📊 ML Model Details

### 📌 Algorithm

**RandomForestRegressor (500 trees)**
Great for mixed numerical features and nonlinear patterns.

### 📌 Confidence Calculation

Based on:

✔ Tree Variance
✔ Score Strength
✔ Stability Smoothing

Produces clean, realistic confidence values (70–95%).

---

## 📝 Sample CSV Format

```
Attendance,StudyHours,InternalMarks,Assignments,Activities
85,3.5,40,5,3
60,2,22,2,1
...
```

---

## 📘 API Endpoints

### 🔹 POST `/predict`

**Input**

```json
{
  "Attendance": 75,
  "StudyHours": 3,
  "InternalMarks": 35,
  "Assignments": 5,
  "Activities": 4
}
```

**Response**

```json
{
  "PredictedScore": 66.76,
  "Result": "Pass",
  "Risk": "Medium Risk",
  "Confidence": 74.84
}
```

---

### 🔹 POST `/predict-csv`

Upload CSV file → returns prediction for each row.

---

## 🚀 Future Improvements

* Student & Faculty Login System
* Save prediction history in database
* Student-wise performance trends
* Real dataset integration
* Explainable AI (feature importance graph)

---
