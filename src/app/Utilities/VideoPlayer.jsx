"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeid }) => {
    const [isOpen, setIsOpen] = useState (true)

    const handleVideoPlayer =()=>{
        setIsOpen((prevState) => !prevState)
    }
    const option = {
        width: "300",
        height: "250"
    }
    const Player = () => {
        return(
            <div className="fixed bottom-2 right-2">
            <button onClick={handleVideoPlayer} className="text-dark float-right bg-indigo-200 px-3 mb-1 rounded hover:bg-indigo-500 transision-all shadow-xl">X</button>
            <YouTube videoId={youtubeid} onReady={(event)=>event.target.pauseVideo()} opts={option} onError={()=> alert("Mohon Maaf Trailer Rusak")}/>
        </div>
        )
    }
    return isOpen ? <Player/> : <button className="fixed bottom-5 right-5 bg-indigo-200 text-dark rounded hover:bg-indigo-500 transision-all shadow-xl px-2" onClick={handleVideoPlayer}>Tonton Trailer</button>
}
export default VideoPlayer