// src/components/WebProjects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Reuse the Projects CSS for styling

// Import your project images (ensure these exist in src/assets)
import project1Img from '../assets/project2.png';
import project2Img from '../assets/project4.png';
import project3Img from '../assets/project6.png';
import project4Img from '../assets/project7.png';

// Define ALL your projects here, including their type
const allProjects = [
  {
    id: 1,
    title: "Chrono-Compiler",
    description: " The Chrono-Compiler is an educational project that demonstrates the inner workings of a compilerand interpreter through visualization and time-travel debugging. ",
    imageUrl: project1Img,
    technologies: ["React", "AST", "Stack", "Array"],
    type: "web", // Add a type property
    githubLink: "https://github.com/Niluminda-glitch/Data-Structures-and-Algorithms"
  },
  {
    id: 2,
    title: "NeoChargeMap",
    description: "Mobile application UI design for electric vehicle owners to find nearest charging station.",
    imageUrl: project2Img,
    technologies: ["kotlin"],
    type: "web",
    githubLink: "https://github.com/Niluminda-glitch/Mobile-Application-Development"
  },
  {
    id: 3,
    title: " Real-Time Sign Language Recognition App",
    description: "A web-based application that uses a trained CNN model to recognize real-time sign language gestures (A–Y excluding J & Z) via webcam and convert them into text.",
    imageUrl: project3Img,
    technologies: ["Phython"],
    type: "web",
    liveLink: "https://youtu.be/yT2K88ApMfk?si=a1ic5RuGR_MCSMoA",
    githubLink: "https://github.com/ManuriDissanayake/sign-language-streamlit-app.git"
  },
  {
    id: 4,
    title: " Personal Portfolio",
    description: "A web-based application that uses a trained CNN model to recognize real-time sign language gestures (A–Y excluding J & Z) via webcam and convert them into text.",
    imageUrl: project4Img,
    technologies: ["React","CSS", "HTML", "JavaScript", "Git"],
    type: "web",
    liveLink: "https://youtu.be/yT2K88ApMfk?si=a1ic5RuGR_MCSMoA",
    githubLink: "https://github.com/ManuriDissanayake/sign-language-streamlit-app.git"
  }
  
];

function WebProjects() {
  const webProjects = allProjects.filter(project => project.type === "web");

  return (
    <section id="web-projects" className="projects page-section"> {/* Added page-section */}
      <div className="container">
        <h2>Web Development Projects</h2>
        <p className="section-description">
          Here are some of my web development projects.
        </p>
        <div className="projects-grid">
          {webProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebProjects;