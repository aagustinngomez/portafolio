import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Proyecto 1",
    description: "Este es un proyecto de ejemplo.",
    skills: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Proyecto 2",
    description: "Este es otro proyecto increíble.",
    skills: ["Node.js", "MongoDB"],
  },
  {
    title: "Proyecto 3",
    description: "Un proyecto interesante.",
    skills: ["HTML", "CSS"],
  },
  {
    title: "Proyecto 4",
    description: "El proyecto más reciente.",
    skills: ["React", "Redux"],
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-gallery">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="skills">
              {project.skills.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;