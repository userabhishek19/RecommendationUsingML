import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier  # or RandomForestRegressor for regression
from sklearn.metrics import accuracy_score  # or mean_squared_error for regression
import joblib

# Load the cleaned dataset
df = pd.read_csv('College_data_cleaned.csv')  # Updated to use the cleaned CSV file

# Print column names to verify them
print("Columns in dataset:", df.columns)

# Replace '--' with NaN
df.replace('--', pd.NA, inplace=True)

# Handle missing values (e.g., fill NaN with 0 or a specific value, like column mean)
df['UG_fee'] = df['UG_fee'].replace({',': ''}, regex=True)
df['PG_fee'] = df['PG_fee'].replace({',': ''}, regex=True)

# Convert 'UG_fee' and 'PG_fee' to float after removing commas
df['UG_fee'] = pd.to_numeric(df['UG_fee'], errors='coerce')  # Coerce non-numeric values to NaN
df['PG_fee'] = pd.to_numeric(df['PG_fee'], errors='coerce')

# Handle missing values (fill with 0 or any strategy you prefer)
df['UG_fee'].fillna(0, inplace=True)  # or df['UG_fee'].fillna(df['UG_fee'].mean(), inplace=True)
df['PG_fee'].fillna(0, inplace=True)  # or df['PG_fee'].fillna(df['PG_fee'].mean(), inplace=True)

# Encode categorical columns (Stream and State)
df = pd.get_dummies(df, columns=['Stream', 'State'], drop_first=True)  # Encoding Stream and State

# Define features and target
X = df.drop(columns=['College_Name', 'Placement'])  # Features (adjust columns as needed)
y = df['Placement']  # Target variable (adjust based on your dataset)

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the model
model = RandomForestClassifier(n_estimators=100, random_state=42)  # Use RandomForestRegressor if regression

# Train the model
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy * 100:.2f}%')

# Save the model
joblib.dump(model, 'model.pkl')
