import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-icons">
      <a href="mailto:tanvipa@seas.upenn.edu" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
      <a href="https://github.com/tanvipabbathi1" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/tanvi-pabbathi-3ba899205/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
}
