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
    { img: '/diplomas/medalie_euclid_2.jpg', name: "Euclid National Mathematics Competition", year: 2013, score: "Second Place" },
    { img: '/diplomas/medalie_euclid1.jpg', name: "Euclid National Mathematics Competition", year: 2015, score: "Third Place" },
    { img: '/diplomas/rezultate_bac.jpg', name: "Baccalaureate Exam Results", year: 2022, score: "9.88/10" },
    { img: '/diplomas/diploma_bac.jpg', name: "Baccalaureate Diploma", year: 2022, score: "9.88/10" },
    { img: '/diplomas/concurs_cangurul_lingvist.jpg', name: "Linguistic Kangaroo Competition – French", year: "2014-2015", score: "137.50" },
    { img: '/diplomas/concurs_euclid1.jpg', name: "Euclid National Mathematics Competition", year: 2014, score: "First Place" },
    { img: '/diplomas/concurs_euclid3.jpg', name: "Euclid National Mathematics Competition", year: 2013, score: "Second Place" },
    { img: '/diplomas/concurs_euclid2.jpg', name: "Euclid National Mathematics Competition", year: 2013, score: "Special Mention" },
    { img: '/diplomas/concurs_olimpiada_satelor.jpg', name: "National Mathematics Competition 'Romanian Villages Olympiad'", year: "2017-2018", score: "Second Place" },
    { img: '/diplomas/diploma_matemaicianul_clasei.jpg', name: "Merit Diploma 'Class Mathematician'", year: 2014, score: "Merit" },
    { img: '/diplomas/concurs_franceza.jpg', name: "Concours de dessin 'Les chansons enfantines française'", year: 2014, score: "Participation" },
    { img: '/diplomas/concurs_nicolaus_copernic.jpg', name: "National Inter-School Competition ‘Nicolaus Copernicus’ as a member of the team 'Nicolae Labiș Middle School, Mălini'", year: 2015, score: "Participation" },
    { img: '/diplomas/concurs_equinox.jpg', name: "Equinox Astronomy Competition", year: 2011, score: "Mention" },
    { img: '/diplomas/concurs_rudolph.jpg', name: "Rudolph National Mathematics Competition", year: 2011, score: "100/100" },
    { img: '/diplomas/absolvire_ciclu_gimnazial.jpg', name: "Lower Secondary School Graduation Diploma", year: 2018, score: "-" },
    { img: '/diplomas/absolvire_gimnaziu.jpg', name: "Lower Secondary School Graduation Diploma", year: 2018, score: "9.97/10" },
    { img: '/diplomas/absolvire_ciclu_inferior_liceu.jpg', name: "Lower Cycle High School Graduation Diploma", year: 2021, score: "-" },
    { img: '/diplomas/absolvire_liceu.jpg', name: "High School Graduation Diploma", year: 2022, score: "-" },
    { img: '/diplomas/absolvire_fii.jpg', name: "Bachelor’s Degree", year: 2025, score: "-" },
    { img: '/diplomas/diploma_absolvire_liceu.jpg', name: "High School Graduation Diploma", year: 2022, score: "-" },
    { img: '/diplomas/concurs_smart1.jpg', name: "SMART Competition – French Language", year: "2013-2014", score: "90/100" },
    { img: '/diplomas/concurs_smart2.jpg', name: "SMART Competition – Mathematics", year: "2013-2014", score: "92/100" },
    { img: '/diplomas/concurs_smart3.jpg', name: "SMART Competition – Romanian Language", year: "2010-2011", score: "100/100" },
    { img: '/diplomas/concurs_smart4.jpg', name: "SMART Competition – Mathematics", year: "2011-2012", score: "95/100" },
    { img: '/diplomas/concurs_smart5.jpg', name: "SMART Competition – General Culture", year: "2011-2012", score: "100/100" },
    { img: '/diplomas/concurs_smart6.jpg', name: "SMART Competition – Tie-Break Exam", year: "2011-2012", score: "100/100" },
    { img: '/diplomas/concurs_smart7.jpg', name: "SMART Competition – Tie-Break Exam", year: "2010-2011", score: "90/100" },
    { img: '/diplomas/concurs_smart8.jpg', name: "SMART Competition – Romanian Language", year: "2011-2012", score: "100/100" },
    { img: '/diplomas/concurs_smart9.jpg', name: "SMART Competition – French Language", year: "2013-2014", score: "100/100" },
    { img: '/diplomas/concurs_lets_be_eco.jpg', name: "Let’s Be Eco Competition Diploma", year: 2017, score: "-" },
    { img: '/diplomas/concurs_nicanor_morosan.jpg', name: "Nicanor Morosan Mathematics Competition", year: 2018, score: "Participation" },
    { img: '/diplomas/concurs_macheta.jpg', name: "Certificate of Participation and Presentation of a Paper at the Scientific Communications Session", year: 2015, score: "Participation" },
    { img: '/diplomas/concurs_zilele_scolii.jpg', name: "Certificate of Participation in School Days Activities", year: 2018, score: "Participation" },
    { img: '/diplomas/diploma_comper.jpg', name: "COMPER Competition – Communication Section", year: "2013-2014", score: "95/100" },
    { img: '/diplomas/concurs_bacau.jpg', name: "National Competition 'Spring Holidays'", year: 2011, score: "First Place" },
    { img: '/diplomas/concurs_comper1.jpg', name: "COMPER Competition – Mathematics Section", year: "2014-2015", score: "Participation" },
    { img: '/diplomas/concurs_comper2.jpg', name: "COMPER Competition – Mathematics Section", year: "2013-2014", score: "Special Mention" },
    { img: '/diplomas/concurs_eco_scoala.jpg', name: "Diploma for Group Activity in the Environmental Competition 'ECO-SCHOOL'", year: 2013, score: "Second Place" },
    { img: '/diplomas/concurs_ghicitori.jpg', name: "Diploma of the National Competition 'The Book – A Window Open to the World'", year: 2012, score: "First Place" },
    { img: '/diplomas/concurs.jpg', name: "International Competition 'Have You Seen the Bunny?'", year: 2015, score: "Mention" },
    { img: '/diplomas/absolvire_clasa_1.jpg', name: "First Grade Graduation Diploma", year: 2011, score: "First Place" },
    { img: '/diplomas/absolvire_clasa1.jpg', name: "First Grade Graduation Diploma", year: 2011, score: "First Place" },
    { img: '/diplomas/absolvire_clasa2.jpg', name: "Second Grade Graduation Diploma", year: 2012, score: "First Place" },
    { img: '/diplomas/absolvire_clasq3.jpg', name: "Third Grade Graduation Diploma", year: 2013, score: "First Place" },
    { img: '/diplomas/absolvire_clasa_4.jpg', name: "Fourth Grade Graduation Diploma", year: 2014, score: "First Place" },
    { img: '/diplomas/absolvire_clasa4.jpg', name: "Fourth Grade Graduation Diploma", year: 2014, score: "First Place" },
    { img: '/diplomas/absolvire_clasa5.jpg', name: "Fifth Grade Graduation Diploma", year: 2015, score: "First Place" },
    { img: '/diplomas/absolvire_clasa6.jpg', name: "Sixth Grade Graduation Diploma", year: 2016, score: "First Place" },
    { img: '/diplomas/absolvire_clasa7.jpg', name: "Seventh Grade Graduation Diploma", year: 2017, score: "Second Place" },
    { img: '/diplomas/concurs_creatii_plastice.jpg', name: "County Competition 'A Martisor, a Flower, a Gift for Everyone' – Visual Arts Section", year: 2012, score: "Participation" },
    { img: '/diplomas/concurs_cu_europa_la_joaca.jpg', name: "International Skills Assessment Competition 'With Europe… at Play'", year: 2012, score: "First Place" },
    { img: '/diplomas/concurs_eurojunior2.jpg', name: "EuroJunior National Interdisciplinary Competition", year: "2010-2011", score: "Participation" },
    { img: '/diplomas/concurs_europrescolarul.jpg', name: "International Skills Assessment Competition 'With Europe… at Play'", year: 2010, score: "Participation" },
    { img: '/diplomas/concurs_europrescolarul2.jpg', name: "International Skills Assessment Competition 'With Europe… at Play'", year: 2010, score: "Participation" },
    { img: '/diplomas/concurs_euroscolarul_clasa2.jpg', name: "International Skills Assessment Competition 'With Europe… at Play'", year: 2011, score: "First Place" },
    { img: '/diplomas/concurs_euroscolarul.jpg', name: "International Skills Assessment Competition 'With Europe… at Play'", year: 2010, score: "Second Place" },
    { img: '/diplomas/concurs_gama.jpg', name: "Gama Competition", year: 2009, score: "First Place" },
    { img: '/diplomas/concurs_voinicel.jpg', name: "Voinicel National Competition", year: 2011, score: "First Place" },
    { img: '/diplomas/concurs_vin_sarbatorile.jpg', name: "'Vin Sarbatorile' National Competition", year: 2010, score: "Third Place" },
    { img: '/diplomas/concurs_piciul.jpg', name: "Piciul National Competition", year: 2012, score: "First Place" },
    { img: '/diplomas/concurs_micul_crestin.jpg', name: "International Skills Assessment Competition 'With Europe… at Play'", year: 2011, score: "First Place" },
    { img: '/diplomas/concurs_martie.jpg', name: "'March- Joy and Colour' National Competition", year: 2011, score: "Participation" },
    { img: '/diplomas/concurs_hm.jpg', name: "Diploma for Group Activity", year: 2013, score: "First Place" },
    { img: '/diplomas/concurs_mh.jpg', name: "Diploma for Group Activity", year: 2013, score: "First Place" }



  ];

  const certificatesData = [
        { img: '/diplomas/certificat_certiport.jpg', name: "IC3 Digital Literacy Certification", year: 2021, issuer: "CERTIPORT" },
        { img: '/diplomas/atestat_competente_profesionale.jpg', name: "Certificate of Professional Competence", year: 2022, issuer: "Petru Rareș National High School, Suceava" },
        { img: '/diplomas/certificat_competenta_lingvistica.jpg', name: "Certificate of Linguistic Competence", year: 2022, score: "Petru Rareș National High School, Suceava" },

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