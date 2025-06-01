import React from 'react';
import './Experiences.css';

const experiences = [
    {
      role: "Technical Operations Intern",
      company: "Bracco Diagnostics",
      date: "June 2025 – Aug 2025",
      description: [
        "Assisted with process optimization and quality improvement initiatives in pharmaceutical manufacturing.",
        "Worked cross-functionally with engineering and compliance teams to support technical documentation and operations.",
        "Analyzed system workflows and contributed to digital transformation efforts in diagnostic imaging."
      ]
    },
    {
      role: "Research Assistant",
      company: "AI For Biomedical Imaging Lab, University of Pennsylvania",
      date: "September – December 2024",
      description: [
        "Collaborating with Dr. Sindhuja Tirumala to utilize SPARE indexing as potential biomarker for differential diagnosis of dementia.",
        "Analyzing brain volumes and atrophy patterns using multilinear regression models while controlling for demographic factors.",
        "Synthesizing relevant scientific literature related to structural MRI scans and imaging processes to inform research direction."
      ]
    },
    {
      role: "Teaching Assistant – CIS 1210 (Data Structures and Algorithms)",
      company: "University of Pennsylvania",
      date: "January 2025 – Present",
      description: [
        "Conduct weekly recitations for approximately 20 students, covering course content and guiding them through practice problems.",
        "Grade homework’s and exams for a class of 200 students and host office hours to address student questions and concerns.",
        "Serve as a member of the rubrics committee, developing clear and effective grading rubrics for 10 assignments and exams."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Stealth Startup",
      date: "May – July 2024",
      description: [
        "Created responsive, cross-browser compatible, dynamic website in React and HTML for an AI-driven cybersecurity startup.",
        "Developed company dashboard including file upload, user authentication and visualization to improve user experience 100%.",
        "Implemented interactive UI components to enhance user engagement, including real-time data visualizations and updates."
      ]
    },
    {
      role: "Research Intern",
      company: "Eppendorf Manufacturing Co",
      date: "April – August 2021",
      description: [
        "Designed self-learning algorithm in Java to control current usage in Peltier elements, which are used for heat transfer, leading to a 25% improvement in heat loss, as determined by a Monte Carlo Testing procedure, for a global healthcare technology company.",
        "Implemented algorithm facilitating implementation of Peltier Elements as a coolant into general company products.",
        "Eliminated company’s dependance on illegal coolant ensuring regulatory adherence and reduced electricity usage."
      ]
    }
  ];
    
const Experiences = () => {
  return (
    <section className="experiences">
      <h2 className="experiences-heading">Experiences</h2>
      <div className="experiences-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-role">{exp.role}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <p className="experience-date">{exp.date}</p>
            <ul className="experience-points">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
