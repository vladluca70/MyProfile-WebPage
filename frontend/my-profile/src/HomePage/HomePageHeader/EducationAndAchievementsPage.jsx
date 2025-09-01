import '../../CSSFiles/EducationAndAchievementsPage.css';
import { useState } from 'react';
import HomePageHeader from './HomePageHeader';

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
    { img: '/diplomas/rezultate_bac.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/diploma_bac.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_cangurul_lingvist.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_euclid1.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_euclid3.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_euclid2.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_olimpiada_satelor.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/diploma_matemaicianul_clasei.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_franceza.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_nicolaus_copernic.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_equinox.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_rudolph.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_ciclu_gimnazial.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_gimnaziu.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_ciclu_inferior_liceu.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_liceu.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_fii.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/diploma_absolvire_liceu.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_smart1.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_smart2.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_smart3.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_smart4.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_smart5.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_smart6.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_smart7.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_smart8.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_smart9.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_lets_be_eco.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_nicanor_morosan.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_macheta.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_zilele_scolii.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/diploma_comper.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_bacau.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_comper1.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_comper2.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_eco_scoala.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_ghicitori.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_clasa_1.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_clasq3.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_clasa1.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_clasa_4.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_clasa2.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_clasa4.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_clasa5.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_clasa6.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/absolvire_clasa7.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_creatii_plastice.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_cu_europa_la_joaca.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_eurojunior2.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_europrescolarul.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_europrescolarul2.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_euroscolarul_clasa2.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/concurs_euroscolarul.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },
    { img: '/diplomas/.jpg', name: "", year: 20, score: "" },



  ];

  const certificatesData = [
        { img: '/diplomas/certificat_certiport.jpg', name: "", year: 20, issuer: "" },
        { img: '/diplomas/atestat_competente_profesionale.jpg', name: "", year: 20, score: "" },
        { img: '/diplomas/certificat_competenta_lingvistica.jpg', name: "", year: 20, score: "" },

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

        {/* Diplomas & Certificates - New Structure */}
        {(currentCategory === 'Diplomas' || currentCategory === 'Certificates') && (
          <div className="gallery-container">
            {(currentCategory === 'Diplomas' ? diplomasData : certificatesData).map((item, idx) => (
              <div key={idx} className="gallery-card">
                <div className="image-container">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="card-details">
                  <h3>{item.name}</h3>
                  {item.year && <p><strong>Year:</strong> {item.year}</p>}
                  {item.score && <p><strong>Score:</strong> {item.score}</p>}
                  {item.issuer && <p><strong>Issuer:</strong> {item.issuer}</p>}
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