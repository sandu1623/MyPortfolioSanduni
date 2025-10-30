// src/components/About.js
import React, { useRef, useEffect } from 'react'; // ADD useRef and useEffect
import './About.css';
import useAnimateOnScroll from '../utils/AnimateOnScroll'; // Import the hook

function About() {

  const addAnimateRef = useAnimateOnScroll(); // Initialize the hook
  const aboutTitleRef = useRef(null);
  const aboutP1Ref = useRef(null);
  const aboutP2Ref = useRef(null);
  const skillsTitleRef = useRef(null);
  const skillListRef = useRef(null);

  useEffect(() => {
    addAnimateRef(aboutTitleRef.current);
    addAnimateRef(aboutP1Ref.current);
    addAnimateRef(aboutP2Ref.current);
    addAnimateRef(skillsTitleRef.current);
    addAnimateRef(skillListRef.current);
  }, [addAnimateRef]);

  return (
    <section id="about" className="about">
      <div className="container">
        
        <h2 className="animate-on-scroll" ref={aboutTitleRef}>About Me</h2>
        
        <div className="about-content">
         <p className="animate-from-left" ref={aboutP1Ref}></p>
          <p>
            Hello! I'm Sanduni Piyumika, a Software Engineering undergraduate and a passionate dual-threat Web Developer and UI/UX Designer.
             My foundation in engineering allows me to build robust and scalable applications,
              while my design focus ensures they are dynamic and user-friendly.
          </p>
         
          <p className="animate-from-right" ref={aboutP2Ref}>
            I specialize in front-end development using technologies like React, 
            JavaScript, HTML, and CSS. I maintain a strong focus on UI/UX principles, 
            including user research, wireframing, and accessibility, 
            to bridge the gap between aesthetics and functionality. 
            I am actively dedicated to applying my theoretical knowledge to real-world projects 
            and continuously enhancing my technical and problem-solving skills to meet industry demands.
          </p>
       
          
        </div>
        <div className="skills">
          
          <h3 className="animate-on-scroll" ref={skillsTitleRef}>My Skills</h3>
          
          <div className="skill-list animate-stagger" ref={skillListRef}> {/* Apply animate-stagger here */}
           
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Node.js</span>
            <span>Kotlin</span>
            <span>MongoDB</span>
            <span>Adobe XD</span>
            <span>Figma</span>
            <span>Phython</span>
            <span>Git</span>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;