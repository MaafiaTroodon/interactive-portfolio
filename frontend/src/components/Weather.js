import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
    // State for Halifax weather
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State for searched city weather
    const [city, setCity] = useState("");
    const [searchWeather, setSearchWeather] = useState(null);
    const [searchError, setSearchError] = useState(null);

    // Fetch Halifax weather on page load
    useEffect(() => {
        axios.get("/.netlify/functions/Weather")
            .then(response => {
                setWeather(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching Halifax weather:", error.response ? error.response.data : error);
                setError("Error fetching weather");
                setLoading(false);
            });
    }, []);

    // Function to fetch weather for searched city
    const handleSearch = async () => {
        if (!city.trim()) return;
        const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // ✅ Replace with your OpenWeather API key
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        try {
            const response = await axios.get(URL);
            setSearchWeather({
                city: response.data.name,
                temperature: response.data.main.temp,
                humidity: response.data.main.humidity,
                windSpeed: response.data.wind.speed,
                description: response.data.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            });
            setSearchError(null);
        } catch (error) {
            console.error("Error fetching search weather:", error.response ? error.response.data : error);
            setSearchWeather(null);
            setSearchError("City not found!");
        }
    };

    return (
        <div>
            {/* Halifax Weather Box */}
            <div className="weather-container">
                <h3>Current Weather in {weather?.city}</h3>
                {loading ? <p>Loading weather...</p> : error ? <p>{error}</p> : (
                    <>
                        <p><strong>Temperature:</strong> {weather.temperature}°C</p>
                        <p><strong>Humidity:</strong> {weather.humidity}%</p>
                        <p><strong>Condition:</strong> {weather.description}</p>
                    </>
                )}
            </div>

            {/* Search Weather Box */}
            <div className="search-weather-container">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button onClick={handleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                {searchError && <p className="error">{searchError}</p>}

                {searchWeather && (
                    <div className="weather-box">
                        <h3>{searchWeather.city}</h3>
                        <img src={searchWeather.icon} alt="weather-icon" />
                        <p className="temperature">{searchWeather.temperature}°C</p>
                        <p className="description">{searchWeather.description}</p>
                        <div className="weather-details">
                            <div className="humidity">
                                <i className="fa-solid fa-water"></i>
                                <span>{searchWeather.humidity}%</span>
                                <p>Humidity</p>
                            </div>
                            <div className="wind">
                                <i className="fa-solid fa-wind"></i>
                                <span>{searchWeather.windSpeed} Km/h</span>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
