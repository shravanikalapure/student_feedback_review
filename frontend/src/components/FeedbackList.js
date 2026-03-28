import React, { useEffect, useState } from "react";
import axios from "axios";

function FeedbackList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5001/api/feedback");
      setData(res.data);
    } catch (err) {
      console.error("Error fetching feedback:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 style={styles.title}>All Feedback</h2>

      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No feedback yet</p>
      ) : (
        data.map((item) => {
          const rating = Number(item.rating) || 0; // safe conversion

          return (
            <div key={item._id} style={styles.card}>
              <div style={styles.header}>
                <h4>{item.studentName}</h4>
                <span style={styles.badge}>{item.subject}</span>
              </div>

              <p style={styles.rating}>
                Rating: {getRatingLabel(rating)}
              </p>

              <p style={styles.comment}>{item.comment}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

// ✅ rating label function
const getRatingLabel = (rating) => {
  const map = {
    5: "🌟 Excellent",
    4: "👍 Good",
    3: "😐 Average",
    2: "⚠️ Poor",
    1: "❌ Bad",
  };
  return map[rating] || "No rating";
};

// ✅ styles (YOU WERE MISSING THIS)
const styles = {
  title: {
    marginBottom: "10px",
  },
  card: {
    background: "#f8f9ff",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    background: "#667eea",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
  },
  rating: {
    fontWeight: "bold",
    marginTop: "5px",
  },
  comment: {
    marginTop: "8px",
    color: "#555",
  },
};

export default FeedbackList;