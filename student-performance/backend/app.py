from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import pickle

# Load trained model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

app = Flask(__name__)
CORS(app)

# Helper: Calculate pass/fail + risk + confidence -------------------
def analyze_output(score, tree_predictions):
    # Pass/Fail
    result = "Pass" if score >= 50 else "Fail"

    # Risk category
    if score >= 75:
        risk = "Low Risk"
    elif score >= 50:
        risk = "Medium Risk"
    else:
        risk = "High Risk"

    # Raw model variance
    std_dev = np.std(tree_predictions)

    # Convert variance to confidence (big variance = low confidence)
    var_conf = 100 / (1 + std_dev)

    # Score strength confidence
    score_conf = (score / 100) * 100

    # Blend both factors
    blend = (var_conf * 0.3) + (score_conf * 0.7)

    # Scale the blend into 70–95 (BEST RANGE)
    confidence = 70 + ((blend - 40) / (100 - 40)) * 25

    # Clamp final result
    confidence = round(min(95, max(70, confidence)), 2)

    return result, risk, confidence






# ------------------ SINGLE STUDENT PREDICTION --------------------
@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    inputs = np.array([
        data["Attendance"],
        data["StudyHours"],
        data["InternalMarks"],
        data["Assignments"],
        data["Activities"]
    ]).reshape(1, -1)

    # Predict score
    score = model.predict(inputs)[0]

    # Tree predictions for confidence
    tree_predictions = np.array([est.predict(inputs)[0] for est in model.estimators_])

    result, risk, confidence = analyze_output(score, tree_predictions)

    return jsonify({
        "PredictedScore": round(score, 2),
        "Result": result,
        "Risk": risk,
        "Confidence": confidence
    })


# ------------------ MULTIPLE STUDENTS (CSV) PREDICTION --------------------
@app.route("/predict-csv", methods=["POST"])
def predict_csv():
    file = request.files["file"]
    df = pd.read_csv(file)

    results = []

    for _, row in df.iterrows():
        inputs = np.array([
            row["Attendance"],
            row["StudyHours"],
            row["InternalMarks"],
            row["Assignments"],
            row["Activities"]
        ]).reshape(1, -1)

        score = model.predict(inputs)[0]
        tree_predictions = np.array([est.predict(inputs)[0] for est in model.estimators_])
        result, risk, confidence = analyze_output(score, tree_predictions)

        results.append({
            "Attendance": row["Attendance"],
            "StudyHours": row["StudyHours"],
            "InternalMarks": row["InternalMarks"],
            "Assignments": row["Assignments"],
            "Activities": row["Activities"],
            "PredictedScore": round(score, 2),
            "Result": result,
            "Risk": risk,
            "Confidence": confidence
        })

    return jsonify(results)


# ---------------- RUN SERVER ---------------------
if __name__ == "__main__":
    app.run(debug=True)
