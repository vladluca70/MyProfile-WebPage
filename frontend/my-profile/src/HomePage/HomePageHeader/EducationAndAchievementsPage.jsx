import '../../CSSFiles/EducationAndAchievementsPage.css';
import { useState } from 'react';
import HomePageHeader from './HomePageHeader';

const diplomaImages = import.meta.glob('../../assets/*.{jpeg,jpg,png}', { eager: true, import: 'default' });

function EducationAndAchievementsPage() {
  const categories = ['Education', 'Diplomas', 'Certificates', 'Awards'];
  const [currentCategory, setCurrentCategory] = useState('Education');

  const educationData = [
    { school: "University of XYZ", degree: "BSc Computer Science", period: "2018 - 2022", details: "Focused on software engineering and AI." },
    { school: "High School ABC", degree: "High School Diploma", period: "2014 - 2018", details: "Graduated with honors in science stream." }
  ];

  const diplomasData = [
    { img: diplomaImages['../../assets/dogcat.jpeg'], name: "Math Olympiad", year: 2020, score: "95/100" },
    { img: diplomaImages['../../assets/dogcat.jpeg'], name: "Programming Contest", year: 2021, score: "1st Place" },
    { img: diplomaImages['../../assets/dogcat.jpeg'], name: "Programming Contest", year: 2021, score: "1st Place" },
    { img: diplomaImages['../../assets/dogcat.jpeg'], name: "Programming Contest", year: 2021, score: "1st Place" },
    { img: diplomaImages['../../assets/dogcat.jpeg'], name: "Programming Contest", year: 2021, score: "1st Place" },
    { img: diplomaImages['../../assets/dogcat.jpeg'], name: "Programming Contest", year: 2021, score: "1st Place" }

  ];

  const certificatesData = [
    { img: diplomaImages['../../assets/dogcat.jpeg'], name: "React Certification", year: 2022, issuer: "Coursera" }
  ];

  const awardsData = [
    { title: "Best Student Award", year: 2021, description: "Awarded for outstanding academic performance." }
  ];

  return (
    <>
    <HomePageHeader/>
    <div className="carousel-container">
      <h2 className="page-title">Achievements</h2>

      <div className="carousel-controls">
        {categories.map(cat => (
          <button key={cat} className={currentCategory === cat ? 'active' : ''} onClick={() => setCurrentCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="carousel-slide">
        {/* Education */}
        {currentCategory === 'Education' && (
          <div className="timeline">
            {educationData.map((edu, idx) => (
              <div key={idx} className="timeline-item show">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{edu.school}</h3>
                  <p><strong>Degree:</strong> {edu.degree}</p>
                  <p><strong>Period:</strong> {edu.period}</p>
                  <p>{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Diplomas & Certificates */}
        {(currentCategory === 'Diplomas' || currentCategory === 'Certificates') && (
          <div className="flip-container">
            {(currentCategory === 'Diplomas' ? diplomasData : certificatesData).map((item, idx) => (
              <div key={idx} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="flip-card-back">
                    <h3>{item.name}</h3>
                    {item.year && <p><strong>Year:</strong> {item.year}</p>}
                    {item.score && <p><strong>Score:</strong> {item.score}</p>}
                    {item.issuer && <p><strong>Issuer:</strong> {item.issuer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Awards */}
        {currentCategory === 'Awards' && (
          <div className="timeline">
            {awardsData.map((award, idx) => (
              <div key={idx} className="timeline-item show">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{award.title}</h3>
                  <p><strong>Year:</strong> {award.year}</p>
                  <p>{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default EducationAndAchievementsPage;
