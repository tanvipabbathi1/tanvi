import './About.css';

export default function About() {
  return (
    <section className="about-wrapper">
      <div className="about-box">
        <h2 className="about-heading">About Me</h2>
        <p>
          I’m Tanvi — a Computer Science and Statistics student at the University of Pennsylvania with a love for low-level systems, data, and building things that actually work.
        </p>
        <p>
          I’ve built a FAT-based file system from scratch, worked on a custom Unix-like operating system, and I’m currently developing an AI-powered job scraper to automate the hunt for SWE internships.
        </p>
        <p>
          I care about clean design, strong engineering, and tools that are both useful and sharp. I’m always looking to learn more, meet curious people, and work on things that feel a little out of reach.
        </p>
      </div>
    </section>
  );
}
