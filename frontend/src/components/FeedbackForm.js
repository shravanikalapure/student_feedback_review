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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="studentName" placeholder="Name" onChange={handleChange} />
      <input name="subject" placeholder="Subject" onChange={handleChange} />
      <input name="rating" type="number" placeholder="Rating" onChange={handleChange} />
      <textarea name="comment" placeholder="Comment" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
