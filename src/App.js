import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <div className='navbarContainer'>
        <Navbar />
      </div>
      <div className='contentContainer'>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
      <div className='footerContainer'>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
