import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { projects } from './models/projects'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ScrollToTop>
        <Routes>
            <Route path="/" element={<Home projects={projects}/>} />
            <Route path="/project/:id" element={<Projects projects={projects} />} />
          </Routes>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  )
}

export default App
