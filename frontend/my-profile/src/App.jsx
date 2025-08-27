import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './HomePage/HomePage';
import AboutPage from './HomePage/HomePageHeader/AboutPage'
import TechnicalSkillsPage from './HomePage/HomePageHeader/TechnicalSkillsPage'
import ProjectsPage from './HomePage/HomePageHeader/ProjectsPage'
import DiplomasPage from './HomePage/HomePageHeader/DiplomasPage'
import USAGermanyExperiencePage from './HomePage/HomePageHeader/USAGermanyExperiencePage'
import PublicationsPage from './HomePage/HomePageHeader/PublicationsPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>  
      <Route path='/about-page' element={<AboutPage/>}/>  
      <Route path='/technical-skills' element={<TechnicalSkillsPage/>}/>  
      <Route path='/projects' element={<ProjectsPage/>}/>  
      <Route path='/diplomas' element={<DiplomasPage/>}/>  
      <Route path='/usa&germany-experience' element={<USAGermanyExperiencePage/>}/>  
      <Route path='/publications' element={<PublicationsPage/>}/>  
    </Routes>

  )
}

export default App
