import React from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import SocialIcon from "./ui/SocialIcon";

const Footer = () => {

  const facebookLink = "https://www.facebook.com/your-profile";  
  const twitterLink = "https://www.twitter.com/your-profile";   
  const githubLink = "https://www.github.com/your-profile";     
  const linkedinLink = "https://www.linkedin.com/in/your-profile";

  return (
    <div className="bg-primaryColor">
      <Container className="flex items-center text-lightText justify-between py-5">
        <img src={logo} alt="logo" className="w-24" />
        <p className="text-sm lowercase hover:text-white duration-300 ">
          @Abhishek
        </p>
        <SocialIcon 
          facebookLink={facebookLink} 
          twitterLink={twitterLink} 
          githubLink={githubLink} 
          linkedinLink={linkedinLink} 
        />
      </Container>
    </div>
  );
};

export default Footer;
