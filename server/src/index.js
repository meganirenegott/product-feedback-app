// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
  connectionString: config.databaseUrl + "&uselibpqcompat=true",
  ssl: true,
});

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

// 🔹 GET `/get-all-suggestions`


async function getAllSuggestions() {
  // get all product feedback suggestions
  const result = await db.query("SELECT * FROM suggestions;");
  return result.rows;
}


// 🔹 GET `/get-suggestions-by-category/:category`

async function getSuggestionByCategory(category) {

  // query the database for the suggestions under the selected category
  const result = await db.query(
    "SELECT * FROM suggestions WHERE category= $1",
      [category]
  );
    
console.log(result, "result")
  // returns the food truck that was found
  return result.rows[0];
}


// 🔹 POST `/add-one-suggestion`

async function addOneSuggestion(
    feedback_title,
    category,
    feedback_detail
) {
  const result = await db.query(
    `INSERT INTO suggestions (feedback_title, category, feedback_detail)
    VALUES 
    ($1, $2, $3)
    ON CONFLICT (feedback_title)
    DO NOTHING
    RETURNING (feedback_title);`,
    [
    feedback_title,
    category,
    feedback_detail
    ],
  );
  console.log(result, "result")
  return result.rows[0];
}


// ---------------------------------
// API Endpoints
// ---------------------------------

// 🔹 GET `/get-all-suggestions`

app.get("/get-all-suggestions", async (req, res) => {
  const allSuggestions = await getAllSuggestions();
  res.json(allSuggestions);
});


// 🔹 GET `/get-suggestions-by-category/:category`

app.get("/get-suggestions-by-category/:category", async (req, res) => {

  // gets the id from the URL
  const category = req.params.category;
  // calls the helper function
  const suggestionCategory = await getSuggestionByCategory(category);
  // sends the food truck back as JSON
  res.json(suggestionCategory);
});


// 🔹 POST `/add-one-suggestion`


app.post("/add-one-suggestion", async (req, res) => {
  const {
      feedback_title,
      category,
      feedback_detail
  } = req.body;

  const newSuggestion = await addOneSuggestion(
      feedback_title,
      category,
      feedback_detail
  );
  console.log(newSuggestion)
  res.send(`Success! Your suggestion was added!`);
});
