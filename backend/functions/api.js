const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

// Dummy data
const projects = [
    { id: 1, name: "Project A", description: "Description A" },
    { id: 2, name: "Project B", description: "Description B" }
];

// API route for projects
router.get("/projects", (req, res) => {
    res.json(projects);
});

// Register router to API
app.use("/.netlify/functions/api", router); // ✅ Make sure this matches `netlify.toml`

module.exports.handler = serverless(app);
