import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; // Import mongoose for MongoDB connection
import { Schema } from 'mongoose';

// MongoDB URI (assuming you're running MongoDB locally)
const mongoURI = 'mongodb://localhost:27017/contactDB';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Create a Mongoose Schema and Model for storing contact messages
const contactSchema = new Schema({
  userName: String,
  phone: String,
  email: String,
  collegeName: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse JSON bodies

// POST route to handle form submission
app.post('/api/contact', async (req, res) => {
  const { userName, phone, email, collegeName, message } = req.body;

  // Validate the input data
  if (!userName || !phone || !email || !collegeName || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new contact document and save it to the database
    const newContact = new Contact({
      userName,
      phone,
      email,
      collegeName,
      message,
    });

    await newContact.save(); // Save to MongoDB

    // Respond with a success message
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ message: 'There was an issue processing your message.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
