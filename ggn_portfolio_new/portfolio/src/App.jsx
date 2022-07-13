import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "../components/Header"
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import './App.css';
import Threejs from '../components/Threejs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/contact" element={<Contact />} exact></Route>
        <Route path="/about" element={<About />} exact></Route>
        <Route path="/projects" element={<Projects />} exact></Route>
      </Routes>
    </Router>
  );
}

export default App
