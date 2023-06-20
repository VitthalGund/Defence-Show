import React from 'react'
import video from "../source/VID/jetBack.mp4"
import "../CSS/video.css"

function BackVideo() {
    return (
        <div>
            <video id="background-video" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                <div id="default"></div>
            </video>
        </div>
    )
}

export default BackVideo
