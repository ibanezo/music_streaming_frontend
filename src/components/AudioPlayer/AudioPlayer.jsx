import React from 'react';
import './AudioPlayer.css';

const AudioPlayer = (props) => {
    const { song } = props.items;
    console.log("props", props);
    console.log("props.items", props.items);
    console.log("song", song);
    // const url = "http://localhost:8080/playSong/" + song.id;
    return (
        <div className="audio-player">
            <audio>
                <source src={"#"} type="audio/mpeg" />
            </audio >
        </div>
    );
}

export default AudioPlayer;
