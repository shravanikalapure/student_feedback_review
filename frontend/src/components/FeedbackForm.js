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
    try {
      await axios.post("http://127.0.0.1:5000/api/feedback", form);
      alert("Feedback submitted!");

      // clear form
      setForm({
        studentName: "",
        subject: "",
        rating: "",
        comment: "",
      });

    } catch (err) {
      console.error(err);
      alert("Error submitting feedback");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="studentName" placeholder="Name" value={form.studentName} onChange={handleChange} />
      <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
      <input name="rating" type="number" placeholder="Rating" value={form.rating} onChange={handleChange} />
      <textarea name="comment" placeholder="Comment" value={form.comment} onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;