import React, { useState, useEffect } from "react";
import axios from "axios";

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    score: "",
    state: "",
    email: "",
    phone: "",
    course: "",
    college: "",
  });

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal",
  ];

  const colleges = ["College A", "College B", "College C"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/enroll", formData);
      alert(response.data.message);
      setFormData({
        fullName: "",
        score: "",
        state: "",
        email: "",
        phone: "",
        course: "",
        college: "",
      });
    } catch (error) {
      alert("Error submitting form");
    }
  };

  // Bubble animation effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 4000);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden relative">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-2xl w-full max-w-md border border-white border-opacity-20 transition-transform duration-700 ease-out transform hover:scale-105"
        style={{
          animation: "fadeIn 1.5s ease-in-out",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Enroll Now</h2>

        {/* Full Name */}
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Score */}
        <div className="mb-4">
          <input
            type="number"
            name="score"
            placeholder="+2 / JEE Score"
            value={formData.score}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Preferred State */}
        <div className="mb-4">
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-red-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>Select Preferred State</option>
            {statesOfIndia.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Course */}
        <div className="mb-4">
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* College */}
        <div className="mb-4">
          <select
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-red-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>Select College</option>
            {colleges.map((college, index) => (
              <option key={index} value={college}>{college}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform duration-200 ease-in-out transform hover:scale-105"
          >
            Enroll
          </button>
        </div>
      </form>

      {/* Bubbles */}
      <style>
        {`
          .bubble {
            position: absolute;
            bottom: -10px;
            width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: rise 4s infinite ease-in-out;
            left: ${Math.random() * 100}%;
            transform: scale(${Math.random() * 0.7 + 0.3});
          }

          @keyframes rise {
            0% { transform: translateY(0); opacity: 0.4; }
            50% { opacity: 0.7; }
            100% { transform: translateY(-100vh); opacity: 0; }
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default EnrollForm;
