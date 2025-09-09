// src/pages/MyPage.jsx
import React, { useEffect } from "react";
import Ourprocess from "./Ourprocess";
import Councontact from "./Councontact";
import Benifits from "./Benifits";
import Unbiased from "./Unbiased";
import "./carrercoun.css";

function MyPage() {
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <h1>
            Empower Your Career <br /> with Expert Guidance
          </h1>
          <p className="subtext">
            Unlock Your True Potential{" "}
            <span className="second-part">
              with Expert Career Counseling
            </span>
          </p>
          <p className="offer">
            100% <span className="highlight">Placement</span> or{" "}
            <span className="highlight">Refund</span>
          </p>
        </div>
      </div>
<<<<<<< HEAD
      <h2 className="career-heading">Why Career Counseling is Essential ?</h2>
      <Unbiased />
      <Benifits />
      <Ourprocess />
      <Councontact />
=======
 </div>
 <h2 className="career-heading">
Why Career Counseling is Essential?
      </h2>
      <Unbiased/>
      <Benifits/>
      
      <Ourprocess/>
      <Councontact/>
>>>>>>> 1d45ddde741c77d3767736fd1d623b4278a7e2ba
    </>
  );
}

export default MyPage;
