import React from "react";
import "./style/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;