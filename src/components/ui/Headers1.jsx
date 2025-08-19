import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Headers1.css";

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Bootcamps", path: "/services/Timepass" },
    { name: "Certifications", path: "#certifications" },
    { name: "Career Counselling", path: "/carrercounselling/Carrercoun" },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (item) => {
    if (item.path.startsWith("#")) {
      const targetId = item.path.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const elementAfterNav = document.getElementById(targetId);
          if (elementAfterNav) {
            elementAfterNav.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    } else {
      navigate(item.path);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="logo-section">
        <img src="/images/dv learnings.png" alt="Dataventics" className="logo-img" />
      </div>

      {/* Mobile menu toggle */}
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
      </button>

      {/* Navigation links */}
      <div className={`nav-wrapper ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </NavLink>

        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
            onClick={() => handleNavClick(item)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* ✅ Button outside nav-wrapper */}

      <div className="head-but">
 <a href="http://localhost:5172" target="_blank" rel="noopener noreferrer">
   DV
  </a>   </div>

    </header>
  );
}
