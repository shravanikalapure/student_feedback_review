import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [form, setForm] = useState({
    studentName: "",
    subject: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5001/api/feedback", form);

    alert("Feedback submitted!");

    setForm({
      studentName: "",
      subject: "",
      rating: "",
      comment: "",
    });
  };
  const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
};

  return (
  <form onSubmit={handleSubmit} style={styles.form}>
    <input name="studentName" placeholder="Your Name" value={form.studentName} onChange={handleChange} required />
    <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />

    <select name="rating" value={form.rating} onChange={handleChange} required>
      <option value="">Select Rating</option>
      <option value="5">Excellent</option>
      <option value="4">Good</option>
      <option value="3">Average</option>
      <option value="2">Poor</option>
      <option value="1">Bad</option>
    </select>

    <textarea name="comment" placeholder="Write your feedback..." value={form.comment} onChange={handleChange} required></textarea>

    <button type="submit">Submit</button>
  </form>
);
  

  
}

export default FeedbackForm;