export const About = () => {
    return (
        <section id="about" className="about sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-med">
                    <span className="heading-sec__main heading-sec__main--lt">Sobre mim</span>
                    <span className="heading-sec__sub">
                        Aqui você encontrará mais informações sobre mim, o que eu faço, e
                        minhas habilidades atuais, principalmente em programação e tecnologia.
                    </span>
                </h2>
                <div className="about__content">
                    <div className="about__content-main">
                        <h3 className="about__content-title">Me conhecendo.</h3>
                        <div className="about__content-details">
                            <p className="about__content-details-para">
                                Sou <strong>Engenheiro da computação</strong> e <strong>Desenvolvedor Full Stack Python </strong>
                                construindo e gerenciando aplicações web e projetos com foco na
                                experiência do usuário e no sucesso geral. Confira um pouco do
                                meu trabalho na seção <strong>Projetos</strong>.
                            </p>
                            <p className="about__content-details-para">
                                Gosto muito de desafios que me permitem pesquisar e buscar soluções,
                                muitas vezes inovadoras, que me fazem crescer e evoluir como profissional.
                                Estou sempre aprendendo novos métodos de realizar tarefas, me desenvolvendo
                                e expandindo minhas capacidades. Sinta-se a vontade para seguir meu
                                <a
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/in/guilherme-ferreira-camargo/"
                                    target="_blank"
                                > LinkedIn</a>
                                , onde podemos nos conectar e compartilhar conhecimento, ideias e novidades.
                            </p>
                            <p className="about__content-details-para">
                                Estou aberto a oportunidades onde possa contribuir, aprender e crescer. 
                                Se você tem uma vaga que combina com minhas habilidades não hesite em entrar em
                                contato comigo.
                            </p>
                        </div>
                        <a href="./#contact" className="button btn--med btn--theme dynamicBgClr"
                        >Contato</a>
                    </div>
                    <div className="about__content-skills">
                        <h3 className="about__content-title">Minhas Skills</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">CSS</div>
                            <div className="skills__skill">CSS Modules</div>
                            <div className="skills__skill">Styled Components</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">Bootstrap</div>
                            <div className="skills__skill">Design responsivo</div>
                            <div className="skills__skill">Gulp</div>
                            <div className="skills__skill">jQuery</div>
                            <div className="skills__skill">SASS</div>
                            <div className="skills__skill">TypeScript</div>
                            <div className="skills__skill">ReactJS</div>
                            <div className="skills__skill">ReduxJS</div>
                            <div className="skills__skill">Vue.js</div>
                            <div className="skills__skill">Jest</div>
                            <div className="skills__skill">GIT</div>
                            <div className="skills__skill">NPM</div>
                            <div className="skills__skill">Vite</div>
                            <div className="skills__skill">Github</div>
                            <div className="skills__skill">Linux</div>
                            <div className="skills__skill">Python</div>
                            <div className="skills__skill">Django</div>
                            <div className="skills__skill">PostgreSQL</div>
                            <div className="skills__skill">Docker</div>
                            <div className="skills__skill">GitHub Actions</div>
                            <div className="skills__skill">CI/CD</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
