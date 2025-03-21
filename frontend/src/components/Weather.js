
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("/.netlify/functions/Weather")  // ✅ Corrected API Path
            .then(response => {
                setWeather(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching weather:", error.response ? error.response.data : error);
                setError("Error fetching weather");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading weather...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="weather-container">
            <h3>Current Weather in {weather.city}</h3>
            <p><strong>Temperature:</strong> {weather.temperature}°C</p>
            <p><strong>Humidity:</strong> {weather.humidity}%</p>
            <p><strong>Condition:</strong> {weather.description}</p>
        </div>
    );
};

export default Weather;
