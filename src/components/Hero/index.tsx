export const Hero = () => {
  return (
    <section className="home-hero" id="hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Olá, Eu sou Guilherme.</h1>
        <div className="home-hero__info">
          <p className="text-primary-description">
            Um desenvolvedor Full Stack Python orientado a resultados, muito
            motivado, construindo e gerenciando aplicações web e projetos
            focados na experiência do usuário.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="button btn--bg">
            Projetos
          </a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a
            href="https://www.linkedin.com/in/guilherme-ferreira-camargo/"
            className="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://servidor-estatico-tan.vercel.app/linkedin-dark.svg"
              alt="Perfil Linkedin Guilherme Camargo"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://github.com/guicamargo19"
            className="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://servidor-estatico-tan.vercel.app/github-dark.svg"
              alt="Perfil GitHub Guilherme Camargo"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://dev.to/gfcamargo"
            className="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://servidor-estatico-tan.vercel.app/book-dark.svg"
              alt="DEV.to Blog Perfil Guilherme Camargo"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  )
}
