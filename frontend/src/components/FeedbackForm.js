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

    await axios.post("http://localhost:5000/api/feedback", form);

    alert("Feedback submitted!");

    setForm({
      studentName: "",
      subject: "",
      rating: "",
      comment: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="studentName" placeholder="Name" value={form.studentName} onChange={handleChange} /><br />
      <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} /><br />
      <input name="rating" type="number" placeholder="Rating (1-5)" value={form.rating} onChange={handleChange} /><br />
      <textarea name="comment" placeholder="Comment" value={form.comment} onChange={handleChange}></textarea><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;