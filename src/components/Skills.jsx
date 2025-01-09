import React from "react";
// import "./Skills.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Mis Habilidades</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;