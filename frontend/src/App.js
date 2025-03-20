import React from "react";
import Weather from "./components/Weather";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Projects from "./components/Projects";

const App = () => {
    return (
        <div className="container">
            <ThemeSwitcher />
            <h1>My Portfolio</h1>
            <Weather />
            <Projects />
        </div>
    );
};

export default App;
