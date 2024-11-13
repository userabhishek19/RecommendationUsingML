from flask import Flask, request, jsonify
import joblib
import os
import pandas as pd

app = Flask(__name__)

# Check if model file exists
model_file = "model.pkl"
if os.path.exists(model_file):
    model = joblib.load(model_file)
else:
    model = None  # This will trigger an error later in the code

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({"error": "Model file not found. Please train and save the model."}), 500

    try:
        data = request.get_json()  # Get the data sent in the POST request
        input_data = pd.DataFrame([data])  # Convert it into a DataFrame
        
        # Predict using the trained model
        prediction = model.predict(input_data)
        
        return jsonify({"recommendations": prediction.tolist()})  # Return recommendations as JSON

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, port=5000)
