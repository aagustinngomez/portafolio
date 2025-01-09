import React from "react";
// import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contacto</h2>
      <p>Sígueme en mis redes o escríbeme directamente:</p>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="socials">
        <a href="https://github.com/aagustinngomez">GitHub</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </div>
  );
};

export default Contact;