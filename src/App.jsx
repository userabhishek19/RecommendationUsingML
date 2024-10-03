import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Enroll from "./components/AboutMe"; // Renamed StudentForm to Enroll

function App() {
  return (
    <div className="relative bg-primaryColor text-lightText">
      <Hero />
      <AboutMe />
      <Features />
      <ContactMe />
      <Enroll /> {/* Directly render the form */}
    </div>
  );
}

export default App;
