// src/components/Projects.js
import React from 'react';
import'./Header';
import { Link } from 'react-router-dom'; // Import Link

import './Projects.css';

// Reuse the allProjects data from WebProjects.js for now,
// but ideally, import from a central data file.


function Projects() {
  

  return (
    <section id="projects" className="projects page-section"> {/* Added page-section */}
      <div className="container">
        <h2>My Work</h2>
        <p className="section-description">
          Explore my diverse portfolio, categorized into Web Development and UI/UX Design.
        </p>

        <div className="project-category-buttons">
          <Link to="/web-projects" className="btn btn-primary category-btn">Web Development</Link>
          <Link to="/ui-ux-projects" className="btn btn-secondary category-btn">UI/UX Design</Link>
        </div>

        {/* Optional: Show some featured projects on the main /projects page */}
        
      </div>
    </section>
  );
}

export default Projects;