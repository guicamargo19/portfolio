import { Link } from "react-router-dom";
import Projeto from "../../models/projects";

interface Props {
    projects: Projeto[]
}

const Project = ({ projects }: Props) => {
    return (
        <section id="projects" className="projects sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main heading-sec__main--lt">Projetos</span>
                    <span className="heading-sec__sub">
                        Aqui você irá encontrar alguns dos meus projetos pessoais, acadêmicos e
                        de clientes que desenvolvi, clique em conhecer para saber mais.
                    </span>
                </h2>
                <div>
                    <div className="projects__content">
                        <div className="carousel slide" data-bs-ride="carousel" id="carousel">
                            <div className="carousel-inner">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                        data-bs-interval="7000"
                                    >
                                        <div className="projects__row">
                                            <div className="projects__row-img-cont">
                                                <img
                                                    src={project.image}
                                                    alt="Software Screenshot"
                                                    className="projects__row-img"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="projects__row-content">
                                                <h3 className="projects__row-content-title">{project.title}</h3>
                                                <p className="projects__row-content-desc justify">{project.description}</p>
                                                <Link
                                                    className="button btn--med btn--theme dynamicBgClr"
                                                    to={`/project/${project.id}`}
                                                >
                                                    Conhecer
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space_control">
                                <button
                                    name="button-prev"
                                    type="button"
                                    className="carousel-control-prev"
                                    data-bs-target="#carousel"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button
                                    name="button-next"
                                    type="button"
                                    className="carousel-control-next"
                                    data-bs-target="#carousel"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                                <div className="carousel-indicators">
                                        <button name="prev-1" type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"></button>
                                        <button name="prev-2" type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                                        <button name="prev-3" type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                                        <button name="prev-4" type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project
