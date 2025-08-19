import React, { useState, useEffect } from 'react';
import './SectionAndCertificate.css';
import { useNavigate } from "react-router-dom";

import { TbCertificate } from "react-icons/tb";
import { MdCalendarMonth } from "react-icons/md";
const SectionAndCertificate = () => {
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const [arrowLeft, setArrowLeft] = useState(0);
const navigate = useNavigate();

  const courses = [
    {
      id: "course-1",
      title: "100% Placement Course",
      subtitle: "Step In, Walk Out Employed",
      image: "images/course/JP.png",
      duration: "6 Months",
    
      syllabus: "b1.pdf",
      accentColor: "course-accent1"
    },
    {
      id: "course-2",
      title: "Power Platform Course",
      subtitle: "Empower Your Future with Power",
      image: "images/course/PPC.png",
      duration: "2 Months",

      syllabus: "b1.pdf",
      accentColor: "course-accent2"
    },
    {
      id: "course-3",
      title: " SQL Course",
      subtitle: "Query Your Future with SQL",
      image: "images/course/SC.PNG",
      duration: "4 Months",
    
      syllabus: "b1.pdf",
      accentColor: "course-accent3"
    }
  ];

  const certificates = [
    { 
      id: "cert-1", 
      title: "100 % Placement Unlocked", 
      desc: "Master top Microsoft tools – SQL, Power BI, Power Automate & Power Apps. Build real projects, gain internship experience, and learn from industry experts. Land your dream job with 100% placement support and unlimited interview calls.", 
      logos: [
  "images/subcou/excel.png",  // ✅ relative path from public folder
 "images/subcou/power.png",
  "images/subcou/pbi.png",
  "images/subcou/sql.png"
]
,
      certImage: "images/certificate/PBC.png",
      hasBestSeller: true,
      titleClass: "cert-title1",
      descClass: "cert-desc1",
      logosStackClass: "cert-logos-stack1",
      buttonStackClass: "cert-logos-stack21",
      ratingStackClass: "cert-logos-stack31"
    },
    { 
      id: "cert-2", 
      title: "Power Platform Unlocked", 
      desc: "Transform business challenges into powerful solutions using Power BI, Power Apps, and Power Automate.Gain practical skills through guided projects, workflow automation, and low-code app development .", 
      logos: ["images/subcou/pbi.png", "images/subcou/power.png", "images/subcou/pa.png"], 
      certImage: "images/certificate/PPC.png",
      hasBestSeller: false,
      titleClass: "cert-title",
      descClass: "cert-desc",
      logosStackClass: "cert-logos-stack",
      buttonStackClass: "cert-logos-stack2",
      ratingStackClass: "cert-logos-stack3"
    },
    { 
      id: "cert-3", 
      title: " SQL Unlocked", 
      desc: "On the successful completion of this online IT  Professional Training Program you will be proficient in  working with SQL and to be job-ready for some  of the top paying companies in the world .", 
      logos: [ "images/subcou/sql.png",   "images/subcou/googlesheet.png"], 
      certImage: "images/certificate/SSQL.png",
      hasBestSeller: false,
      titleClass: "cert-title",
      descClass: "cert-desc",
      logosStackClass: "cert-logos-stack",
      buttonStackClass: "cert-logos-stack2",
      ratingStackClass: "cert-logos-stack3"
    }
  ];

  const handleCourseClick = (index) => {
    setCurrentCertificateIndex(index);
    moveArrow(index);
    const element = document.getElementById(`cert-${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleArrowClick = () => {
    const nextIndex = (currentCertificateIndex + 1) % certificates.length;
    setCurrentCertificateIndex(nextIndex);
    moveArrow(nextIndex);
    const element = document.getElementById(`cert-${nextIndex + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const moveArrow = (index) => {
    const selectedCourse = document.getElementById(`course-${index + 1}`);
    const arrowElement = document.getElementById("main-arrow-navigation");
    if (selectedCourse && arrowElement) {
      const courseRect = selectedCourse.getBoundingClientRect();
      const arrowRect = arrowElement.getBoundingClientRect();
      setArrowLeft(courseRect.left + (courseRect.width / 2) - (arrowRect.width / 2) + window.scrollX);
    }
  };

  useEffect(() => {
    moveArrow(currentCertificateIndex);
    window.addEventListener("resize", () => moveArrow(currentCertificateIndex));
    return () => window.removeEventListener("resize", () => moveArrow(currentCertificateIndex));
  }, [currentCertificateIndex]);

  return (
    <div>
      {/* SECTION 1: Courses */}
      <div className="course-row">
        {courses.map((course, index) => (
          <div key={course.id} className="course-wrapper">
            <div className={course.accentColor}></div>
            <div 
              className="course-container" 
              id={`course-${index + 1}`}
              onClick={() => handleCourseClick(index)}
            >
              <img src={course.image} alt="Course Main" className="course-img" />
              <div className="course-title">{course.title}</div>
              <div className="course-subtitle">
                <span className="course-subtitle-text">{course.subtitle}</span>
              </div>
              <div className="course-info">
                       <div className="info-item">
                 <TbCertificate className="info-img" />
                 <span>Certification</span>
               </div>
                <div className="info-item">
  <MdCalendarMonth className="info-img" />
  <span>{course.duration}</span>
</div>
              </div>
              <div className="course-buttons">
                <a
                  href={course.link}
                  className="btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Program
                </a>
                <button 
                  className="btn-outline-green" 
                  onClick={(e) => {
                    e.preventDefault();
                    const tempAnchor = document.createElement("a");
                    tempAnchor.href = course.syllabus;
                    tempAnchor.download = course.syllabus.split("/").pop();
                    document.body.appendChild(tempAnchor);
                    tempAnchor.click();
                    document.body.removeChild(tempAnchor);
                  }}
                >
                  <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M9 2a1 1 0 0 1 2 0v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 1 1 5.707 8.293L8 10.586V2ZM3 18a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Z" />
                  </svg>
                  Syllabus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROW between courses and certificates */}
      <div 
        className="arrow-navigation" 
        id="main-arrow-navigation" 
        style={{ left: `${arrowLeft}px` }}
      >
        <img 
          src="/images/Arrow.jpg" 
          className="nav-arrow" 
          onClick={handleArrowClick} 
          alt="Navigation arrow" 
        />
      </div>

      {/* SECTION 2: Certificates */}
      <div className="certificate-row">
        {certificates.map((cert, index) => (
          <div 
            key={cert.id} 
            className={`certificate-section ${currentCertificateIndex === index ? 'certificate-visible' : ''}`} 
            id={`cert-${index + 1}`}
          >
            {cert.hasBestSeller && <img src="images/course//best.png" alt="Top Icon" className="cert-vertical-img" />}
            <div className="cert-left-stack">
              <div className={cert.titleClass}>{cert.title}</div>
              <div className={cert.descClass}>{cert.desc}</div>
              <div className={cert.logosStackClass}>
                {cert.logos.map((logo, i) => (
                  <img key={i} src={logo} className="cert-logo-img" alt={`Logo ${i}`} />
                ))}
              </div>
              <div>
                <div>
<button 
  className="cert-enroll-btn"
  onClick={() => navigate("/carrercounselling/Councontact")}
>  ENROLL
</button>
                
                </div>
              </div>
          <div className="cert-rating-stack">
  <img src="images/course/rating.png" alt="5 star rating" className="cert-rating-img" />
  <span className="cert-rating-number">(5,872 ratings)</span>
</div>
            </div>
            <div className="cert-right-stack">
              <img src={cert.certImage} alt="Certificate Preview" className="cert-img-big" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionAndCertificate;