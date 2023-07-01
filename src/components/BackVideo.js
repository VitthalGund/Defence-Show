import video from "../source/VID/jetBackSmallest.mp4"
import "../css/video.css"

export default function BackVideo() {
    return (
        <div>
            <video id="background-video" autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}
