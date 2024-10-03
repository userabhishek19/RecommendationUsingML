import React, { useState } from "react";
import Container from "../components/Container";
import Button from "../components/ui/Button";
import Subtitle from "../components/ui/Subtitle";
import Title from "../components/ui/Title";

const StudentForm = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    plusTwoScore: "",
    jeeMainScore: "",
    jeeAdvancedScore: "",
    stream: "",
    degree: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can handle the form submission (e.g., send the data to a backend)
  };

  return (
    <Container className="p-10 bg-[#212428] rounded-lg shadow-md shadow-black">
      <Subtitle title="Student Form" />
      <Title title="Fill in your details for College Recommendation" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#333] text-white border-none"
            required
          />
        </div>

        {/* +2 Score Input */}
        <div className="flex flex-col">
          <label htmlFor="plusTwoScore" className="text-white mb-2">+2 Score (%)</label>
          <input
            type="number"
            name="plusTwoScore"
            id="plusTwoScore"
            placeholder="Enter your +2 score"
            value={formData.plusTwoScore}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#333] text-white border-none"
            required
          />
        </div>

        {/* JEE Main Score Input */}
        <div className="flex flex-col">
          <label htmlFor="jeeMainScore" className="text-white mb-2">JEE Main Score</label>
          <input
            type="number"
            name="jeeMainScore"
            id="jeeMainScore"
            placeholder="Enter your JEE Main score"
            value={formData.jeeMainScore}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#333] text-white border-none"
          />
        </div>

        {/* JEE Advanced Score Input */}
        <div className="flex flex-col">
          <label htmlFor="jeeAdvancedScore" className="text-white mb-2">JEE Advanced Score</label>
          <input
            type="number"
            name="jeeAdvancedScore"
            id="jeeAdvancedScore"
            placeholder="Enter your JEE Advanced score"
            value={formData.jeeAdvancedScore}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#333] text-white border-none"
          />
        </div>

        {/* Stream Selection */}
        <div className="flex flex-col">
          <label htmlFor="stream" className="text-white mb-2">Stream</label>
          <select
            name="stream"
            id="stream"
            value={formData.stream}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#333] text-white border-none"
            required
          >
            <option value="" disabled>Select your stream</option>
            <option value="Engineering">Engineering</option>
            <option value="Medical">Medical</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
        </div>

        {/* Degree Selection */}
        <div className="flex flex-col">
          <label htmlFor="degree" className="text-white mb-2">Degree</label>
          <select
            name="degree"
            id="degree"
            value={formData.degree}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#333] text-white border-none"
            required
          >
            <option value="" disabled>Select your degree</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBBS">MBBS</option>
            <option value="BBA">BBA</option>
            <option value="BA">BA</option>
            <option value="B.Com">B.Com</option>
          </select>
        </div>

        {/* Submit Button */}
        <Button title="Submit" type="submit" className="w-40 h-14 mt-5" />
      </form>
    </Container>
  );
};

export default StudentForm;
