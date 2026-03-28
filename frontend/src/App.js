import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📊 Student Feedback Dashboard</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>Give Feedback</h2>
          <FeedbackForm />
        </div>

        <div style={styles.card}>
          <FeedbackList />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Poppins, sans-serif",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    background: "#ffffff",
    color: "#333",
    padding: "20px",
    borderRadius: "12px",
    width: "400px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
};

export default App;