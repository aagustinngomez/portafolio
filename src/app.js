import React from 'react';
import Home from './components/home';
import About from './components/About';
import Contact from './components/contact';
import Projects from './components/projects';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;