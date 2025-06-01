import './Projects.css';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'PennOS',
      desc: 'Unix-Like OS built on top of Linux',
      tech: ['C', 'multithreading', 'Signal Handling', 'FAT File System', 'Custom Shell'],
      highlights: [
        'Engineered FAT parsing and in-memory file system structures, enabling real time access to 100+ files',
        'Implemented file creation, deletion, and block-level data read/write with <1ms average access time in tests',
        'Designed and maintained a dynamic file descriptor table supporting 32+ concurrent open files with tracking'
      ]
    },
    {
      title: 'Job Scraper (In Progress)',
      desc: 'Scrapes internship listings and sends high-match alerts',
      tech: ['Python', 'BeautifulSoup', 'scikit-learn', 'SQLite', 'SMTP'],
      highlights: [
        'Scrapes internship listings with BeautifulSoup',
        'Ranks with keyword and NLP matching',
        'Sends email alerts for top matches',
        'Stores data in SQLite for quick access',
        'Modular scraper supports multiple sources'
      ]
    },
    {
      title: 'HarvestMatch',
      desc: 'Visualizes crop-climate compatibility across U.S. states for data-driven agricultural planning',
      tech: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'MongoDB', 'Recharts', 'D3.js', 'Python'],
      highlights: [
        'Engineered interactive U.S. crop map with dynamic filtering across 6+ pages and crop insights',
        'Processed 4M+ rows of USDA and NOAA data to match crops with environmental conditions',
        'Reduced query times by 200–300% via caching, indexed joins, and materialized views',
      ]
    },
    {
      title: 'Spotify Recommender',
      desc: 'GNN-based playlist recommender trained on 1M playlists',
      tech: ['Python', 'Spotify API', 'NetworkX', 'Parquet', 'PyTorch'],
      highlights: [
        'Modeled bipartite graph with track and playlist nodes for edge prediction',
        'Converted JSON to Parquet, reducing dataset size by 400%',
        'Currently prototyping GNN-based edge prediction model'
      ]
    },
    {
    title: 'NFL On Crime',
    desc: 'Analyzed crime trends in Baltimore around NFL game days using spatial and time series modeling',
    link: 'https://github.com/tanvipabbathi1/NFLOnCrime',
    tech: ['Python', 'Pandas', 'GeoPandas', 'scikit-learn', 'shapefiles'],
    highlights: [
      'Merged 50K+ crime reports with NFL game schedules and geospatial shapefiles',
      'Built time series model to predict high-crime days, using linear regression as a baseline',
      'Explored correlations between major sporting events and local crime fluctuations'
    ]
  },   
    {
      title: 'S&P 500 Macro Forecasting',
      desc: 'Built predictive models to analyze the impact of macroeconomic indicators on S&P 500 movement',
      link: 'https://github.com/tanvipabbathi1/S-P-500-Macro-Forecasting',
      tech: ['R', 'Tidyverse', 'ggplot2', 'LASSO', 'Logistic Regression'],
      highlights: [
        'Used Bloomberg and FRED datasets to compile 100+ macroeconomic features including TSA traffic, Fed rate, and sector-level spending',
        'Built logistic regression models to predict daily directional movement of the S&P 500',
        'Evaluated model interpretability and tested transformations (Box-Cox, log, square root)'
      ]
    }
  ];

  return (
    <section className="projects-wrapper">
      <h2 className="projects-heading">Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tech.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
            <ul className="project-highlights">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {project.link && (
              <div className="project-link">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
