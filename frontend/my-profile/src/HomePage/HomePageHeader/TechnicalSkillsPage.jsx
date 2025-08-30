import '../../CSSFiles/TechnicalSkillsPage.css';
import HomePageHeader from './HomePageHeader';

function TechnicalSkillsPage() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", achievement: "Built a web scraper and automated automated tasks." },
        { name: "C++", achievement: "Implemented data structures and algorithms." },
        { name: "Java", achievement: "Created a desktop application with GUI." },
        { name: "Haskell", achievement: "Solved functional programming exercises." },
        { name: "Scala", achievement: "Worked on data processing pipelines." },
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", achievement: "Built responsive web pages." },
        { name: "CSS", achievement: "Styled multiple web projects with animations." },
        { name: "Tailwind CSS", achievement: "Created modern UI layouts." },
        { name: "PHP", achievement: "Developed backend scripts and forms." },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", achievement: "Designed NoSQL schemas and queries." },
        { name: "MySQL", achievement: "Created relational databases and joins." },
      ]
    }
  ];

  return (
    <>          
    <HomePageHeader/>
    <div className="skills-container">
      <h2 className="page-title">Technical Skills</h2>
      {skills.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="skills-grid">
            {category.items.map((item, i) => (
              <div key={i} className="skill-card">
                <div className="skill-card-inner">
                  {/* Front */}
                  <div className="skill-card-front">
                    <h4>{item.name}</h4>
                  </div>
                  {/* Back */}
                  <div className="skill-card-back">
                    <p>{item.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default TechnicalSkillsPage;
