import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  match,
  params,
  useParams
} from "react-router-dom";
import Player from "./embedVideo";

const vids = [
  {id: 0, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  {id: 1, link: "https://www.youtube.com/watch?v=ZZ5LpwO-An4&list=PLV2ewAgCPCq0DVamOw2sQSAVdFVjA6x78"},
  {id: 2, link: "https://www.youtube.com/watch?v=_V2sBURgUBI&list=PLV2ewAgCPCq0DVamOw2sQSAVdFVjA6x78&index=43"}
]

class StreamGallery extends React.Component {
  render() {
    return (
      <Player url={vids[this.props.match.params.ID].link} />
    );
  }
}

export default StreamGallery;