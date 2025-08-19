import React from "react";
import "./Ourprocess.css";

const processItems = [
  {
    title: "Initial Consultation",
    imgSrc: "/ourprocess/initial.png",
    alt: "Initial Consultation",
  },
  {
    title: "In-Depth Assessment",
    imgSrc: "/ourprocess/indepth.png",
    alt: "In-Depth Assessment",
  },
  {
    title: "Personalized Counseling Session",
    imgSrc: "/ourprocess/person.png",
    alt: "Personalized Counseling Session",
  },
  {
    title: "Follow-Up Support",
    imgSrc: "/ourprocess/followup.png",
    alt: "Follow-Up Support",
  },
];

export default function OurProcess() {
  return (
    <section className="our-process">
      <h2 className="our-process-title">Our Process</h2>
      <div className="process-grid">
        {processItems.map(({ title, imgSrc, alt }) => (
          <div key={title} className="process-card">
            <div className="process-image-wrapper">
              <img src={imgSrc} alt={alt} className="process-image" />
            </div>
            <div className="process-title">{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
