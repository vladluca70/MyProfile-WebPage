import '../../CSSFiles/TechnicalSkillsPage.css';
import HomePageHeader from './HomePageHeader';

function TechnicalSkillsPage() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", achievement: "I have analyzed data, developed web applications, manipulated files, and implemented algorithms and machine learning." },
        { name: "C/C++", achievement: "I have implemented algorithms, developed 2D games, created various applications and built efficient software." },
        { name: "Java", achievement: "I have developed applications, implemented algorithms, worked with databases and created multithreaded programs." },
        { name: "JavaScript", achievement: "I have built interactive web applications, manipulated the DOM, implemented APIs, and developed dynamic front-end features." },
        { name: "R", achievement: "I have read data from files, visualized data, created charts and applied machine learning models." },
        { name: "SQL", achievement: "I have written queries, managed databases, retrieved and manipulated data and designed database structures." },
        { name: "Arduino C/C++", achievement: "I have programmed Arduino boards, interfaced with sensors and actuators, controlled hardware and developed embedded projects." },
        { name: "Bash", achievement: "I have written Bash scripts, automated tasks, managed files and directories and handled system administration tasks." },
        { name: "Julia", achievement: "I have analyzed data, performed numerical computations, created visualizations and implemented machine learning models." },
        { name: "Haskell", achievement: "I have implemented functional programs, designed algorithms, handled data transformations and explored mathematical computations." },
        { name: "Scala", achievement: "I have written programs, processed data and built simple applications." }
      ]
    },
    {
      category: "Python Libraries",
      items: [
        { name: "NumPy", achievement: "I have performed numerical computations, manipulated arrays and processed data." },
        { name: "Pandas", achievement: "I have loaded and cleaned data, analyzed datasets and performed data manipulation." },
        { name: "Scikit-learn", achievement: "I have implemented machine learning models, trained and evaluated algorithms and performed data preprocessing." },
        { name: "Keras", achievement: "I have built neural networks, trained deep learning models and performed predictions on datasets." },
        { name: "Matplotlib", achievement: "I have created scatter plots from datasets, visualized decision boundaries for AdaBoost, plotted centroids for KMeans and displayed points with different shapes and colors for KNN." },
        { name: "Flask", achievement: "I have developed web applications, created APIs, handled HTTP requests, and managed server-side logic." },
        { name: "Requests", achievement: "I have used the Requests library to send HTTP requests and create a web crawler." },
        { name: "BeautifulSoup", achievement: "I have used BeautifulSoup to parse HTML, extract data from web pages and build web scrapers." },
        { name: "PIL/Pillow", achievement: "I have opened, edited, and saved images, applied filters and performed basic image processing tasks." },
        { name: "Tkinter", achievement: "I have created graphical user interfaces, designed windows and widgets and handled user interactions." },
        { name: "FastAPI", achievement: "I have developed web APIs, handled HTTP requests, implemented routing and built backend services." }

      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", achievement: "I have structured web pages, created forms and tables and added content." },
        { name: "CSS", achievement: "I have styled web pages, designed layouts and customized the appearance of elements." },
        { name: "Tailwind CSS", achievement: "I have styled web pages and created responsive layouts." },
        { name: "React", achievement: "I have created dynamic web pages, developed reusable components and handled user interactions." },
        { name: "Node.js", achievement: "I have built server-side applications, handled HTTP requests and managed back-end logic." },
        { name: "Express", achievement: "I have created web servers, defined routes and handled API requests." },
        { name: "Flask", achievement: "I have developed web applications, created APIs, handled HTTP requests, and managed server-side logic." },
        { name: "FastAPI", achievement: "I have developed web APIs, handled HTTP requests, implemented routing and built backend services." },
        { name: "Jinja2", achievement: "I have created dynamic web pages, rendered data from the server and designed templates for displaying content." },
        { name: "PHP", achievement: "I have developed web pages, handled forms and user input and interacted with databases." },
        { name: "Figma", achievement: "I have designed user interfaces, created prototypes and planned layouts and visuals." },

      ]
    },
    {
      category: "Databases & Data Formats",
      items: [
        { name: "MongoDB", achievement: "I have created and managed databases, performed queries and handled data collections." },
        { name: "MySQL", achievement: "I have created and managed databases, written queries and handled data retrieval and updates." },
        { name: "PostgreSQL", achievement: "I have created and managed databases, written queries and handled data retrieval and updates." },
        { name: "JSON data handling", achievement: "I have read, parsed, and manipulated JSON data, and extracted or modified information as needed." },
        { name: "CSV data handling", achievement: "I have read, written, and processed CSV files, and extracted or modified data for analysis." },
      ]
    },
    {
      category: "Deployment, Hosting & API Tools",
      items: [
        { name: "Vercel", achievement: "I have deployed web applications, hosted projects and managed live sites." },
        { name: "Render", achievement: "I have deployed applications, hosted web projects and managed servers." },
        { name: "Postman API", achievement: "I have tested APIs, sent HTTP requests and inspected responses." },
      ]
    },
    {
      category: "Project Tools & Practices",
      items: [
        { name: "Git", achievement: "I have tracked changes, managed versions and collaborated on projects." },
        { name: "GitHub", achievement: "I have hosted repositories, collaborated on projects and managed version control." },
        { name: "Jira", achievement: "I have managed tasks, tracked project progress and organized workflows." },
        { name: "SCRUM Methodology", achievement: "I have collaborated with other teams, worked effectively in a team, managed organized tasks, planned sprints, and met deadlines." },

      ]
    },
    {
      category: "Computer Science Fundamentals",
      items: [
        { name: "Data Structures", achievement: "I have implemented and used arrays, linked lists, stacks, queues, trees and hash tables to solve problems efficiently." },
        { name: "Machine Learning Algorithms", achievement: "I have implemented machine learning algorithms, trained models, evaluated their performance and applied them to solve real-world problems." },
        { name: "Machine Learning Fundamentals", achievement: "I have studied machine learning fundamentals, understood key concepts, explored supervised and unsupervised learning and learned how to train and evaluate models." },
        { name: "Information Security", achievement: "I have studied information security, learned about access control, explored different types of attacks and understood best practices for protecting data and systems." },
        { name: "Software Engineering", achievement: "I have studied software engineering, learned about important methodologies, explored design patterns and understood best practices for software development." },
        { name: "Mathematics", achievement: "I have studied mathematical analysis, linear algebra and computational aspects in number theory." },
        { name: "Object-Oriented Programming", achievement: "I have studied classes and objects, and explored concepts like inheritance, encapsulation and polymorphism." },
        { name: "Cryptography", achievement: "I have studied cryptography, including public and private keys, hybrid keys, encryption, hash functions and one-time pad techniques." },
        { name: "Web Technologies", achievement: "I have studied web technologies, including HTML, CSS, JavaScript, frameworks and web development principles." },
        { name: "Algorithm Design", achievement: "I have studied algorithm design, learned problem-solving strategies, analyzed complexity and explored efficient algorithms for different tasks." }
      ]
    },
    {
      category: "IDEs & Code Editors",
      items: [
        { name: "Visual Studio Code", achievement: "I have used Visual Studio Code to write, debug and manage code projects efficiently." },
        { name: "PyCharm", achievement: "I have used PyCharm to write, debug and manage Python projects efficiently." },
        { name: "Code::Blocks", achievement: "I have used Code::Blocks to write, compile and debug C/C++ programs efficiently." },
        { name: "IntelliJ IDEA", achievement: "I have used IntelliJ IDEA to write, debug and manage Java projects efficiently." },
        { name: "CLion", achievement: "I have used CLion to write, debug and manage C/C++ projects efficiently." },
        { name: "RStudio", achievement: "I have used RStudio to write, run and manage R scripts and data analysis projects efficiently." },
        { name: "Arduino IDE", achievement: "I have used Arduino IDE to write, compile and upload code to Arduino boards for hardware projects." },      
      ]
    },
    {
      category: "Operating Systems- Windows versions",
      items: [
        { name: "Windows XP", achievement: "Basic user experience and system navigation." },
        { name: "Windows Vista", achievement: "General familiarity with interface and basic operations." },
        { name: "Windows 7", achievement: "Standard user proficiency and everyday tasks." },
        { name: "Windows 10", achievement: "Regular use with basic system administration and disk partitioning for Linux dual-boot setups." }
      ]
    },
    {
      category: "Operating Systems- Linux distributions",
      items: [
        { name: "Ubuntu", achievement: "Package management, file permissions configuration, coding environment setup and shell scripting." },
        { name: "Kali", achievement: "Experience with penetration testing tools, package management, permissions configuration and coding." },
        { name: "ParrotOS", achievement: " Experience with security testing tools, package management, system permissions and development environment setup." },
        { name: "Deepin", achievement: "Experience with elegant Linux desktop environment, coding workflows, permissions management and package administration." },
        { name: "Garuda", achievement: "Experience with Arch-based distribution, gaming-optimized environment, package management and system configuration." },
        { name: "Manjaro", achievement: "Experience with user-friendly Arch-based distribution, AUR package management, system configuration and development setup." },
        { name: "Mint", achievement: "Experience with beginner-friendly Ubuntu-based distribution, package management, system configuration and coding environment." },

      ]
    },
    {
      category: "Other Tools",
      items: [
        { name: "Cisco Packet Tracer", achievement: "Experience with network simulation, router/switch configuration, topology design and protocol testing." },
        { name: "Overleaf", achievement: "Experience writing collaborative documents, team-based LaTeX projects and creating graphics/charts for technical publications." },
        { name: "Docker", achievement: "Basic experience with Dockerfile creation and container setup for streamlined project deployment." },
        { name: "Selenium", achievement: "Experience with web page testing and automated browser interactions." },

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
