import React, { useState } from "react";

const skills = ["React", "JavaScript", "Node.js", "CSS", "Bootstrap", "Express", "MongoDB"];

const SkillsList = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="container">
            <h3>Skills</h3>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search skills..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="list-group">
                {skills
                    .filter(skill => skill.toLowerCase().includes(query.toLowerCase()))
                    .map(skill => <li className="list-group-item" key={skill}>{skill}</li>)}
            </ul>
        </div>
    );
};

export default SkillsList;
