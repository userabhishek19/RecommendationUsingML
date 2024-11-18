import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { featuresData } from "../constant/data"; 
import FeatureCard from "./FeatureCard";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: <AiOutlineMenu />,
      title: "Personalized Recommendations",
      description:
        "Get tailored college suggestions based on your interests, scores, and preferences.",
    },
    {
      id: 2,
      icon: <IoBookOutline />,
      title: "Comprehensive College Database",
      description:
        "Explore a wide range of colleges across Delhi NCR with detailed information.",
    },
    {
      id: 3,
      icon: <IoMdArrowRoundForward />,
      title: "User-Friendly Interface",
      description:
        "Navigate through our platform easily to find the best colleges for you.",
    },
    {
      id: 4,
      icon: <IoMdArrowRoundForward />,
      title: "Expert Advice",
      description:
        "Access insights and tips from education experts to make informed decisions.",
    },
    {
      id: 5,
      icon: <IoMdArrowRoundForward />,
      title: "Admission Guidance",
      description:
        "Receive support and guidance throughout the college application process.",
    },
    {
      id: 6,
      icon: <IoMdArrowRoundForward />,
      title: "Success Stories",
      description:
        "Learn from the experiences of other students who found their perfect college.",
    },
  ];

  return (
    <Container className="border-b border-black flex flex-col gap-7">
      <Subtitle title="Features" />
      <Title title="What We Offer" />
      <div className="grid grid-cols-3 gap-x-5 gap-y-7">
        {featuresData.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Features;
