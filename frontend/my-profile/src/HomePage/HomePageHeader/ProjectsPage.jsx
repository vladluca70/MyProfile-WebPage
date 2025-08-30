import '../../CSSFiles/ProjectsPage.css';
import HomePageHeader from './HomePageHeader';

function ProjectsPage() {
    const projects = [
        {
            title: "PetPredict",
            technologies: "React, HTML, CSS, Node.js, Express, Python (Pandas, scikit-learn, PyTorch, Flask, joblib), Selenium, MongoDB",
            description: "This web application allows users to make pet predictions. Users can either enter numeric data about a pet, which is processed by a pre-trained regression model, or upload an image, which is classified by a ResNet50 neural network. All predictions are handled on a Flask backend, and user credentials are securely hashed and stored in MongoDB.",
            behind_the_code: "Full-stack development, Data processing, User authentication, ML model integration, Joblib usage, Selenium testing, Interactive UI",
            links: [
                "https://github.com/vladluca70/PetPredict",
            ]
        },
        {
            title: "Machine Learning Assistant",
            technologies: "Python, HTML, CSS, Flask, Jinja2, matplotlib",
            description: "Machine Learning Assistant is an educational web app that teaches ML algorithms from scratch, including AdaBoost, k-NN, k-Means, Naive Bayes, Optimal Bayes, and Logistic Regression. Each algorithm has a theory page with step-by-step explanations, key terms, and biblical verse analogies, and a practical page where users input datasets and see dynamic, iteration-by-iteration visualizations powered by Jinja2. The platform makes learning Machine Learning interactive, clear, and engaging.",
            behind_the_code: "Python development, Data processing & handling, Machine Learning implementation, Algorithm implementation, Project structuring, Web development, Interactive visualization, ",
            links: [
                "https://github.com/vladluca70/Machine-Learning-Assistant",
                "https://www.youtube.com/watch?v=I7poGoGNP1Q&t=1s"
            ]
        },
        {
            title: "Dune- Board Game",
            technologies: "Python, JSON, Jira",
            description: "Worked in a team of 30 colleagues to develop a digital version of the Dune board game, using Scrum methodology and Jira for project management. As part of the AI team, I implemented game rules in Python, managed game state with JSON, and developed adaptive AI logic based on in-game context and difficulty levels.",
            behind_the_code: "Adaptive AI, AI logic, Team collaboration, Scrum methodology, Jira management, Python development, JSON handling, Code modularity, Algorithm design, Version control",
            links: [
                "https://github.com/AAAMON/IP-2A3-2024/tree/AI",
                "https://github.com/adiaioana/IP-2A3-2024/tree/main"
            ]
        },
        {
            title: "NumSeq- Python Library",
            technologies: "Python",
            description: "A public Python library available on PyPI with over 60 functions for generating commonly used mathematical number sequences such as Tribonacci, Mersenne, Collatz, Motzkin, Armstrong, and Harshad numbers. It also provides operations on these sequences, including addition, concatenation, and logical operations like AND, OR, XOR, making it a versatile tool for developers and researchers.",
            behind_the_code: "Python development, Algorithm implementation, Package management & distribution, Problem-solving in number theory",
            links: ["https://github.com/vladluca70/NumSeq--Python-Library",
                "https://pypi.org/project/numseq/0.1.1/"
            ]
        },
        {
            title: "Currency Converter",
            technologies: "Python (requests, BeautifulSoup, tkinter)",
            description: "The Currency Converter works by fetching the latest exchange rates from a public website, extracting the currency names and their values, and storing them internally. When a user enters an amount and chooses the currencies, the app calculates the converted value using the most recent rates. This way, conversions are accurate, up-to-date, and easy to perform for any supported currency.",
            behind_the_code: "Web crawler, Python development, Data fetching, Visual design",
            links: [
                "https://github.com/vladluca70/Currency-Converter"
            ]
        },
        {
            title: "Fox and Hounds – C/C++ Strategy Game",
            technologies: "C/C++ (graphics, cstdlib, time, stdlib, mmsystem, windows, cmath, cstring, iostream, stdio, bits/stdc++, conio, dos)",
            description: "Co-developed a C++ board game with a neon-themed interface, featuring three difficulty levels: Easy (random moves), Medium (a mix of optimal and random moves), and Hard (AI evaluates all possible moves to select the best one). Players can only play as the Hounds against the Fox, with intuitive turn-based gameplay and a dedicated instruction screen for new players.",
            behind_the_code: "C/C++ development, Game logic, AI decision-making algorithms, collaborative software development, Interactive UI, Testing strategies",
            links: [
                "https://github.com/vladluca70/Fox_and_hounds",
            ]
        },
        {
            title: "",
            technologies: "",
            description: "",
            behind_the_code: "",
            links: [
                "",
                ""
            ]
        },
        {
            title: "",
            technologies: "",
            description: "",
            behind_the_code: "",
            links: [
                "",
                ""
            ]
        }
    ];

    return (
        <>
            <HomePageHeader option="2"/>
            <div className="projects-container">
                <h2 className="page-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p><strong>Technologies:</strong> {project.technologies}</p>
                            <p><strong>Description:</strong> {project.description}</p>
                            <p><strong>Behind the code:</strong> {project.behind_the_code}</p>
                            <p><strong>Links:</strong></p>
                            <ul className="project-links">
                                {project.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectsPage;
