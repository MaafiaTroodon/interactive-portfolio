import React from "react";

import Projects from "./components/Projects";  // Import the new Projects component


import "./App.css"; // Keep the CSS import for styling

function App() {
    return (
        <div className="container text-center mt-4">
            <Projects />  {/* Display projects */}
        </div>
    );
}

export default App;
