import React, { useContext } from 'react'
import Button from './Button';
import { gallery_context } from "../src/Context"

import "./Gallery.css"

export default function Gallery({items}) {

  const { set_gallery } = useContext(gallery_context);
  console.log(items);

  return (
    <div id="gallery">
      <Button img_src="../assets/cross.png" on_click={() => set_gallery(null)} />
    </div>
  )
}
