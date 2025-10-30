// src/components/UiUxProjects.js
import React from 'react';

import ProjectCard from './ProjectCard';
import './Projects.css'; // Reuse the Projects CSS for styling

// Import your project images (ensure these exist in src/assets)
import project1Img from '../assets/project1.png'; // You might want different images for UI/UX projects
import project3Img from '../assets/project.png';
import project4Img from '../assets/project4.png';
import project5Img from '../assets/project5.png';
// ... import more as needed

// It's better to manage allProjects in a separate data file for larger portfolios
// For now, we'll redefine it here to keep this example self-contained,
// but for a real app, centralize project data.
const allProjects = [
  {
    id: 1,
    title: "RentSmart",
    description: "A User-Centric UI/UX for Modern Property Rentals",
    imageUrl: project1Img,
    technologies: ["Figma","User Research", "Prototyping", "Wireframing"],
    type: "ui/ux",
    liveLink: "https://www.behance.net/gallery/236987451/RentSmart-UIUX-Design-for-Modern-Property-Rentals",
    
  },
  
  {
    id: 2,
    title: "GuardianEye",
    description: "UI/UX Design for Vision Assistance and Safety",
    imageUrl: project3Img, // Placeholder for now
    technologies: ["Figma", "User Research", "Prototyping", "Wireframing"],
    type: "ui/ux",
    liveLink: "https://www.behance.net/gallery/236716723/GuardianEye-UIUX-Design",
    
  },
  {
    id: 3,
    title: "MyJob App",
    description: "Job Finding UI Design",
    imageUrl: project5Img, // Placeholder for now
    technologies: ["Figma", "User Research", "Prototyping", "Wireframing"],
    type: "ui/ux",
    liveLink: "https://www.behance.net/gallery/236494331/-MyJob-Job-Search-Mobile-Application-UIUX-Design",
    
  },

  {
    id: 4,
    title: "NeoChargeMap ",
    description: "Mobile application UI design for electric vehicles",
    imageUrl: project4Img, // Placeholder for now
    technologies: ["Figma", "User Research", "Prototyping", "Wireframing"],
    type: "ui/ux",
    liveLink: "https://www.behance.net/gallery/236714999/NeoChargeMap-UIUX-Design",
   
  }
];

function UiUxProjects() {
  const uiUxProjects = allProjects.filter(project => project.type === "ui/ux");

  return (
    <section id="ui-ux-projects" className="projects page-section"> {/* Added page-section */}
      <div className="container">
        <h2>UI/UX Projects</h2>
        <p className="section-description">
          Explore my UI/UX design work, including case studies and prototypes.
        </p>
        <div className="projects-grid">
          {uiUxProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UiUxProjects;