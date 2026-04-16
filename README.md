# Product Feedback App

A responsive product feedback application built with React and JavaScript that allows users to submit feature suggestions and filter them by category.

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

📱 Responsive Design

The layout adapts based on screen size:
	•	Desktop: Sidebar + main content layout
	•	Tablet: Sidebar becomes horizontal
	•	Mobile: Single column layout

🎨 Design

This project was built based on a Figma design and a live demo reference.

Focus areas included:
	•	Consistent spacing and typography
	•	Interactive hover states
	•	Component-based layout
	•	Visual hierarchy

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
	•	Persist filter state across navigation
	•	Add edit/delete functionality
	•	Improve accessibility (ARIA, keyboard navigation)