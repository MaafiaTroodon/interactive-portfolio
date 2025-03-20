require("dotenv").config(); // Load .env file

const express = require("express");
const serverless = require("serverless-http");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

const API_KEY = process.env.OPENWEATHER_API_KEY; // Get API key from .env
const CITY = "Halifax"; // You can change this dynamically

router.get("/", async (req, res) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);

        const weatherData = {
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description
        };

        res.json(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

app.use("/.netlify/functions/weather", router);

module.exports.handler = serverless(app);
