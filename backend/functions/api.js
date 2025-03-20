const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

const projects = [
    { id: 1, name: "Project A", description: "Description A" },
    { id: 2, name: "Project B", description: "Description B" }
];

// ✅ Use `/projects` instead of `/`
router.get("/projects", (req, res) => {
    res.json(projects);
});

// ✅ Make sure the function is mounted correctly
app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
