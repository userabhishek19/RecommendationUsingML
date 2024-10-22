import React, { useEffect, useState } from "react";

const CollegeTable = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const colleges = [
    {
      name: "Delhi University",
      phone: "(999) 495-1000",
      status: "Admitted",
      matchingPercentage: 90,
      fees: "RS50,000",
    },
    {
      name: "Jaypee University",
      phone: "(999) 723-2300",
      status: "Pending",
      matchingPercentage: 75,
      fees: "RS45,000",
    },
    {
      name: "NIT",
      phone: "(999) 253-1000",
      status: "Admitted",
      matchingPercentage: 88,
      fees: "RS55,000",
    },
    {
      name: "JAYPEE Institute of Technology Solan",
      phone: "(626) 395-6811",
      status: "Pending",
      matchingPercentage: 82,
      fees: "RS60,000",
    },
  ];

  // Trigger fade-in animation when component loads
  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black px-8">
      <table
        className={`min-w-full max-w-4xl table-auto rounded-lg overflow-hidden shadow-md transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <thead className="bg-gray-800 text-gray-400 text-sm uppercase">
          <tr>
            <th className="px-6 py-3 text-left text-white">College</th>
            <th className="px-6 py-3 text-left text-white">Admission Status</th>
            <th className="px-6 py-3 text-left text-white">Matching %</th>
            <th className="px-6 py-3 text-left text-white">Fees</th>
            <th className="px-6 py-3 text-left text-white">Action</th>
          </tr>
        </thead>
        <tbody className="bg-black text-white">
          {colleges.map((college, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-semibold">{college.name}</div>
                <div className="text-sm text-gray-400">{college.phone}</div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    college.status === "Admitted"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {college.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="relative w-12 h-12">
                  <svg
                    className="absolute top-0 left-0 w-12 h-12 transform rotate-180"
                    style={{ transition: "stroke-dasharray 1s ease-out" }}
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="#2d3748"
                      strokeWidth="4"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="#4FD1C5"
                      strokeWidth="4"
                      strokeDasharray={`${college.matchingPercentage * 1.25}, 125`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-lg">
                    {college.matchingPercentage}%
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">{college.fees}</td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 bg-red-800 text-white rounded-full hover:bg-black-700 transition-transform transform hover:scale-105">
                  Read About College
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeTable;
