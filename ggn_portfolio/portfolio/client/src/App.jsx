import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "../components/Header"
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Alert from '../components/Alert'
import Preloader from "../components/Preloader"
import { alert_context } from "./Context";
import './App.css'

function App() {

  const [loading, set_loading] = useState(false);
  const [alert, set_alert] = useState(null);
  // const [alert, set_alert] = useState({heading: "Hello Check ...", body: "Mike Testing. Mike Testing."});

  useEffect(() => {
    document.getElementById("home_button").className = "no_highlight";
    document.getElementById("about_button").className = "no_highlight";
    document.getElementById("contact_button").className = "no_highlight";
    document.getElementById("projects_button").className = "no_highlight";
  }, [location]);

  return (
    <alert_context.Provider value={{alert, set_alert}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/contact" element={<Contact />} exact></Route>
        <Route path="/about" element={<About />} exact></Route>
        <Route path="/projects" element={<Projects set_loading={set_loading}/>} exact></Route>
      </Routes>
      { loading ? <Preloader /> : null }
      { alert ? <Alert heading={alert.heading} body={alert.body} handle_close={() => set_alert(null)}/> : null }
    </alert_context.Provider>
  );
}

export default App
