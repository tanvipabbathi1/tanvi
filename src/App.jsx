import React from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Experiences from './pages/Experiences.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
