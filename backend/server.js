require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
console.log("ENV VALUE:",
    process.env.MONGO_URL);
mongoose.connect("mongodb://swetha:swetha333@ac-x9hoixs-shard-00-00.hwr1isp.mongodb.net:27017,ac-x9hoixs-shard-00-01.hwr1isp.mongodb.net:27017,ac-x9hoixs-shard-00-02.hwr1isp.mongodb.net:27017/?ssl=true&replicaSet=atlas-41cekg-shard-0&authSource=admin&appName=Cluster")
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Contact API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Contact Message:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.send("Message received successfully!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
