import React, { useState, useEffect } from "react";
import "./Home.css";
import Achiverspage from "./Achiverspage"; 
import Placement from"./Placement";
import Certificate from "./Certificate";
import Couresboot from "./Couresboot";

const images = [
  "/images/aashray.png", // replace with your real testimonial image paths in public folder
  "/images/deva.png",
  "/images/diksha.png",
   "/images/sagar.png"
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="hero-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/video/courses.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      

      {/* Content */}
      <div className="hero-content">
        <div className="left-section">
          <h2>
            <span className="highlight-orange">10,000+</span> Success Stories —{" "}
            <span className="highlight-white">Will Yours Be Next?</span>
          </h2>
          <p>Elevate Your Future with Every Click</p>
          <h3>
            <span className="highlight-orange">100% Placement</span> or Refund
          </h3>
          <button className="cta-button">Get Placed</button>
        </div>

        {/* Testimonials */}
        <div className="right-section">
        <div className="testimonial-container">
  <img
    src={images[currentImage]}
    alt="testimonial"
    className="testimonial-image"
  />
</div>

         
        </div>
      </div>
   
    </div>
      <Placement/>
        <Achiverspage/>
      <section id="certifications">
        <Certificate />
      </section>
      <Couresboot/>
        </>
  );
}
export default Home;