// pages/AddFeedback.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function AddFeedback() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    feedbackTitle: "",
    category: "Feature",
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
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle when the user submits the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUserSuggestion();
    navigate("/");
  };

  return (
    <div className="feedback-page-wrapper">
      <div className="feedback-page">
        <Link to="/" className="go-back">
          ← Go Back
        </Link>

        <form className="feedback-form-card" onSubmit={handleSubmit}>
          <div id="plus">
            <img
              src="/assets/icons/icon-new-feedback.svg"
              alt="plus sign logo"
            />
          </div>

          <h1 className="create-new-feedback">Create New Feedback</h1>

          <label className="form-group">
            <h2 className="feedback-title">Feedback Title</h2>
            <p className="feedback-description">
              Add a short, descriptive headline
            </p>
            <input
              type="text"
              name="feedbackTitle"
              value={formData.feedbackTitle}
              onChange={handleInputChange}
            />
          </label>

          <label className="form-group">
            <h2 className="feedback-title">Category</h2>
            <p className="feedback-description">
              Choose a category for your feedback
            </p>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
            </select>
          </label>

          <label className="form-group">
            <h2 className="feedback-title">Feedback Detail</h2>
            <p className="feedback-description">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              name="feedbackDetail"
              value={formData.feedbackDetail}
              onChange={handleInputChange}
            />
          </label>

          <div className="form-buttons">
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>

            <button type="submit" className="add-feedback-button">
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFeedback;