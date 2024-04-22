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
                        Aqui você encontra alguns dos projetos que desenvolvi. Clique em "conhecer" para saber mais.
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
                                        data-bs-interval="11000"
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
                                    id="button-prev"
                                    type="button"
                                    className="carousel-control-prev"
                                    data-bs-target="#carousel"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button
                                    name="button-next"
                                    id="button-next"
                                    type="button"
                                    className="carousel-control-next"
                                    data-bs-target="#carousel"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                                <div className="carousel-indicators">
                                        <button id="button-prev1" name="prev-1" type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"></button>
                                        <button id="button-prev2" name="prev-2" type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                                        <button id="button-prev3" name="prev-3" type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                                        <button id="button-prev4" name="prev-4" type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>
                                        <button id="button-prev5" name="prev-5" type="button" data-bs-target="#carousel" data-bs-slide-to="4"></button>
                                        <button id="button-prev6" name="prev-6" type="button" data-bs-target="#carousel" data-bs-slide-to="5"></button>
                                        <button id="button-prev7" name="prev-7" type="button" data-bs-target="#carousel" data-bs-slide-to="6"></button>
                                        <button id="button-prev8" name="prev-8" type="button" data-bs-target="#carousel" data-bs-slide-to="7"></button>
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
