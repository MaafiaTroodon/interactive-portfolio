const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

// ✅ Updated Projects Array with Real Projects & GitHub Links
const projects = [
    {
        id: 1,
        name: "Apple Website Clone",
        description: "A high-quality Apple website clone using GSAP animations and Three.js.",
        technologies: ["React", "GSAP", "Three.js"],
        link: "https://github.com/MaafiaTroodon/Apple_Website_Clone" // GitHub Link
    },
    {
        id: 2,
        name: "QuickCash Job Portal",
        description: "A job searching portal that helps users find quick freelance jobs.",
        technologies: ["Firebase", "Java (Android)", "XML"],
        link: "https://git.cs.dal.ca/mehil/group-12-csci3130-w25" // GitHub Link
    },
    {
        id: 3,
        name: "ChemAR - Molecular AR Viewer",
        description: "An AR-based web app that allows users to view 3D molecular structures.",
        technologies: ["React", "Node.js", "Three.js", "AR.js"],
        link: "https://git.cs.dal.ca/belcher/chemar-winter-2023" // GitHub Link
    },
    {
        id: 4,
        name: "QuickTutor",
        description: "A mobile application blending e-commerce with tutoring services.",
        technologies: ["Java", "Google Maps API", "JUnit", "Mockito"],
        link: "https://github.com/MaafiaTroodon/QuickTutor" // GitHub Link
    }
];

// ✅ API Endpoint for Projects
router.get("/projects", (req, res) => {
    res.json(projects);
});

// ✅ Mount API under Netlify Functions
app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
