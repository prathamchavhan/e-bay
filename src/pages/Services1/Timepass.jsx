import React from "react";
import "./timepass.css";
import Webtech from "./Webtech";
import Whychoose from "./Whychoose";
function Timepass() {
  return (
    <>
      <div className="hero-container">
        <video
          src="/video/bootcamps (1).mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded"
          style={{ maxWidth: "100%", width: "100%" }}
        />

        <img
          src="/polygon-bg.png"
          alt="Polygon Background"
          className="polygon-img"
        />

        <div className="content-box">
          <h2>Boot camp</h2>
          <p>
            Launch, advance, or switch careers with hands-on learning and
            real-world projects. Gain industry-ready skills and fast-track your
            growth with expert guidance.
          </p>
        </div>

        <img
          src="/images/image.png"
          alt="Person"
          className="person-img"
        />
      </div>
<Whychoose/>
      <Webtech />
      
    </>
  );
}

export default Timepass;
