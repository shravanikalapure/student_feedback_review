const Feedback = require("../models/Feedback");

// Add feedback
exports.addFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all feedback
exports.getFeedback = async (req, res) => {
  try {
    const data = await Feedback.find().sort({ date: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};