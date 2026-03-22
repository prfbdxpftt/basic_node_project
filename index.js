const express = require("express");
const app = express();

// Middleware (important)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Express Server 🚀");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// Dynamic Route
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// POST Route
app.post("/data", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received successfully",
    data: data
  });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});