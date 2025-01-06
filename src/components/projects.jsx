import React from 'react';

const projects = () => {
  const projects = [
    { name: 'To-Do App', link: 'https://github.com/tuusuario/todo-app' },
    { name: 'E-commerce Demo', link: 'https://github.com/tuusuario/ecommerce-demo' },
  ];

  return (
    <section>
      <h2>Proyectos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default projects;