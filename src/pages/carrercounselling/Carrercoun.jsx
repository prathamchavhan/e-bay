// src/pages/MyPage.jsx
import React from "react";
import Ourprocess from "./Ourprocess";
import Councontact from "./Councontact";
import Benifits from "./Benifits";
import Unbiased from "./Unbiased";
import "./carrercoun.css";
// Optional: for styling

function MyPage() {
  return (
    <>
  <div className="hero-section">
      <div className="hero-text">
        <h1>
          Empower Your Career <br /> with Expert Guidance
        </h1>
        <p className="subtext">
          Unlock Your True Potential with Expert Career Counseling
        </p>
        <p className="offer">
          100% <span className="highlight">Placement</span> or{" "}
          <span className="highlight">Refund</span>
        </p>
      </div>
 </div>
 <h2 className="career-heading">
Why Career Counseling is Essential ?
      </h2>
      <Unbiased/>
      <Benifits/>
      
      <Ourprocess/>
      <Councontact/>
    </>
  );
}

export default MyPage;
