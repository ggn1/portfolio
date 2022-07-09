import { useState } from 'react'
import './App.css'
import Header from "../components/Header"
import NavigateButton from '../components/NavigateButton';

function App() {
  return (
    <>
      <Header />
      <NavigateButton img_src={"../assets/gear.png"} text={"Projects"}/>
      <NavigateButton img_src={"../assets/heart.png"} text={"About Me"}/>
      <NavigateButton img_src={"../assets/phone.png"} text={"Contact Me"}/>
    </>
  );
}

export default App
