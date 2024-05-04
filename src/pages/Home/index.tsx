import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Hero } from '../../components/Hero'
import Project from '../../components/Projects'
import Projeto from '../../models/projects'

interface Props {
  projects: Projeto[]
}

const Home = ({ projects }: Props) => {
  return (
    <>
      <Hero />
      <About />
      <Project projects={projects} />
      <Contact />
    </>
  )
}

export default Home
