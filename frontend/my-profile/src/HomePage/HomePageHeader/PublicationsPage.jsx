import '../../CSSFiles/PublicationsPage.css';
import HomePageHeader from './HomePageHeader';

function PublicationsPage() {
  const publications = [
    {
      title: "Phrasal Verbs- Volume 1",
      author: "Vlăduț Luca",
      year: 2024,
      description: "This book provides clear explanations of English phrasal verbs, presenting their multiple meanings and offering several example sentences with Romanian translations for each verb.",
      pdf: "/publications/phrasal_verbs_vol_1.pdf"
    },
    {
      title: "Phrasal Verbs- Volume 2",
      author: "Vlăduț Luca",
      year: 2025,
      description: "This continuation of the first volume further explores English phrasal verbs, explaining their meanings and providing multiple example sentences with Romanian translations for each verb.",
      pdf: "/publications/phrasal_verbs_vol_2.pdf"
    },
    {
      title: "Phrasal Verbs- Volume 3",
      author: "Vlăduț Luca",
      year: 2025,
      description: "The third volume in this series continues to cover English phrasal verbs, detailing their meanings and providing several example sentences with Romanian translations for each verb.",
      pdf: "/publications/phrasal_verbs_vol_3.pdf"
    },
        {
      title: "Phrasal Verbs- Volume 1",
      author: "Vlăduț Luca",
      year: 2025,
      description: "The fourth volume in this series completes the collection of English phrasal verbs, explaining their meanings and providing multiple example sentences with Romanian translations for each verb.",
      pdf: "/publications/phrasal_verbs_vol_4.pdf"
    },
    
  ];

  return (
    <>          
    <HomePageHeader option="2"/>
    <div className="publications-container">
      <h2 className="page-title">My Publications</h2>
      <div className="publications-grid">
        {publications.map((pub, index) => (
          <div key={index} className="pub-card">
            <div className="pub-card-inner">
              {/* Front */}
              <div className="pub-card-front">
                <h3>{pub.title}</h3>
                <p><strong>Author:</strong> {pub.author}</p>
                <p><strong>Year:</strong> {pub.year}</p>
                <p>{pub.description}</p>
              </div>
              {/* Back */}
              <div className="pub-card-back">
                <a href={pub.pdf} download className="download-btn">
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default PublicationsPage;
