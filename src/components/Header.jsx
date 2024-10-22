import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./ui/Button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigationArray = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Colleges", link: "/colleges" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full h-20 bg-[#16181C]/90 backdrop-blur-2xl sticky top-0 z-50">
      <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-24" />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            {navigationArray.map(({ title, link }) => (
              <NavLink
                key={link}
                to={link}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-designColor" : "text-lightText"
                  } text-sm uppercase font-semibold hover:text-designColor cursor-pointer duration-300`
                }
              >
                {title}
              </NavLink>
            ))}
          </nav>

          {/* Enroll Now Button */}
          <NavLink to="/enroll">
            <Button title="Enroll Now" className="w-28 h-10 uppercase" />
          </NavLink>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4">
        <nav className="flex gap-4">
          {navigationArray.map(({ title, link }) => (
            <NavLink
              key={link}
              to={link}
              className={({ isActive }) =>
                `${
                  isActive ? "text-designColor" : "text-lightText"
                } text-sm uppercase font-semibold hover:text-designColor cursor-pointer duration-300`
              }
            >
              {title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
