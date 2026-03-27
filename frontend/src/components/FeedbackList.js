import React, { useEffect, useState } from "react";
import axios from "axios";

function FeedbackList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/feedback")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2>All Feedback</h2>
      {data.map((item) => (
        <div key={item._id}>
          <h4>{item.studentName} - {item.subject}</h4>
          <p>Rating: {item.rating}</p>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;