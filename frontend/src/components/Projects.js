import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://fancy-lollipop-fcb73b.netlify.app/.netlify/functions/api")
            .then(response => {
                setProjects(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError("Error fetching projects");
                setLoading(false);
            });
    }, []);

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
