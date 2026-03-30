# Student Feedback Review System (MERN Stack)

## Overview
The Student Feedback Review System is a full-stack web application built using the MERN stack. It allows students to submit feedback for subjects or faculty, and enables administrators to view and analyze the feedback.

## Features
- Submit feedback (Name, Subject, Rating, Comment)
- View all feedback in a structured format
- Rating system with visual representation
- Real-time data retrieval from backend
- Clean and responsive user interface

## Tech Stack
Frontend:
- React.js
- Axios

Backend:
- Node.js
- Express.js

Database:
- MongoDB -Mongoose

## Project Structure
student-feedback/
│
├── backend/
│   ├── models/
│   │   └── Feedback.js
│   ├── routes/
│   │   └── feedbackRoutes.js
│   ├── controllers/
│   │   └── feedbackController.js
│   ├── config/
│   │   └── db.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FeedbackForm.js
│   │   │   └── FeedbackList.js
│   │   ├── App.js
│   │   └── index.js

## Installation and Setup

1. Clone the Repository
git clone https://github.com/your-username/student-feedback.git
cd student-feedback

2. Setup Backend
cd backend
npm install
node server.js

3. Setup Frontend
cd frontend
npm install
npm start

4. Start MongoDB
mongod

## API Endpoints
GET    /api/feedback    Retrieve all feedback
POST   /api/feedback    Submit new feedback

## Future Enhancements
- Filter feedback by subject
- Admin dashboard with analytics
- Edit and delete feedback
- User authentication system
- Improved UI/UX

## Author
Shravani Kalapure

## License
This project is intended for educational purposes.