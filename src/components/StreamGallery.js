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
import "./StreamGallery.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const vids = [
  {id: 2712, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  {id: 2713, link: "https://www.youtube.com/watch?v=ZZ5LpwO-An4&list=PLV2ewAgCPCq0DVamOw2sQSAVdFVjA6x78"},
  {id: 2714, link: "https://www.youtube.com/watch?v=_V2sBURgUBI&list=PLV2ewAgCPCq0DVamOw2sQSAVdFVjA6x78&index=43"}
]

class StreamGallery extends React.Component {
  render() {
    var url;
    for (var i in vids){
      if(vids[i].id == this.props.match.params.ID)
      {
        url = vids[i].link;
      }
    }
    return (
      <div class="stream-gallery">
        <Player url={url} />
        <br></br>
        <Card style={{ padding: '20px', width: '50em' }}>
          <Card.Title>Add a Livestream</Card.Title>
          <Button variant="primary">Start streaming</Button>
        </Card>
      </div>
    );
  }
}

export default StreamGallery;