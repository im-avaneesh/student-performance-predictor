Sprint Goal

Deliver an ML-powered student performance prediction system with analytics for faculty, deployed and demo-ready.

🎯 Completed Deliverables
1. Machine Learning

Dataset creation (synthetic academic scores)

Feature engineering (attendance, study hours, assignments, activities)

Random Forest Regressor trained (R² ≈ 94%)

Confidence scoring system based on:

Tree variance

Score strength

Weighted blending

2. Backend (Flask API)

/predict → Single student prediction

/predict-csv → Batch CSV predictions

CORS enabled

Model saved as model.pkl

Fully deployed on Render

3. Frontend (UI/UX)

Responsive dashboard UI

Single predictor page

Batch predictor with table + graph

Faculty dashboard:

Risk distribution pie chart

Pass/Fail bar chart

Student-wise table

Fully deployed on Netlify

4. Testing & Fixes

Mobile responsiveness adjustments

CSV upload validation

Prediction accuracy checks

Deployment issues fixed (Python version mismatch, pandas install, etc.)

📈 Demo Acceptance Criteria

Input fields → Working

Predict button → Returns real-time ML output

CSV upload → Generates complete table

Faculty dashboard → Loads charts + metrics

End-to-end latency low

Works on both laptop & mobile
➡️ All criteria met.

📌 What Was Not Completed (Optional Features)

Student name field automation

Login system (student/faculty)

Database for storing predictions

Trend analysis charts

⭐ Final Notes

This sprint successfully delivered a fully functional ML dashboard with clean UI, backend, batch analytics, and deployment — fulfilling hackathon expectations.