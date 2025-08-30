import '../../CSSFiles/USAGermanyExperiencePage.css';
import { useState } from 'react';
import HomePageHeader from './HomePageHeader';

function USAGermanyExperiencePage() {
  const experiences = {
    USA: [
      {
        company: "TechCorp",
        position: "Software Engineer",
        year: 2023,
        details: "Worked on cloud infrastructure and optimized performance by 30%."
      },
      {
        company: "InnovateX",
        position: "Frontend Developer",
        year: 2022,
        details: "Built responsive web apps using React and Tailwind CSS."
      }
    ],
    Germany: [
      {
        company: "AutoSoft",
        position: "Backend Developer",
        year: 2021,
        details: "Developed APIs in Java and improved database efficiency."
      }
    ]
  };

  const [currentCountry, setCurrentCountry] = useState('USA');

  const countries = Object.keys(experiences);

  return (
    <>
    <HomePageHeader option="2"/>
    <div className="carousel-container">
      <h2 className="page-title">International Experience</h2>

      {/* Carousel controls */}
      <div className="carousel-controls">
        {countries.map(country => (
          <button
            key={country}
            className={currentCountry === country ? 'active' : ''}
            onClick={() => setCurrentCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Timeline slide */}
      <div className="carousel-slide">
        <div className="timeline">
          {experiences[currentCountry].map((exp, idx) => (
            <div key={idx} className="timeline-item show">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{currentCountry}</h3>
                <p><strong>Company:</strong> {exp.company}</p>
                <p><strong>Position:</strong> {exp.position}</p>
                <p><strong>Year:</strong> {exp.year}</p>
                <p>{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default USAGermanyExperiencePage;