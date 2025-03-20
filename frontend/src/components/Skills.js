import React, { useState } from "react";

const skillsData = [
    { id: 1, name: "React", category: "Frontend" },
    { id: 2, name: "Node.js", category: "Backend" },
    { id: 3, name: "CSS", category: "Frontend" },
    { id: 4, name: "MongoDB", category: "Database" }
];

const Skills = () => {
    const [search, setSearch] = useState("");

    const filteredSkills = skillsData.filter(skill =>
        skill.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search skills..."
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
