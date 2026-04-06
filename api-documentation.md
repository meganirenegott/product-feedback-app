# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource         | Method | Endpoint                      | Description                              |
|------------------|--------|-------------------------------|------------------------------------------|
| `suggestions`    | GET    | /get-all-suggestions          | Retrieves all the suggestions from the database             |
| `suggestions`    | GET    | /get-suggestions-by-category  | Retrieves all the suggestions in a specific category           |
| `suggestions`    | POST   | /add-one-suggestion           | Adds a new suggestion to the database          |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Retrieves all suggestions in the system ordered by feedback_title

**Example Response:**

```
Data Returned is an Array of Objects
[
    {   "id": 1,
        "feedback_title": "Add Sparkles",
        "category": "Enhancements",
        "feedback_detail": "Sparkles for Dopamine"
    },
    {   "id": 2,
        "feedback_title": "Light/Dark Mode Toggle",
        "category": "UX",
        "feedback_detail": "Add a toggle for light and dark mode control"
    },
]
```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Write your description here

**Example Response:**

```
Data Returned is an Array of Objects
[
     {   "id": 2,
        "feedback_title": "Light/Dark Mode Toggle",
        "category": "UX",
        "feedback_detail": "Add a toggle for light and dark mode control"
    },
     {   "id": 3,
        "feedback_title": "Form Submission Confetti",
        "category": "UX",
        "feedback_detail": "Add a confetti effect when a user successfully adds a suggestion through the form."
    },
]

```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Write your description here

**Example Request Body:**

```
{
    "feedback_title": "Increase Text Size",
    "category": "Enhancement",
    "feedback_description": "Bigger letters are easier to read"
}
```

**Example Response:**

```
Data returned is an string

{
    Sucess! Your feature request has been saved. 
}
```
---

