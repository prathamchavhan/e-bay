import React from 'react';
import './Achiver.css';
import readiness from "../../assets/readiness.png"
import revenu from "../../assets/revenu.png"
import graduation from "../../assets/graduation.png"

export default function AchieversPage() {
  return (
    <div className="page-container">
      <div className="white-border-container">
        <div className="container-content">
          <div className="flex-col-container">
            
            {/* Left side - Heading */}
            <div className="heading-section flex-1">
              <h2>
                Why are top achievers <br></br>choosing our platform?
              </h2>
            </div>

            {/* Right side - Benefits */}
            <div className="benefits flex-1">
              
              {/* 92% Placement */}
              <div className="benefit-item">
                <div className="icon orange">
                  <img 
                    src={readiness}
                    alt="Placement Icon" 
                    className="icon-img"
                  />
                </div>
                <div>
                  <span className="benefit-title">92% Placement</span>
                  <span className="benefit-subtitle">doors open to your future</span>
                </div>
              </div>

              {/* 120% Pay Hike */}
              <div className="benefit-item">
                <div className="icon blue">
                  <img 
                    src={revenu} 
                    alt="Pay Hike Icon" 
                    className="icon-img"
                  />
                </div>
                <div>
                  <span className="benefit-title">Unlock a 120% Pay Hike</span>
                  <span className="benefit-subtitle">with our placement expertise</span>
                </div>
              </div>

              {/* 10,000+ Learners */}
              <div className="benefit-item">
                <div className="icon purple">
                  <img 
                    src={graduation}
                    alt="Learners Icon" 
                    className="icon-img"
                  />
                </div>
                <div>
                  <span className="benefit-title">Join 10,000+ Learners</span>
                  <span className="benefit-subtitle">now thriving in top tech firms!</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
