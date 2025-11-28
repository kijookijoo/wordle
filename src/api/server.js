import express from "express";
import fetch from "node-fetch";
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

async function fetchWords() {
  try {
    const data = await fetch(
      "https://api.frontendexpert.io/api/fe/wordle-words"
    );
    const words = await data.json();
    return words;
  } catch (e) {
    console.log("Couldn't fetch words");
  }
}

app.get("/words", async (req, res) => {
  try {
    const data = await fetch(
      "https://api.frontendexpert.io/api/fe/wordle-words"
    );
    const json = await data.json();
    res.json(json);
  } catch (e) {
    console.error("Error fetching words:", e);
    res.status(500).json({ error: "Failed to fetch words" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
