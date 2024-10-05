import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education'; // Already included
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Languages from './components/Languages'; // Already included
import Achievements from './components/Achievements'; // Already included
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Internships />
      <Languages />
      <Achievements />
    </div>
  );
}

export default App;
