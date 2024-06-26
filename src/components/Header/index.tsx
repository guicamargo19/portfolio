import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const hamMenuBtn = document.querySelector<HTMLElement>(
      '.header__main-ham-menu-cont'
    )
    const smallMenu = document.querySelector<HTMLElement>('.header__sm-menu')
    const headerHamMenuBtn = document.querySelector<HTMLElement>(
      '.header__main-ham-menu'
    )
    const headerHamMenuCloseBtn = document.querySelector<HTMLElement>(
      '.header__main-ham-menu-close'
    )
    const headerSmallMenuLinks = document.querySelectorAll<HTMLElement>(
      '.header__sm-menu-link'
    )

    const handleHamMenuClick = () => {
      if (smallMenu?.classList.contains('header__sm-menu--active')) {
        smallMenu.classList.remove('header__sm-menu--active')
      } else {
        smallMenu?.classList.add('header__sm-menu--active')
      }
      if (headerHamMenuBtn?.classList.contains('d-none')) {
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn?.classList.add('d-none')
      } else {
        headerHamMenuBtn?.classList.add('d-none')
        headerHamMenuCloseBtn?.classList.remove('d-none')
      }
    }

    hamMenuBtn?.addEventListener('click', handleHamMenuClick)

    const handleSmallMenuLinkClick = () => {
      smallMenu?.classList.remove('header__sm-menu--active')
      headerHamMenuBtn?.classList.remove('d-none')
      headerHamMenuCloseBtn?.classList.add('d-none')
    }

    for (let i = 0; i < headerSmallMenuLinks.length; i++) {
      headerSmallMenuLinks[i]?.addEventListener(
        'click',
        handleSmallMenuLinkClick
      )
    }

    const headerLogoContainer = document.querySelector<HTMLElement>(
      '.header__logo-container'
    )

    const handleLogoClick = () => {
      location.href = '/'
    }

    headerLogoContainer?.addEventListener('click', handleLogoClick)

    return () => {
      hamMenuBtn?.removeEventListener('click', handleHamMenuClick)
      for (let i = 0; i < headerSmallMenuLinks.length; i++) {
        headerSmallMenuLinks[i]?.removeEventListener(
          'click',
          handleSmallMenuLinkClick
        )
      }
      headerLogoContainer?.removeEventListener('click', handleLogoClick)
    }
  }, [])

  const handleButtonClick = (sectionId: string) => {
    navigate('/')

    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="https://servidor-estatico-tan.vercel.app/guilherme_camargo.avif"
              alt="Guilherme Camargo Imagem Logo"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Guilherme Camargo</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a
                href="#hero"
                onClick={() => handleButtonClick('hero')}
                className="header__link heading-sec__main__menu"
              >
                Home
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                href="#about"
                onClick={() => handleButtonClick('about')}
                className="header__link heading-sec__main__menu"
              >
                Sobre
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                href="#projects"
                onClick={() => handleButtonClick('projects')}
                className="header__link heading-sec__main__menu"
              >
                Projetos
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                href="#contact"
                onClick={() => handleButtonClick('contact')}
                className="header__link heading-sec__main__menu"
              >
                Contato
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src="https://servidor-estatico-tan.vercel.app/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src="https://servidor-estatico-tan.vercel.app/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="#hero" onClick={() => handleButtonClick('hero')}>
                Home
              </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="#about" onClick={() => handleButtonClick('about')}>
                Sobre
              </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="#projects" onClick={() => handleButtonClick('projects')}>
                Projetos
              </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="#contact" onClick={() => handleButtonClick('contact')}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
