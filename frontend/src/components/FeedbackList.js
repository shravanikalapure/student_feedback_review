import React, { useEffect, useState } from "react";
import axios from "axios";

function FeedbackList() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/feedback");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Feedback</h2>
      {data.map((item) => (
        <div key={item._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h4>{item.studentName} - {item.subject}</h4>
          <p>Rating: {item.rating}</p>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;