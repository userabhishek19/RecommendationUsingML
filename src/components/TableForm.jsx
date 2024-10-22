import React, { useState } from "react";

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

  const [currentStep, setCurrentStep] = useState(0);

  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
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

  const handleNextStep = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={currentStep === 6 ? handleSubmit : handleNextStep}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg transition-transform transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Enroll Now</h2>

        {/* Full Name */}
        {currentStep === 0 && (
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="w-full px-3 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        {/* +2/JEE Score */}
        {currentStep === 1 && (
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="score">
              +2 / JEE Score
            </label>
            <input
              type="number"
              name="score"
              id="score"
              className="w-full px-3 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your +2 or JEE score"
              value={formData.score}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        {/* Preferred State */}
        {currentStep === 2 && (
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="state">
              Preferred State
            </label>
            <select
              name="state"
              id="state"
              className="w-full px-3 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select your preferred state
              </option>
              {statesOfIndia.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* College Selection */}
        {currentStep === 3 && (
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="college">
              Choose College
            </label>
            <select
              name="college"
              id="college"
              className="w-full px-3 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              value={formData.college}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select your college
              </option>
              {colleges.map((college, index) => (
                <option key={index} value={college}>
                  {college}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Email Address */}
        {currentStep === 4 && (
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        {/* Phone Number */}
        {currentStep === 5 && (
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full px-3 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            {currentStep === 6 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnrollForm;
