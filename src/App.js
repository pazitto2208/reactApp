import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import Project from './pages/project/project';
import NewProject from './pages/newProject/newProject';

function App() {
  return (
    <Router>
      <div className='navbarContainer'>
        <Navbar />
      </div>
      <div className='contentContainer'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </div>
      <div className='footerContainer'>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
