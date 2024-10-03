import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import Button from "./ui/Button";

const Hero = () => {
  const words = [
    "Top Colleges in Delhi NCR",
    "Personalized College Suggestions",
    "Best Fit for Your Academic Goals",
    "Explore Various Fields of Study",
  ];

  return (
    <div className="w-full bg-hero-image bg-cover">
      <Container className="py-20">
        <div className="w-1/2 flex flex-col gap-y-5">
          <p className="text-base uppercase text-white   text-3xl">
            DELHI NCR COLLEGE GUIDE
          </p>
          <h2 className="text-7xl font-bold text-white">
            Welcome to the{" "}
            <span className="text-purple-900">
              College Recommendation System
            </span>
          </h2>
          <h2 className="text-4xl font-bold text-white">
            Your Guide to{" "}
            <Typewriter
              words={words}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-base text-lightText pr-32 font-medium">
            Discover top colleges across the Delhi NCR region, tailored to your
            academic interests, scores, and career goals. Our system provides
            personalized recommendations to help you make the best decision for
            your future.
          </p>
          <Button className="w-40 h-14" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
