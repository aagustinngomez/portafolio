import React from 'react';

const contact = () => {
  return (
    <section>
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Tu nombre" />
        <input type="email" placeholder="Tu correo" />
        <textarea placeholder="Tu mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default contact;