import React, { useState, useEffect } from 'react'
import "./Preloader.css"

export default function Preloader() {

    const [frame_num, set_frame_num] = useState(0);

    const frames = [
        "../assets/coffee_mug_1.png", "../assets/coffee_mug_2.png", "../assets/coffee_mug_3.png",
        "../assets/coffee_mug_4.png", "../assets/coffee_mug_5.png", "../assets/coffee_mug_6.png"
    ];

    const gif_size = [100, 100];

    useEffect(() => {
        let next_frame_num = frame_num + 1;
        if (next_frame_num >= frames.length) next_frame_num = 0;
        let timer = setTimeout(() => { set_frame_num(next_frame_num); }, 500);
        return () => clearTimeout(timer);
    });

    return (
        <div id="preloader">
            <img src={frames[frame_num]} style={{ 
                "width": gif_size[0], 
                "height": gif_size[1],
                "marginTop": (window.innerHeight/2)-(gif_size[0]/1.2)
            }}/>
        </div>
    )
}
