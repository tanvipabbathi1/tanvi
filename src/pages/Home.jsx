import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-box">
        <div className="home-left">
          <h1 className="home-name">Tanvi Pabbathi</h1>
          <p className="home-role">CS, Statistics @ Penn · Operations Intern @ Bracco</p>
          <p className="home-desc">
            I’m a curious builder, systems nerd, and relentless problem solver.
            Right now, I’m focused on turning ideas into tools that actually work.
          </p>

          <div className="home-socials">
            <a href="https://github.com/tanvipabbathi1" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tanvi-pabbathi-3ba899205/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:tanvipa@seas.upenn.edu">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="home-right">
          <img src="/profile.JPEG" alt="Tanvi Pabbathi" className="home-image" />
        </div>
      </div>
    </div>
  );
}
