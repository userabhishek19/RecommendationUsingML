import React, { useState } from "react";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import Container from "./Container";
import { contact1 } from "../assets/getImage"; // Update if necessary
import SocialIcon from "./ui/SocialIcon";

const ContactMe = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState(""); // Changed subject to college name
  const [message, setMessage] = useState(""); // Changed messages to message

  const handleSubmit = () => {
    console.log(userName, phone, email, collegeName, message);
    setUserName("");
    setPhone("");
    setEmail("");
    setCollegeName("");
    setMessage("");
  };

  return (
    <Container className="border-b border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="Contact" />
        <Title title="Get in Touch" />
      </div>
      <div className="flex gap-10 pt-10">
        <div className="w-1/3 bg-stone-950/50 p-10 rounded-lg group">
          <div className="overflow-hidden rounded-lg">
            <img
              src={contact1}
              alt="contact image"
              className="rounded-md group-hover:scale-110 duration-500"
            />
          </div>
          <div className="py-5 flex flex-col gap-2">
            <p className="text-2xl text-white font-bold">College Recommendation Team</p>
            <p className="text-lg font-medium">Support Team</p>
            <p className="text-base font-medium">
              We are here to assist you with your college selection process. Connect with us for personalized guidance.
            </p>
            <p className="text-base">
              Phone: <span className="text-white">+88010000000000</span>
            </p>
            <p className="text-base">
              Email: <span className="text-white">support@collegerecommendation.com</span>
            </p>
            <p className="uppercase">Follow us</p>
          </div>
          <SocialIcon />
        </div>
        <div className="w-2/3 bg-stone-950/50 p-10 rounded-lg flex flex-col gap-10">
          <div className="flex justify-between gap-7">
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm uppercase">Your Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="inputStyle"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm uppercase">Phone Number</p>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="inputStyle"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Email</p>
            <input
              type="email"
              placeholder="Enter your Email"
              className="inputStyle"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Preferred Stream</p>
            <input
              type="text"
              placeholder="Enter the Stream name you're interested in"
              className="inputStyle"
              onChange={(e) => setCollegeName(e.target.value)}
              value={collegeName}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Your Message</p>
            <textarea
              placeholder="Enter your message..."
              className="inputStyle"
              cols={1}
              rows={3}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="border-[1px] border-gray-500 py-2 rounded-md hover:border-designColor duration-300 uppercase hover:text-white"
          >
            Send Message
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ContactMe;
