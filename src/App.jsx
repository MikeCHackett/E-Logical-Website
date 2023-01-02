import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import News from './pages/News';
import Signin from './pages/Signin';
import Aboutus from './pages/Aboutus';
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Guides from './pages/Guides';
import Pricings from './pages/Pricings';

function App() {
  return (
    <Router>
    <div className="pt-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/guides' element={<Guides />} />
        <Route path='/pricings' element={<Pricings />} />
      </Routes>
    </div>
    <Footer />
    </Router>
  )
}

export default App
