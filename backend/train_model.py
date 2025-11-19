import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import pickle

# Load dataset
data = pd.read_csv("dataset.csv")

# Features (inputs)
X = data[["Attendance", "StudyHours", "InternalMarks", "Assignments", "Activities"]]

# Target (score)
y = data["Score"]

# Train-test split (not required for hackathon but good practice)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model
model = RandomForestRegressor(
    n_estimators=200,
    max_depth=10,
    random_state=42
)

# Train the model
model.fit(X_train, y_train)

# Evaluate
accuracy = model.score(X_test, y_test)
print("🔍 Model R² Score:", round(accuracy * 100, 2), "%")

# Save model
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ model.pkl saved successfully!")
