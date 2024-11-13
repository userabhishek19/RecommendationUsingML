const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/enrollmentDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error:", error));

// Define Schema and Model
const enrollmentSchema = new mongoose.Schema({
  fullName: String,
  score: Number,
  state: String,
  email: String,
  phone: String,
  course: String,
  college: String,
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

// POST route to handle form submission
app.post("/api/enroll", async (req, res) => {
  try {
    const enrollmentData = new Enrollment(req.body);
    await enrollmentData.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
