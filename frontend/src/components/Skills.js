import React, { useState } from "react";

const skills = [
    { id: 1, name: "React", category: "Frontend" },
    { id: 2, name: "Node.js", category: "Backend" },
    { id: 3, name: "CSS", category: "Frontend" },
    { id: 4, name: "MongoDB", category: "Database" },
];

const Skills = () => {
    const [search, setSearch] = useState("");

    const filteredSkills = skills.filter(skill =>
        skill.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="skills-container">
            <h3>Search Skills</h3>
            <input
                type="text"
                placeholder="Search skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredSkills.map(skill => (
                    <li key={skill.id}>{skill.name} ({skill.category})</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
