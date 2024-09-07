export const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">
            Sobre mim
          </span>
          <span className="heading-sec__sub">
            Aqui você encontrará mais informações sobre mim, o que eu faço, e
            minhas habilidades atuais, principalmente em programação e
            tecnologia.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Me conhecendo</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">                
                Sou <strong>Engenheiro da computação</strong> e{' '}
                <strong>Desenvolvedor Full Stack Python </strong>
                com experiência na construção e gerenciamento de aplicações web
                e projetos focados na experiência do usuário e no sucesso geral.
                Na seção de <strong>Projetos</strong> você pode conferir parte
                do meu trabalho e algumas soluções que implementei ao longo da
                minha trajetória.
              </p>
              <p className="about__content-details-para">
                Sou apaixonado por desafios que exigem pesquisa e inovação,
                permitindo-me expandir constantemente minhas habilidades e
                conhecimentos. Estou sempre em busca de aprender novas abordagens
                para otimizar processos e evoluir como profissional.
              </p>
              <p className="about__content-details-para">
                Sinta-se à vontade para acessar meu{' '}
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/guilherme-ferreira-camargo/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                , onde podemos nos conectar, compartilhar ideias e trocar conhecimentos. 
              </p>
            </div>
            <a
              href="./#contact"
              className="button btn--med btn--theme dynamicBgClr"
            >
              Contato
            </a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">Skills</h3>
            <div className="skills">
              <div className="skills__skill">Python</div>
              <div className="skills__skill">Django</div>
              <div className="skills__skill">DRF</div>
              <div className="skills__skill">REST APIs</div>
              <div className="skills__skill">HTML5</div>
              <div className="skills__skill">CSS3</div>
              <div className="skills__skill">CSS Modules</div>
              <div className="skills__skill">SASS</div>
              <div className="skills__skill">LESS</div>
              <div className="skills__skill">Styled Components (CSS-in-JS)</div>
              <div className="skills__skill">Design responsivo</div>
              <div className="skills__skill">Django Templates</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Vue.js</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">TypeScript</div>
              <div className="skills__skill">Redux</div>
              <div className="skills__skill">Github</div>
              <div className="skills__skill">SQL</div>
              <div className="skills__skill">AWS</div>
              <div className="skills__skill">Lambda</div>
              <div className="skills__skill">Step Functions</div>
              <div className="skills__skill">Amazon ECS</div>
              <div className="skills__skill">Docker</div>
              <div className="skills__skill">Amazon EC2</div>
              <div className="skills__skill">Amazon S3</div>
              <div className="skills__skill">DevOps</div>
              <div className="skills__skill">CI/CD</div>
              <div className="skills__skill">Linux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
