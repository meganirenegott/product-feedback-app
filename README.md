# Product Feedback App

A responsive product feedback application built with React and JavaScript that allows users to submit feature suggestions and filter them by category.
## 🖼️ Live Demo
[View the live project demo here](https://https://product-feedback-app-megan.netlify.app/) ✨

![alt text](<Screenshot 2026-04-16 at 11.47.48 am.png>)
## 🚀 Overview

This project is a full-stack style feedback board where users can:

- View all submitted product suggestions
- Filter suggestions by category (UI, UX, Enhancement, Bug, Feature)
- Submit new feedback through a form
- See updates reflected immediately on the homepage

The application is designed to match a Figma design and is fully responsive across desktop, tablet, and mobile.

---

## 🧠 Features

- 📋 Dynamic suggestion list rendering
- 🔍 Category-based filtering (client-side)
- ➕ Add new feedback via form submission
- 🎨 Responsive UI based on design mockups
- ⚡ Instant UI updates after submitting feedback
- 🎯 Active filter state styling

---

## 🛠️ Tech Stack

**Frontend**
- React
- JavaScript (ES6+)
- CSS (custom, responsive design)
- React Router

**Backend (API)**
- Node.js / Express (assumed based on endpoints)
- REST API endpoints

---

## 🔌 API Endpoints

The app interacts with the following endpoints:

- `GET /api/get-all-suggestions`
- `POST /api/add-one-suggestion`

---

## Database Schema

Here is the SQL I used to create my tables: 

![SQL table](<Screenshot 2026-04-16 at 11.45.25 am.png>)

INSERT INTO suggestions (feedback_title, category, feedback_detail)
VALUES
  ('Add Sparkles', 'Enhancement', 'Sparkles for Dopamine'),
  ('Change Background Color', 'UX', 'A different background color would be easier to read'),
  ('Light/Dark Mode Toggle', 'UX', 'Lets make a toggle for light and dark mode');

🎨 Design
- 🎨 [Figma Designs](https://www.figma.com/design/vxjX8SdBOt21DCD14mrBM9/Product-Feedback-App-Design?node-id=0-1&t=5lLwvPHeEzOLQADS-1)

This project was built based on a Figma design and a live demo reference.



Focus areas included:
	•	Consistent spacing and typography
	•	Interactive hover states
	•	Component-based layout
	•	Visual hierarchy

  📱 Responsive Design

The layout adapts based on screen size:
	•	Desktop: Sidebar + main content layout
	•	Tablet: Sidebar becomes horizontal
	•	Mobile: Single column layout

⸻

🚧 Challenges & Learnings
	•	Managing state between pages (lifting state to App.jsx)
	•	Handling API data consistency (snake_case vs camelCase)
	•	Debugging filtering logic and UI updates
	•	Implementing responsive layouts with CSS Grid and Flexbox

⸻

🔮 Future Improvements
	•	Add upvote functionality
	•	Add comment threads for suggestions
	•	Add edit/delete functionality
	•	Improve accessibility (ARIA, keyboard navigation)