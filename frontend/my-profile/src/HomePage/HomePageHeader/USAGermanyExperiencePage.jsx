import '../../CSSFiles/USAGermanyExperiencePage.css';
import { useState } from 'react';
import HomePageHeader from './HomePageHeader';

function USAGermanyExperiencePage() {
  const experiences = {
    USA: [
      {
        company: "Fairfield by Marriott Inn & Suites North Conway",
        location: "North Conway, New Hampshire",
        position: "Room Attendant",
        year: 2023,
        details: "Came to the US through the J-1 Visa program, worked in a multicultural team with colleagues from Romania, Brazil, USA, Mexico and Turkey, met deadlines, adapted quickly to a new work environment, and obtained a Social Security Number (SSN)."
      },
            {
        company: "Residence Inn by Marriott North Conway",
        location: "North Conway, New Hampshire",
        position: "Room Attendant",
        year: 2023,
        details: "Worked with colleagues from the USA, Romania, Jamaica and Peru, completed all tasks and met deadlines, invited by the manager to join due to high performance at Fairfield by Marriott Inn & Suites, participated through the J-1 Visa program and obtained a Social Security Number (SSN)."
      },
      {
        company: "Shalimar of India",
        location: "North Conway, New Hampshire",
        position: "Restaurant Utility Worker",
        year: 2023,
        details: "Worked with colleagues from India, completed all assigned tasks regardless of responsibility, participated through the J-1 Visa program and obtained a Social Security Number (SSN)."
      },
      {
        company: "Via Roma Pizza & Mediterranean",
        location: "North Conway, New Hampshire",
        position: "Restaurant Utility Worker",
        year: 2023,
        details: "Worked with colleagues from USA, Brazil, Saudi Arabia and Morocco, completed all assigned tasks regardless of responsibility, participated through the J-1 Visa program and obtained a Social Security Number (SSN)."
      }

    ],
    Germany: [
      {
        company: "Inselzeit Spiekeroog Ferienwohnung Ferienhaus Vermietungsservice",
        location: "Spiekeroog Island, Germany",
        position: "Room Attendant",
        year: 2024,
        details: "Worked effectively in a team with colleagues from Romania, Germany and Vietnam, met deadlines, handled client interactions, adapted quickly to a new environment and obtained a German Steuer ID."
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
                <p><strong>Location:</strong> {exp.location}</p>
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