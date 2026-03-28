import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Feedback System</h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
}

export default App;