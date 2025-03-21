import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("/.netlify/functions/api/projects")
            .then(response => {
                console.log("Projects API Response:", response.data);  
                setProjects(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
                setError("Error fetching projects");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="projects-container">
            <h3>Projects</h3>
            {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.name}
                        </a>
                    </h3>
                    <p>{project.description}</p>
                    <p className="technologies">Technologies: {project.technologies.join(", ")}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
