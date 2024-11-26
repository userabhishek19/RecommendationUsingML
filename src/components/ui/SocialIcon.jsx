import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SocialIcon = ({ facebookLink, twitterLink, githubLink, linkedinLink }) => {
  return (
    <div className="flex items-center gap-5">
      <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="portfolioIconStyle">
        <FaXTwitter />
      </a>
      <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="portfolioIconStyle">
        <FaFacebook />
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="portfolioIconStyle">
        <FaGithub />
      </a>
      <a href={linkedinLink} target="_self" rel="noopener noreferrer" className="portfolioIconStyle">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcon;
