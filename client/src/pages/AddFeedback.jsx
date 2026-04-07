// pages/AddFeedback.jsx
import { useState } from "react";
import "../App.css";

function AddFeedback() {
  const [formData, setFormData] = useState({
    feedbackTitle: "",
    category: "",
    feedbackDetail: "",
  });

  // send form data to the API to add a new suggestion
  async function addUserSuggestion() {
    const dataForAPI = {
      feedbackTitle: formData.feedbackTitle,
      category: formData.category,
      feedbackDetail: formData.feedbackDetail,
    };

    await fetch("/api/add-one-suggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForAPI),
    });
  }
  // handle changes to the form inputs
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle when the user submits the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUserSuggestion();
    alert("Success! Your feature request has been saved.");
  };

  // render JSX for the form to the page
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h1>Create New Feedback</h1>
          <h2>Feedback Title</h2>
          <p>Add a short, descriptive headline</p>
          <input
            type="text"
            name="feedbackTitle"
            value={formData.feedbackTitle}
            onChange={handleInputChange}
          />
        </label>

        <label>
          <h2>Category</h2>
          <select id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
            <option value="Feature">Feature</option>
          </select>
        </label>

        <label>
          <h2>Feedback Detail</h2>
          <p>Include any specific comments on what should be improved, added, etc.</p>
          <input
            type="text"
            name="feedbackDetail"
            value={formData.feedbackDetail}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" className="cancel-button">Cancel</button>
        <button type="submit" className="add-feedback-button">Add Feedback</button>
      </form>
    </>
  );
}

export default AddFeedback;