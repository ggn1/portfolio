import React, { useEffect } from 'react'
import "./Parallax.css"

export default function Parallax({ images_div, event }) {

    const parallax_on_mousemove = (e) => {
        const layers = Array.from(document.getElementsByClassName('layer'));
        layers.forEach(layer => {
            const speed = layer.getAttribute('data_speed');
            const x = (window.innerWidth - e.pageX*speed)/100;
            const y = (window.innerHeight - e.pageY*speed)/100;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    const parallax_on_wheel = (e) => {
        console.log("Scrolled:", e);
    }

    useEffect(() => {
        if (event == "mouseover") document.addEventListener("mousemove", parallax_on_mousemove);
        if (event == "scroll") document.addEventListener("wheel", parallax_on_wheel);
    });

    return (
        <div id='parallax_bg'>{images_div}</div>
    )
}
