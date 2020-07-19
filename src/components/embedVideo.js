import React from 'react';
import ReactPlayer from 'react-player/lazy';

export default function player(props) {
    return(
    <ReactPlayer url={props.url} />
    );
}

//vid_link = "https://www.facebook.com/watch/?v=208036457219892";
