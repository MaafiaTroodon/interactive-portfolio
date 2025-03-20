import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Memoize API_BASE_URL to prevent unnecessary re-renders
    const API_BASE_URL = useMemo(() => 
        process.env.NODE_ENV === "development"
            ? "http://localhost:8888/.netlify/functions/api"
            : "https://fancy-lollipop-fcb73b.netlify.app/.netlify/functions/api", 
        []
    );

    useEffect(() => {
        axios.get(`${API_BASE_URL}/projects`)
            .then(response => {
                setProjects(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
                setError("Error fetching projects");
                setLoading(false);
            });
    }, [API_BASE_URL]); // ✅ Now API_BASE_URL is included in dependencies

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h3>Projects</h3>
            {projects.map((project) => (
                <div key={project.id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
