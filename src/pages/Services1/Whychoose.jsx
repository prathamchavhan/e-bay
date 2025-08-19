import React, { useEffect } from "react";
import "./Whychoose.css";

const CareerFeatures = () => {
  const data = [
    {
      title: "Dedicated Career Support",
      description:
        "Access dedicated career coaching, resources, networking events, and job referrals from over 250 employers to jumpstart your career.",
      align: "from-left", // renamed to animation direction
    },
    {
      title: "Results-Driven Curriculum",
      description:
        "Gain in-demand skills with expert-designed programs, graduating with a portfolio and certification recognized by top employers.",
      align: "from-right",
    },
    {
      title: "Flexible Learning Experience",
      description:
        "Complete your certification in 12, 18, or 24 weeks with options for full-time, part-time, and self-paced classes that fit your schedule.",
      align: "from-left",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
          entry.target.classList.remove("show"); // remove so it can re-animate
        }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".from-left, .from-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      <div className="head"><h2>Why Choose Our Boot Camps?</h2></div>
    <div className="career-features">
     
      {data.map((item, index) => (
        <div key={index} className={`feature-card ${item.align}`}>
          <div className="side-bar"></div>

          {/* Image with text on top */}
          <div
            className="feature-bg"
            style={{ backgroundImage: `url(/images/bootcampbg.png)` }}
          >
            <div className="feature-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>

          <div className="side-bar"></div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CareerFeatures;
