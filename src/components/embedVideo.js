import React from 'react';
import ReactPlayer from 'react-player/lazy';

export default function player(props) {
    var play_element;
    if(ReactPlayer.canPlay(props.url))
    {
        play_element = <ReactPlayer url={props.url} />
    }
    return(
        <div>
    {play_element}
    </div>
    );
}

//vid_link = "https://www.facebook.com/watch/?v=208036457219892";
