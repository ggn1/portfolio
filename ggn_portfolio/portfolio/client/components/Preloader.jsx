import React, { useState, useEffect } from 'react'
import "./Preloader.css"

export default function Preloader() {

    const [frame_num, set_frame_num] = useState(0);
    const [loading_dots, set_loading_dots] = useState("");

    const frames = [
        "../assets/coffee_mug_1.png", "../assets/coffee_mug_2.png", "../assets/coffee_mug_3.png",
        "../assets/coffee_mug_4.png", "../assets/coffee_mug_5.png", "../assets/coffee_mug_6.png"
    ];

    const gif_size = [100, 100];

    useEffect(() => {
        let next_frame_num = frame_num + 1;
        if (next_frame_num >= frames.length) next_frame_num = 0;
        let next_loading_dots = loading_dots;
        if (next_loading_dots.length >= 3*2) next_loading_dots = "";
        else next_loading_dots += " .";
        let timer = setTimeout(() => { 
            set_frame_num(next_frame_num); 
            set_loading_dots(next_loading_dots);
        }, 500);
        return () => clearTimeout(timer);
    });

    return (
        <div id="preloader">
            <img src={frames[frame_num]} style={{ 
                "width": gif_size[0], 
                "height": gif_size[1],
                "marginTop": (window.innerHeight/2)-(gif_size[0]/1.2)
            }}/>
            <p>Brewing {loading_dots}</p>
        </div>
    )
}
