const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();
app.use(cors());

const router = express.Router();

router.get("/projects", (req, res) => {
    res.json([
        { id: 1, name: "Portfolio", description: "My React portfolio" },
        { id: 2, name: "Weather App", description: "Displays real-time weather" }
    ]);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
