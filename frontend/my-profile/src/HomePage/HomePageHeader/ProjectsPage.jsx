import '../../CSSFiles/ProjectsPage.css'

function ProjectsPage() {
    const projects = [
        {
            title: "Project 1",
            technologies: "PHP, HTML, CSS",
            description: "Pagina web destinata utilizatorutilizata de oricine.Pagina web destinata utilizatorilor care doresc sa faca comanda de produse online. Este o platforma foarte simpla, poate fi utilizata de oricine.",
            highlights: "Lucrul in echipa, folosirea framework Laravel, respectare deadline",
            link:"https://github.com/vladluca70/Currency-Converter"
        },

                {
            title: "Project 2",
            technologies: "Python, Flask, HTML, CSS",
            description: "Pagina web destinata utilizatorilor care doresc sa faca comanda de alimente online. Este o platforma foarte simpla, poate fi utilizata de oricine.",
            highlights: "Lucrul in echipa, folosirea framework Flask, respectare deadline",
            link:"https://github.com/vladluca70/Currency-Converter"
        },
                {
            title: "Project 2",
            technologies: "Python, Flask, HTML, CSS",
            description: "Pagina web destinata utilizatorilor care doresc sa faca comanda de alimente online. Este o platforma foarte simpla, poate fi utilizata de oricine.",
            highlights: "Lucrul in echipa, folosirea framework Flask, respectare deadline",
            link:"https://github.com/vladluca70/Currency-Converter"
        },
                {
            title: "Project 2",
            technologies: "Python, Flask, HTML, CSS",
            description: "Pagina web destinata utilizatorilor care doresc sa faca comanda de alimente online. Este o platforma foarte simpla, poate fi utilizata de oricine.",
            highlights: "Lucrul in echipa, folosirea framework Flask, respectare deadline",
            link:"https://github.com/vladluca70/Currency-Converter"
        },
                {
            title: "Project 2",
            technologies: "Python, Flask, HTML, CSS",
            description: "Pagina web destinata utilizatorilor care doresc sa faca comanda de alimente online. Este o platforma foarte simpla, poate fi utilizata de oricine.",
            highlights: "Lucrul in echipa, folosirea framework Flask, respectare deadline",
            link:"https://github.com/vladluca70/Currency-Converter"

        }
    ];

    return (
        <div className="projects-container">
            <h2 className="page-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p><strong>Technologies:</strong> {project.technologies}</p>
                        <p><strong>Description:</strong> {project.description}</p>
                        <p><strong>Highlights:</strong> {project.highlights}</p>
                        <p>
                          <strong>Link:</strong>{" "}
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.link}
                          </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
