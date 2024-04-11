import { useNavigate, useParams } from "react-router-dom"
import Projeto from "../../models/projects"

interface Props {
    projects: Projeto[]
}

const Projects = ({ projects }: Props) => {
    const navigate = useNavigate();
    const { id } = useParams()
    const project = projects.find(project => project.id === parseInt(id!));
    if (!project) return <div>Projeto não encontrado.</div>;

    const handleButtonClick = (sectionId: string) => {
        navigate('/');

        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 335);
    };

    return (
        <>
            <section className="home-hero" key={project.id}>
                <div className="home-hero__content">
                    <h1 className="heading-primary">{project.title}</h1>
                    <div className="home-hero__info">
                        <p className="text-primary-description">
                            {project.description}
                        </p>
                    </div>
                    <div className="home-hero__cta">
                        <a href={project.projectlLink} target="_blank" className="button btn--bg">Acessar</a>
                    </div>
                </div>
            </section>
            <section className="project-details" key={project.id}>
                <div className="main-container">
                    <div className="project-details__content">
                        <div className="project-details__showcase-img-cont">
                            <img src={project.image} alt="Project Image" className="project-details__showcase-img" />
                        </div>
                        <div className="project-details__content-main">
                            <div className="project-details__desc">
                                <h2 className="project-details__content-title">Visão geral</h2>
                                {project.overview.map((overview) => {
                                    return(
                                    <p className="project-details__desc-para justify">
                                        {overview}
                                    </p>
                                    )
                                })}
                            </div>
                            <div className="project-details__tools-used">
                                <h2 className="project-details__content-title">Ferramentas utilizadas</h2>
                                <div className="skills">
                                    {project.tools.map((tool) => {
                                        return (
                                            <div className="skills__skill">{tool}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="project-details__links">
                                <h2 className="project-details__content-title">Veja mais</h2>
                                <a href={project.repository} className="button btn--med btn--theme project-details__links-btn"
                                    target="_blank" rel="noreferrer">
                                    Repositório
                                </a>
                                <a onClick={() => handleButtonClick('projects')} className="button btn--med btn--theme-inv project-details__links-btn">
                                    Voltar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects