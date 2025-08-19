import React from 'react';

const Policies = () => {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '100%',
      overflowX: 'hidden'
    }}>
      <h1>Company Policies</h1>

      <section id="privacy-policy" style={{ marginTop: '30px' }}>
        <h2>Privacy Policy</h2>
        <p><strong>Last Updated - January 20, 2025</strong></p>

        <p>At Dataventics (referred to as "we," "our," or "us"), we are committed to protecting the privacy and security of your personal information...</p>

        <h3>1. Information We Collect</h3>
        <p>We collect certain personal information to provide and improve our services. The types of information we may collect include:</p>

        <ul>
          <li>Name</li>
          <li>Contact Number</li>
          <li>Email Address</li>
          <li>Physical Address</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To provide, operate, and maintain our services</li>
          <li>To respond to your inquiries and requests</li>
          <li>To improve our Website and services</li>
          <li>To send updates, newsletters, and marketing communications (if you opt-in)</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h3>3. Sharing and Disclosure of Information</h3>
        <p>We value your privacy and will not sell or rent your personal information to third parties...</p>

        <h3>4. Data Security</h3>
        <p>We implement appropriate technical and organizational measures to protect your personal information...</p>

        <h3>5. Cookies and Tracking Technologies</h3>
        <p>We may use cookies and similar tracking technologies to enhance your experience on our Website...</p>

        <h3>6. Third-Party Links</h3>
        <p>Our Website may contain links to third-party websites...</p>

        <h3>7. Your Rights</h3>
        <ul>
          <li>The right to access, correct, or delete your personal data</li>
          <li>The right to object to or restrict certain processing</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent at any time</li>
        </ul>

        <h3>8. Changes to This Privacy Policy</h3>
        <p>We may update this Privacy Policy from time to time...</p>

        <h3>9. Contact Us</h3>
        <p>Email: <a href="mailto:info@dataventics.com">info@dataventics.com</a><br />
           Website: <a href="https://www.dataventics.com/" target="_blank" rel="noopener noreferrer">https://www.dataventics.com/</a>
        </p>

        <div style={{ marginTop: '20px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{" "}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |{" "}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{" "}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            padding: 30px 20px !important;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.6rem;
          }
          
          h3 {
            font-size: 1.4rem;
          }
          
          p, li {
            font-size: 0.95rem;
            line-height: 1.6;
          }
        }
        
        @media (max-width: 480px) {
          div {
            padding: 20px 15px !important;
          }
          
          h1 {
            font-size: 1.8rem;
          }
          
          h2 {
            font-size: 1.4rem;
          }
          
          h3 {
            font-size: 1.2rem;
          }
          
          p, li {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Policies;