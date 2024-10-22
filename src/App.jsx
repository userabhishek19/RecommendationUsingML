import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Features from "./components/Features";
import Hero from "./components/Hero";
//import Form from "./components/Form"; // Correctly importing the Form component
//import Enroll from "./components/TableForm"
function App() {
  return (
    <div className="relative bg-primaryColor text-lightText">
      <Hero />
      <AboutMe />
      <Features />
   
      <ContactMe />
    </div>
  );
}

export default App;
