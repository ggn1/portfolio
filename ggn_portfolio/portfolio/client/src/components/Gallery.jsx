import React, { useState, useContext, useEffect } from 'react'
import Button from './Button';
import Tag from './Tag';
import { gallery_context } from "../Context"

import "./Gallery.css"

export default function Gallery({data}) {

  let data_dictionary = {};
  
  data.sort((a, b) => (a.priority > b.priority ? 1 : -1)).forEach(d => {
    data_dictionary[d.id] = d;
  });

  const { set_gallery } = useContext(gallery_context);

  const get_display_item = (id) => {
    const item = data_dictionary[id];
    if (item.src) return (
        <div>
          <div style={{display:'flex', justifyContent:"space-between", marginBottom:"10px"}}>
            <h4>{item.caption}</h4>
            <Button img_src='../public/back.png' on_click={() => set_display_content(get_all_items())} />
          </div>
          <p style={{marginBottom:"10px"}}>{item.description}</p>
          <div className="gallery_item_container"style={{display:"flex", justifyContent:"center"}}>
            <img key={id} src={item.src} width="100%" crossOrigin="anonymous"/>
          </div>
        </div>
      );
    else return (
      <div>
        <div style={{display:'flex', justifyContent:"space-between", marginBottom:"10px"}}>
          <h4>{item.caption}</h4>
          <Button img_src='../public/back.png' on_click={() => set_display_content(get_all_items())} />
        </div>
        <p style={{marginBottom:"10px"}}>{item.description}</p>
        <div className="gallery_item_container">
          <iframe key={id} width="100%" height="315" src={item.embed_link} frameborder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
  } 

  const get_all_items = () => {
      let tags = [];
      data.forEach(d => {
        tags.push(<Tag key={d.id} text={d.caption} on_click={() => set_display_content(get_display_item(d.id))}/>);
      });

      return (
        <div style={{display:'grid'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h1>Gallery</h1>
            <Button img_src="../public/cross.png" on_click={() => set_gallery(null)} />
          </div>
          <div>{tags}</div>
          <div style={{marginTop: '10px', textAlign:'center', color:'gray'}}>
            <i>Select tag to view.</i>
          </div>
        </div>
      );
  }

  const [display_content, set_display_content] = useState(get_all_items());

  return (
    <div id="gallery">
      { display_content }
    </div>
  )
}
