import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { projects } from './models/projects'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home projects={projects}/>} />
          <Route path="/project/:id" element={<Projects projects={projects} />} />
      </ Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
