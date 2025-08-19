
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./Footers1.css";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/images/dv learnings.png" alt="Dataventics Logo" className="footer-logo" />
          <ul className="footer-links">
           <li><Link to="/policies">Privacy Policy</Link></li>
        <li><Link to="/policies">Refund Policy</Link></li>
        <li><Link to="/policies">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
  <div className="mb-3">
    <img
      src="/images/dpiit.png"
      alt="Dataventics Logo"
      className="footer-logo mb-2"
    />
  </div>

  <div className="d-flex align-items-center mb-2 gap-2">
    <MdEmail />
    <a href="mailto:contact@dataventics.com" className="email-link text-decoration-none text-white">
      contact@dataventics.com
    </a>
  </div>

  <div className="d-flex align-items-center mb-2 gap-2">
    <MdPhone />
    <span>+91-9325545392</span>
  </div>

  <div className="d-flex align-items-start gap-2">
    <MdLocationOn className="mt-1" />
    <div>
      288, 2nd floor, New Nandanvan,<br />
      Nagpur, MH - 440024
    </div>
  </div>
</div>


        <div className="footer-section">
          <h4>Follow us on :</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/dataventics/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/dataventics_software_solutions?igsh=bjY1Mjljb3Fkajhp"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/dataventics/"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 | Dataventics Software Solutions Pvt. Ltd.
      </div>
    </footer>
  );
};

export default Footer;
