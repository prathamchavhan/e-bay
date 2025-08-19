import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./Countcontact.css"
const supabaseUrl = "https://vdtsvelivrvepixawtvm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdHN2ZWxpdnJ2ZXBpeGF3dHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MzgzMjIsImV4cCI6MjA3MDIxNDMyMn0.KxS4skqdQxjO3gamIWm4VmI68hBb1DE6iyEoMoDoMZE";
const supabase = createClient(supabaseUrl, supabaseKey);

const Councontact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    enquiry_type: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Basic validation
    if (!formData.full_name || !formData.email || !formData.phone) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.from("counselling").insert([
      {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        enquiry_type: formData.enquiry_type,
        subject: formData.subject,
        message: formData.message,
      },
    ]);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        enquiry_type: "",
        subject: "",
        message: "",
      });
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="left-image">
        <img
          src="/ourprocess/call.png"
          alt="Contact"
        />
      </div>
      <div className="right-form">
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="full_name"
            type="text"
            placeholder="Enter your full name *"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email address *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="enquiry_type"
            value={formData.enquiry_type}
            onChange={handleChange}
          >
            <option value="">Select enquiry type</option>
            <option value="General">General</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
             <option value="course enroll">course enroll</option>
          </select>
          <input
            name="subject"
            type="text"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
         <button 
  type="submit" 
  className="submit-btn" 
  disabled={loading}
>
  {loading ? "Submitting..." : "Submit"}
</button>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">Message sent successfully!</p>}
        </form>
      </div>

   
    </div>
  );
};

export default Councontact;