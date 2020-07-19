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
  {id: 0, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  {id: 1, link: "https://www.youtube.com/watch?v=ZZ5LpwO-An4&list=PLV2ewAgCPCq0DVamOw2sQSAVdFVjA6x78"},
  {id: 2, link: "https://www.youtube.com/watch?v=_V2sBURgUBI&list=PLV2ewAgCPCq0DVamOw2sQSAVdFVjA6x78&index=43"}
]

class StreamGallery extends React.Component {
  render() {
    return (
      <div class="stream-gallery">
        <Player url={vids[this.props.match.params.ID].link} />
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