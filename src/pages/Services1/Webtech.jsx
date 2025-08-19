import React from "react";
import "./Webtech.css";


export default function Webtech() {
  return (
    <>
        <section className="webtech-container">
  <h2 className="webtech-heading">Why Professionals Choose Online Education</h2>

  <div className="webtech-two-column">
    <div className="webtech-text-side">
      <ul>
        <li>
          <span className="highlight">UGC recognizes online degrees</span> as equivalent to on-campus degrees.
        </li>
        <li>
          Increase your salary potential by up to <span className="highlight">3x</span> and accelerate career growth.
        </li>
        <li>Enjoy flexible learning without leaving your current job.</li>
        <li>
          Earn top university degrees at <span className="highlight">70% lower costs.</span>
        </li>
        <li>Benefit from alumni status and dedicated placement support.</li>
      </ul>
    </div>

    <div className="webtech-image-side">
      <img src="/images/course 3 (2).png" alt="Professional Education" />
    </div>
  </div>
</section>

<div className="bottom-full-image">
  <img src="/images/bottom.png" alt="Profess" />
</div>


<div className="okoay">
  No prior experience required for most courses.Our boot camps are designed to provide foundational to <br/> advanced skills, tailored to meet the needs of beginners and seasoned professionals alike.
</div>
    </>
  );
}
