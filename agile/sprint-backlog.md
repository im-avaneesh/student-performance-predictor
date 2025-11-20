# 📝 Sprint Backlog
**Project:** Student Performance Predictor (Full-Stack ML Dashboard)
**Sprint Duration:** 2 Days (Hackathon Sprint)
**Team Size:** 2–4 Members

---

## 🎯 Sprint Goal

Deliver a fully functional machine-learning–powered student performance prediction system with:

* Clean frontend UI (single predictor + batch CSV predictor)
* Backend Flask API with ML model
* Faculty dashboard with analytics & charts
* End-to-end deployment

---

## ✅ User Stories & Tasks

| User Story                                                             | Tasks                                                                                                   | Status       |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------ |
| **As a student, I want to input my details and get a predicted score** | • Build input UI<br>• Connect to backend `/predict` API<br>• Display score, risk, confidence            | ✔️ Completed |
| **As a student, I want to know my pass/fail status**                   | • Add ML logic for Pass/Fail<br>• Add risk classification                                               | ✔️ Completed |
| **As a faculty member, I want to upload a CSV file**                   | • Create CSV upload page<br>• Connect to `/predict-csv` API<br>• Show student-wise table                | ✔️ Completed |
| **As a faculty member, I want analytics**                              | • Generate charts (Risk distribution, Pass/Fail)<br>• Summarize total students, pass %, high-risk count | ✔️ Completed |
| **As a user, I want the app to work on desktop & mobile**              | • Responsive CSS<br>• Test cross-device layout                                                          | ✔️ Completed |
| **As a team, we want deployment working**                              | • Deploy backend on Render<br>• Deploy frontend on Netlify<br>• Fix CORS                                | ✔️ Completed |

---

## 🛠 Technical Tasks Breakdown

### 🧠 Machine Learning

* Load dataset & clean
* Train Random Forest model
* Evaluate using R² score
* Export `model.pkl`
* Integrate confidence estimation logic
  **Status:** ✔️ Done

### 🌐 Backend (Flask API)

* Build `/predict` endpoint
* Build `/predict-csv` endpoint
* Add validation/error handling
* Enable CORS
* Deploy to Render
  **Status:** ✔️ Done

### 🎨 Frontend

* Design student predictor UI
* Build CSV batch predictor page
* Build faculty dashboard with cards + charts
* Add responsive layout
* Connect to live backend
  **Status:** ✔️ Done

### 📊 Visualization

* Pie chart (pass vs fail)
* Donut/bar chart (risk levels)
* Dynamic student table
  **Status:** ✔️ Done

---

## 🧩 Out-of-Scope (Moved to Future Releases)

* Student name automated mapping
* Login system (faculty/student)
* Database for saving predictions
* Trend analysis charts (time-series)
  **Reason:** Not required for hackathon MVP

---

## 🚀 Expected Sprint Outcome

A fully functional, deployed ML application with:

* Real-time prediction
* Batch processing
* Faculty analytics
* Clean, modern UI
* Smooth deployment

