import React, { useState } from 'react'
import Threejs from '../components/Threejs'
import Parallax from "../components/Parallax"

export default function Home() {

  const bg_images = <div>
    <img className='layer' data_speed={1} src="../assets/pixel_explode_1.png" />
    <img className='layer' data_speed={4} src="../assets/pixel_explode_2.png" />
    <img className='layer' data_speed={8} src="../assets/pixel_explode_3.png" />
  </div>

  return (
    <div id="canvas_div">
      <Threejs />
      <Parallax event="mouseover" bg_image="../assets/pixel_explode_bg.png" images_div={bg_images}/>
    </div>
  )
}
