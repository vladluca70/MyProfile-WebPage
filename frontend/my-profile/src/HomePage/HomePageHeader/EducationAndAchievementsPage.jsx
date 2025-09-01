import '../../CSSFiles/EducationAndAchievementsPage.css';
import { useState } from 'react';
import HomePageHeader from './HomePageHeader';
const diplomaImages = import.meta.glob('../../assets/*.{jpeg,jpg,png}', { eager: true, import: 'default' });

function EducationAndAchievementsPage() {
  const categories = ['Education', 'Diplomas', 'Certificates', 'Awards'];
  const [currentCategory, setCurrentCategory] = useState('Education');

  const educationData = [
    { school: "Alexandru Ioan Cuza University, Iași", degree: "BSc Computer Science", period: "2022 - 2025", details: "Undergraduate studies in Computer Science with focus on Software Engineering, Web Development, Data Structures, Algorithms, Information Security and Machine Learning." },
    { school: "Petru Rareș National High School, Suceava", degree: "Mathematics-Computer Science, Intensive Computer Science Program", period: "2018 - 2022", details: "High school studies with emphasis on Mathematics, Computer Science, Physics and English." },
    { school: "Nicolae Labiș General School, Mălini, Suceava", degree: "General Education", period: "2010 - 2018", details: "Studied standard subjects including Mathematics, Romanian, English, French, Geography, History, Chemistry, Physics and Physical Education." }
  ];

  const diplomasData = [
    { img: '/diplomas/medalie_euclid1.jpg', name: "Programming Contest", year: 2021, score: "1st Place" },
    { img: '/diplomas/medalie_euclid_2.jpg', name: "Programming Contest", year: 2021, score: "1st Place" },
  ];

  const certificatesData = [
    { img: diplomaImages['../../assets/dogcat.jpeg'], name: "React Certification", year: 2022, issuer: "Coursera" }
  ];

  const awardsData = [
    { title: "High Distinction – National Baccalaureate Exam", period: 2022, description: ["Mathematics: 10/10", "Computer Science: 9.90/10", "Romanian Language and Literature: 9.75/10" ]},
    { title: "Multiple Academic Awards", period: "2010-2022", description: ["Almost 100 diplomas from school competitions." ]},
    { title: "National Euclid Mathematics Competition", period: "2014-2018", description: ["Awarded Second Place Medal, Third Place Medal and Honorable Mention" ]},
    
  ];

  return (
    <>
    <HomePageHeader option="2"/>
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
                  <p><strong>Period:</strong> {award.period}</p>
                  <p>
                    {award.description.map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </p>
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
