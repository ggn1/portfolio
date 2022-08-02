import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from "../components/Header"
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import './App.css'
import Preloader from "../components/Preloader"

function App() {

  let location = useLocation();

  const [preloader, set_preloader] = useState(false);

  useEffect(() => {
    // console.log(location);
    if (!preloader) {
      document.getElementById("home_button").className = "no_highlight";
      document.getElementById("about_button").className = "no_highlight";
      document.getElementById("contact_button").className = "no_highlight";
      document.getElementById("projects_button").className = "no_highlight";
    }
  }, [location]);

  return (
    <>
      {
        preloader ? <Preloader /> :
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/contact" element={<Contact />} exact></Route>
            <Route path="/about" element={<About />} exact></Route>
            <Route path="/projects" element={<Projects />} exact></Route>
          </Routes>
        </>
      }
    </>
  );
}

export default App
