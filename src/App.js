// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'; // This will be our "All Projects" landing
import WebProjects from './components/WebProjects'; // New component
import UiUxProjects from './components/UiUxProjects'; // New component
import Contact from './components/Contact';
import './index.css'; // Import global styles


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects /> {/* This will serve as the initial projects view */}
            <Contact />
          </>
        } />
        <Route path="/web-projects" element={<WebProjects />} />
        <Route path="/ui-ux-projects" element={<UiUxProjects />} />
        {/* You can add a 404 Not Found route here too */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;