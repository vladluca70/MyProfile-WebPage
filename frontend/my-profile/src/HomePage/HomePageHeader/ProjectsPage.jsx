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
            behind_the_code: "Adaptive AI, AI logic, Team collaboration, Scrum methodology, Jira management, Python development, JSON handling, Code modularity, Algorithm design, Version control, Time management",
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
            title: "Neural Networks",
            technologies: "Python (Tensorflow, Keras, NumPy, PIL/Pillow, )",
            description: "Trains and evaluates various machine learning models using TensorFlow/Keras. The projects include: linear regression to fit y = 2x + 1, binary classification on 2D data, feedforward networks approximating quadratic and sine functions, binary threshold classification, and a convolutional neural network for classifying cat and dog images.",
            behind_the_code: "Data preparation, Data processing, Model design, Neural network training, Model evaluation",
            links: [
                "https://github.com/vladluca70/CodeMosaic/tree/main/NeuralNetworks"
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
            title: "IoT Project – Smart School Network & Impact in Football",
            technologies: "Cisco Packet Tracer, Overleaf, Microsoft PowerPoint",
            description: "Led a team of three in designing a smart school network using Cisco Packet Tracer, integrating IoT devices such as sensors, cameras, and smart displays to simulate a modern educational environment. Afterwards, I coordinated and documented a scientific research project on IoT applications in football, written in LaTeX and presented through a PowerPoint presentation.",
            behind_the_code: "Team coordinator, Research drafting, Team collaboration, Time management, Network design",
            links: [
                "https://github.com/vladluca70/IoT_Project",
                "https://www.overleaf.com/project/67e7bd34ef91cc3d3d928201"
            ]
        },
        {
            title: "CareLink- Project Contributor",
            technologies: ".NET, MediatR, Python, ML.NET",
            description: "I was invited by a university colleague to contribute to the development of a .NET application structured according to Clean Architecture principles. I implemented the Command Pattern and CQRS using MediatR, helping organize the application’s business logic. I also processed datasets from Kaggle using Python and built a regression model in ML.NET to predict the most common diseases, using a pipeline with the SDCA algorithm. Additionally, I wrote several integration tests to validate the functionality of the implemented components.",
            behind_the_code: "Team collaboration, Clean Architecture, Integration testing, Dataset processing, Time management",
            links: [
                "https://github.com/Mareantz/CareLink",
                "https://healthcaremanagement-fe.vercel.app/home"
            ]
        },
        {
            title: "Construction Connect",
            technologies: "PHP, HTML, CSS, JavaScript, MySQL",
            description: "I helped develop a web platform that makes it easy for people looking for home improvement work to connect with construction companies. Users can post announcements describing the work they need, and companies can respond with their proposals and pricing. The platform also keeps accounts and data secure while making the negotiation process simple and straightforward. Overall, it creates a smooth and friendly experience, helping clients find the right service providers quickly.",
            behind_the_code: "Team collaboration, Time management, SQL injection prevention, Interface design, Database design, User authentication, Gradient animations, Form handling",
            links: [
                "https://github.com/vladluca70/Web-Technologies",
                "https://www.youtube.com/watch?v=gywogtObqe8&t=8s"
            ]
        },
        {
            title: "Embedded Arduino Projects",
            technologies: "C/C++ Arduino",
            description: "I completed several small Arduino projects using basic components such as the development board, LEDs, and sensors for temperature, humidity, light, motion, buzzer, and push buttons. I combined these components to create various devices with different functionalities, experimenting with multiple sensor-actuator interactions and understanding how hardware and code work together to achieve specific behaviors.",
            behind_the_code: "Arduino programming, LED control, Sensor integration, Actuator interaction",
            links: [
                "---"
            ]
        },
        {
            title: "MERN Notes Application",
            technologies: "React, Node.js, Express, HTML, CSS, MongoDB, Postman API",
            description: "Developed a full-stack notes application that allows users to register, log in, and manage their personal notes. The app supports adding, fetching, and deleting notes, with a smooth communication between frontend and backend through REST API endpoints. The project also includes thorough testing of all endpoints to ensure reliable data handling and user experience.",
            behind_the_code: "User authentication, JSON data handling, React hooks, CRUD operations, Endpoint testing",
            links: [
                "https://github.com/vladluca70/MERN--NotesApp",
            ]
        },
        {
            title: "MERN- AIHomePredict",
            technologies: "React, Node.js, Express, HTML, CSS, Python(Pandas, scikit-learn, Flask, joblib), MongoDB",
            description: "This web application allows users to predict house prices. Users create an account and log in via an Express backend, while house details are submitted through a React form to a Flask server. The Flask server uses a pre-trained logistic regression model to generate predictions and returns the results to the frontend. User accounts are securely managed, with passwords hashed and stored in MongoDB.",
            behind_the_code: "Full-stack development, Data processing, ML model integration, User authentication",
            links: [
                "https://github.com/vladluca70/MERN-AIHomePredict"
            ]
        },
        {
            title: "CSProblemsPortal",
            technologies: "JavaScript, HTML, CSS",
            description: "CSProblemsPortal-WebPage is an educational site designed to help students understand introductory computer science concepts through a visual and interactive approach. It serves as a teaching aid for exploring problems, key terms, and practice exercises.",
            behind_the_code: "Interface design, Problem creation, Difficulty progression",
            links: [
                "https://github.com/vladluca70/CSProblemsPortal-WebPage",
                "https://cs-problems-portal-web-page-v26i-git-main-vladluca70s-projects.vercel.app/"
            ]
        },
        {
            title: "Custom Programming Language",
            technologies: "C/C++, YACC/Bison",
            description: "Custom Programming Language is a project where I designed and implemented a programming language from scratch, including parsing, semantic analysis, symbol tables, and AST evaluation. The language supports classes, functions, variables, control structures, and expressions, with a focus on modularity, correctness, and clear error reporting.",
            behind_the_code: "Grammar design, Parsing logic, Semantic analysis, Symbol table management, AST construction, Expression evaluation, Scope resolution, Function & class handling, Error reporting",
            links: [
                "https://github.com/vladluca70/lfac"
            ]
        },

        // {
        //     title: "",
        //     technologies: "",
        //     description: "",
        //     behind_the_code: "",
        //     links: [
        //         "",
        //         ""
        //     ]
        // }
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
