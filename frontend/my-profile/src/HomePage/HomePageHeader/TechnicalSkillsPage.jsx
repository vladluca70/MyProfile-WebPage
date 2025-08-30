import '../../CSSFiles/TechnicalSkillsPage.css';
import HomePageHeader from './HomePageHeader';

function TechnicalSkillsPage() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", achievement: "Built a web scraper and automated automated tasks." },
        { name: "C/C++", achievement: "Implemented data structures and algorithms." },
        { name: "Java", achievement: "Created a desktop application with GUI." },
        { name: "JavaScript", achievement: "Solved functional programming exercises." },
        { name: "R", achievement: "." },
        { name: "Arduino C/C++", achievement: "." },
        { name: "Bash", achievement: "." },
        { name: "Haskell", achievement: "." },
        { name: "Scala", achievement: "." }
      ]
    },
    {
      category: "Python Libraries",
      items: [
        { name: "NumPy", achievement: "." },
        { name: "Pandas", achievement: "." },
        { name: "Scikit-learn", achievement: "." },
        { name: "Keras", achievement: "." },
        { name: "Matplotlib", achievement: "." },
        { name: "Flask", achievement: "." },
        { name: "Requests", achievement: "." },
        { name: "BeautifulSoup", achievement: "." },
        { name: "PIL/Pillow", achievement: "." },
        { name: "Tkinter", achievement: "." },
        { name: "FastAPI", achievement: "." }

      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", achievement: "Built responsive web pages." },
        { name: "CSS", achievement: "Styled multiple web projects with animations." },
        { name: "Tailwind CSS", achievement: "Created modern UI layouts." },
        { name: "React", achievement: "Developed backend scripts and forms." },
        { name: "Node.js", achievement: "." },
        { name: "Express", achievement: "." },
        { name: "Flask", achievement: "." },
        { name: "FastAPI", achievement: "." },
        { name: "Jinja2", achievement: "." },
        { name: "PHP", achievement: "." },
        { name: "Figma", achievement: "." },

      ]
    },
    {
      category: "Databases & Data Formats",
      items: [
        { name: "MongoDB", achievement: "Designed NoSQL schemas and queries." },
        { name: "MySQL", achievement: "Created relational databases and joins." },
        { name: "PostgreSQL", achievement: "." },
        { name: "JSON data handling", achievement: "." },

      ]
    },
    {
      category: "Deployment, Hosting & API Tools",
      items: [
        { name: "Vercel", achievement: "." },
        { name: "Render", achievement: "." },
        { name: "Postman API", achievement: "." },
      ]
    },
    {
      category: "Project Tools & Practices",
      items: [
        { name: "Git", achievement: "." },
        { name: "GitHub", achievement: "." },
        { name: "Jira", achievement: "." },
        { name: "SCRUM Methodology", achievement: "." },

      ]
    },
    {
      category: "Computer Science Fundamentals",
      items: [
        { name: "Data Structures", achievement: "." },
        { name: "Machine Learning Algorithms", achievement: "." },
        { name: "Machine Learning Fundamentals", achievement: "." },
        { name: "Information Security", achievement: "." },
        { name: "Software Engineering", achievement: "." },
        { name: "Mathematics", achievement: "." },
        { name: "Object-Oriented Programming", achievement: "." },
        { name: "Cryptography", achievement: "." },
        { name: "Web Technologies", achievement: "." },
        { name: "Algorithm Design", achievement: "." }
      ]
    },
    {
      category: "IDEs & Code Editors",
      items: [
        { name: "Visual Studio Code", achievement: "." },
        { name: "PyCharm", achievement: "." },
        { name: "Code::Blocks", achievement: "." },
        { name: "IntelliJ IDEA", achievement: "." },
        { name: "CLion", achievement: "." },
      ]
    },
    {
      category: "Operating Systems- Windows versions",
      items: [
        { name: "Windows 10", achievement: "." },
        { name: "Windows 7", achievement: "." },
        { name: "Windows XP", achievement: "." }
      ]
    },
    {
      category: "Operating Systems- Linux distributions",
      items: [
        { name: "Ubuntu", achievement: "." },
        { name: "Kali", achievement: "." },
        { name: "ParrotOS", achievement: "." },
        { name: "Deepin", achievement: "." },
        { name: "Garuda", achievement: "." },
        { name: "Manjaro", achievement: "." },
        { name: "Mint", achievement: "." },

      ]
    },
    {
      category: "Other Tools",
      items: [
        { name: "Cisco Packet Tracer", achievement: "." },
        { name: "Overleaf", achievement: "." },
        { name: "Docker", achievement: "." },
        { name: "Selenium", achievement: "." },

      ]
    }
  ];

  return (
    <>          
    <HomePageHeader option="2"/>
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
