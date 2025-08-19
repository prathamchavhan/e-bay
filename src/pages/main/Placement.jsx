import React, { useEffect, useRef, useState } from "react";
import "./PlacementSection.css";

import companylogo from "../../assets/revenu.png";
import hikeLogo from "../../assets/hike.png";

function PlacementCard({ name, company, packageOffered, avatarSrc, hike }) {
  return (
    <div className="placement-card">
      {/* Avatar and Name/Company */}
      <div className="card-header">
        <div className="avatar">
          <img src={avatarSrc || companylogo} alt={name} />
        </div>
        <div className="name-company">
          <h3>{name}</h3>
          <p>{company}</p>
        </div>
      </div>

      {/* Package + Hike Row */}
      <div className="package-hike-row">
        <div className="package-info">
          <p>Package: {packageOffered}</p>
        </div>
        <div className="salary-hike">
          <img src={hikeLogo} alt="Salary Hike" className="hike-logo" />
          <span>{hike.replace("Hike", "Salary Hike")}</span>
        </div>
      </div>
    </div>
  );
}

export default function PlacementSection() {
  const students = [
    { name: "Dhruv Patel", company: "Jio Platforms Ltd.", package: "9 LPA", hike: "30% Hike" },
    { name: "Nisarg Patel", company: "TCS Digital", package: "7 LPA", hike: "25% Hike" },
    { name: "Raj Shah", company: "Infosys", package: "5 LPA", hike: "18% Hike" },
    { name: "Harsh Desai", company: "Wipro", package: "5 LPA", hike: "15% Hike" },
    { name: "Parth Mehta", company: "Capgemini", package: "4.5 LPA", hike: "10% Hike" },
    { name: "Yash Patel", company: "Jio Platforms Ltd.", package: "9 LPA", hike: "28% Hike" },
    { name: "Vivek Sharma", company: "TCS Digital", package: "7 LPA", hike: "20% Hike" },
    { name: "Amit Chauhan", company: "Infosys", package: "5 LPA", hike: "15% Hike" },
    { name: "Pratik Joshi", company: "Wipro", package: "5 LPA", hike: "12% Hike" },
    { name: "Sahil Khan", company: "Capgemini", package: "4.5 LPA", hike: "8% Hike" },
    { name: "Ravi Patel", company: "Jio Platforms Ltd.", package: "9 LPA", hike: "35% Hike" },
    { name: "Manan Shah", company: "TCS Digital", package: "7 LPA", hike: "25% Hike" },
    { name: "Bhavesh Desai", company: "Infosys", package: "5 LPA", hike: "14% Hike" },
    { name: "Ankit Mehta", company: "Wipro", package: "5 LPA", hike: "15% Hike" },
    { name: "Vatsal Joshi", company: "Capgemini", package: "4.5 LPA", hike: "9% Hike" },
    { name: "Deep Patel", company: "Jio Platforms Ltd.", package: "9 LPA", hike: "32% Hike" },
    { name: "Karan Shah", company: "TCS Digital", package: "7 LPA", hike: "27% Hike" },
    { name: "Meet Desai", company: "Infosys", package: "5 LPA", hike: "16% Hike" },
    { name: "Jay Mehta", company: "Wipro", package: "5 LPA", hike: "14% Hike" },
    { name: "Hardik Joshi", company: "Capgemini", package: "4.5 LPA", hike: "11% Hike" },
    { name: "Chintan Patel", company: "Jio Platforms Ltd.", package: "9 LPA", hike: "33% Hike" },
    { name: "Rohan Shah", company: "TCS Digital", package: "7 LPA", hike: "26% Hike" },
    { name: "Ashish Desai", company: "Infosys", package: "5 LPA", hike: "15% Hike" },
    { name: "Devang Mehta", company: "Wipro", package: "5 LPA", hike: "13% Hike" },
    { name: "Aditya Joshi", company: "Capgemini", package: "4.5 LPA", hike: "9% Hike" },
    { name: "Krish Patel", company: "Jio Platforms Ltd.", package: "9 LPA", hike: "31% Hike" },
    { name: "Sagar Shah", company: "TCS Digital", package: "7 LPA", hike: "24% Hike" },
    { name: "Neel Desai", company: "Infosys", package: "5 LPA", hike: "14% Hike" },
  ];

  const defaultAvatar = companylogo;
  const slides = [...students, ...students, ...students];
  const originalLength = students.length;

  const containerRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const SCROLL_SPEED = 1;

  useEffect(() => {
    function update() {
      const w = containerRef.current?.clientWidth || window.innerWidth;
      let show = 3;
      if (w < 768) show = 1;
      else if (w < 1024) show = 2;
      setSlidesToShow(show);
     const CARD_PERCENT = 0.8;
  const sw = (w / show) * CARD_PERCENT; 
      setSlideWidth(sw);
      setTranslateX(0);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    let animationFrameId;
    let lastTimestamp = null;

    function step(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setTranslateX((prev) => {
        const newTranslate = prev + SCROLL_SPEED * elapsed * 0.02;
        const maxTranslate = originalLength * slideWidth;
        if (newTranslate >= maxTranslate) {
          return newTranslate - maxTranslate;
        }
        return newTranslate;
      });

      animationFrameId = requestAnimationFrame(step);
    }

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [slideWidth, originalLength]);

  return (
    <section className="placement-section">
      <div className="placement-container">
        <div className="section-header">
          <h2>
            Placed from <span className="highlight">Dataventics</span> Learnings
          </h2>
        </div>

        <div className="placement-carousel" ref={containerRef}>
          <div
            className="placement-track"
            style={{
              transform: `translateX(${-translateX}px)`,
              width: `${slides.length * slideWidth}px`,
            }}
          >
            {slides.map((s, i) => (
              <div
                key={`${s.name}-${i}`}
                style={{
                  width: `${slideWidth}px`,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <PlacementCard
                  name={s.name}
                  company={s.company}
                  packageOffered={s.package}
                  avatarSrc={defaultAvatar}
                  hike={s.hike}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
