const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/feedback", require("./routes/feedbackRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});