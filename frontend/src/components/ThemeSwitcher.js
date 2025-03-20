import React, { useState, useEffect } from "react";
import "./ThemeSwitcher.css";  // Import the CSS file

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export default ThemeSwitcher;
