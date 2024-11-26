import React, { useState } from "react";
import Container from "./Container";
import AboutMeImg from "../assets/pic.jpg";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";

const About = () => {
  // State to control the visibility of the additional content
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore); // Toggle the content visibility
  };

  return (
    <Container className="flex justify-between">
      {/* Left part */}
      <div className="w-[35%] bg-[#212428] p-10 rounded-lg shadow-md shadow-black overflow-hidden group">
        <div className="h-[500px] overflow-hidden rounded-md">
          <img
            src={AboutMeImg}
            alt="aboutImage"
            className="h-full group-hover:scale-110 duration-500 rounded-md"
          />
        </div>
      </div>

      {/* Right part */}
      <div className="w-[55%] flex flex-col justify-center gap-7">
        <Subtitle title="About Us" />
        <Title title="College Recommendation System - Delhi NCR" />
        <p>
          Our College Recommendation System is designed to help students in the
          Delhi NCR region find the best colleges based on their academic
          preferences, location, and other personalized factors. Whether you are
          looking for top-tier institutions or specialized courses, we provide
          insights to guide you to the right choice.
        </p>
        <p>
          Explore a range of colleges across Delhi NCR, including universities
          offering undergraduate, postgraduate, and diploma programs. Our system
          is committed to providing accurate, up-to-date information to support
          your academic journey.
        </p>
        <Button
          title={showMore ? "Show Less" : "Learn More"}
          className="w-40 h-14"
          onClick={handleLearnMoreClick}
        />
        
        {/* Additional content that shows up when "Learn More" is clicked */}
        {showMore && (
          <div className="mt-5 text-white">
            <h3 className="text-lg font-semibold">Why Choose Us?</h3>
            <p>
              Our College Recommendation System takes into account various factors
              such as academic performance, location preferences, and available
              amenities. We have a vast database of colleges and institutions in the
              all over India that cater to a wide range of academic fields and
              disciplines.
            </p>
            <p>
              Whether you want to pursue engineering, medical, humanities, or any
              other field, our platform will suggest the best options based on your
              interests and career aspirations.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default About;
