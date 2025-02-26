import React from 'react';
import './Aboutus.css';

// Importing the SVGs for each block
import iLearning from '../assets/i-learning.svg';
import expertLearning from '../assets/tutor.svg';
import pLearning from '../assets/p-learning.svg';
import globe from '../assets/globe.svg';


function Aboutus({ aboutSectionRef }) {
  const aboutData = [
    {
      img: iLearning,
      title: 'Innovative Learning',
      description: 'Our platform integrates the latest in educational technology, enabling students to learn through interactive and engaging methods.'
    },
    {
      img: expertLearning,
      title: 'Expert Educators',
      description: 'We collaborate with experienced educators to ensure our content is not only accurate but also impactful and easy to grasp.'
    },
    {
      img: pLearning,
      title: 'Personalized Experience',
      description: 'Our learning paths are tailored to each individual\'s pace, ensuring that no learner is left behind.'
    },
    {
      img: globe,
      title: 'Global Community',
      description: 'Connect with learners and educators around the world, fostering a global exchange of knowledge and ideas.'
    }
  ];

  return (
    <section ref={aboutSectionRef} className="second-cont">
      <div className="about-us">
        <h1 className="about-title">What do we do?</h1>
        <p className="about-subtitle">At AppForLearning, we believe in shaping the future through accessible, quality education. Here's what makes us unique:</p>
        <div className="about-content">
          {
            aboutData.map((data, index) => (
              <div key={index} className={`block block${index + 1}`}>
                <img src={data.img} alt={`${data.title} icon`} className="icon" />
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Aboutus;

// {aboutData.map((block, index) => (
//   <div key={index} className={`block block${index + 1}`}>
//     <h2>{block.title}</h2>
//     <p>{block.description}</p>
//   </div>
// ))}