import '../../CSSFiles/PublicationsPage.css';

function PublicationsPage() {
  const publications = [
    {
      title: "Publicație 1",
      author: "Autor 1",
      year: 2023,
      description: "O scurtă descriere a publicației 1.",
      pdf: "/pdfs/Publicatie1.pdf"
    },
    {
      title: "Publicație 2",
      author: "Autor 2",
      year: 2022,
      description: "O scurtă descriere a publicației 2.",
      pdf: "/pdfs/Publicatie2.pdf"
    },
    {
      title: "Publicație 3",
      author: "Autor 3",
      year: 2021,
      description: "O scurtă descriere a publicației 3.",
      pdf: "/pdfs/Publicatie3.pdf"
    },
        {
      title: "Publicație 3",
      author: "Autor 3",
      year: 2021,
      description: "O scurtă descriere a publicației 3.",
      pdf: "/pdfs/Publicatie3.pdf"
    },
    
  ];

  return (
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
  );
}

export default PublicationsPage;
