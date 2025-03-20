import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher.js";
import SkillsList from "./components/SkillsList.js";
import Projects from "./components/Projects.js";

function App() {
    return (
        <div className="container text-center mt-4">
            <h1>My Interactive Portfolio</h1>
            <ThemeSwitcher />
            <SkillsList />
            <Projects />
        </div>
    );
}

export default App;
