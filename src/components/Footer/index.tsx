export const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="main-container">
                <div className="main-footer__upper">
                    <div className="main-footer__row main-footer__row-1">
                        <h2 className="heading heading-sm main-footer__heading-sm">
                            <span>Social</span>
                        </h2>
                        <div className="main-footer__social-cont">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/guilherme-ferreira-camargo/"
                            >
                                <img
                                    className="main-footer__icon"
                                    src="../src/assets/png/linkedin-ico.png"
                                    alt="Perfil Linkedin Guilherme Camargo"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/guicamargo19"
                            >
                                <img
                                    className="main-footer__icon"
                                    src="../src/assets/png/github-ico.png"
                                    alt="Perfil GitHub Guilherme Camargo"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://dev.to/gfcamargo"
                            >
                                <img
                                    className="main-footer__icon"
                                    src="../src/assets/png/blog-ico.png"
                                    alt="Blog Perfil DEV.to Guilherme Camargo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="main-footer__row main-footer__row-2">
                        <h2 className="heading heading-sm text-lt fw-bold">Guilherme Camargo</h2>
                        <p className="main-footer__short-desc">
                            Um desenvolvedor Full Stack Python orientado a resultados,
                            muito motivado, construindo e gerenciando websites e aplicações
                            focados na experiência do usuário.
                        </p>
                    </div>
                </div>
                <div className="main-footer__lower">
                    &copy; Copyright
                    <script>
                        document.write(new Date().getFullYear());
                    </script>
                    . Feito por
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/guilherme-ferreira-camargo/">
                        Guilherme Camargo
                    </a>
                </div>
            </div>
        </footer>
    )
}