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
import urlForm from './urlForm';


const vids = [
  {id: 0, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  {id: 1, link: "https://www.youtube.com/watch?v=ZZ5LpwO-An4&list=PLV2ewAgCPCq0DVamOw2sQSAVdFVjA6x78"},
  {id: 2, link: "https://www.youtube.com/watch?v=_V2sBURgUBI&list=PLV2ewAgCPCq0DVamOw2sQSAVdFVjA6x78&index=43"}
]

/*
var vids = [
  {link: "test"}
];
*/

//<Player url={vids[this.props.match.params.ID].link} />

class StreamGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      links: ""
    };
  }
  onInputChange = value => {
    this.setState({
      links: value
    });
    vids.push({link: value})
    console.log(vids);
  }
  render() {
    return (
      <div>
      <urlForm onChange={this.onInputChange} />
        {vids.map(i => (
          <Player url{...i.link} />
        ))}
      </div>
    );
  }
}

export default StreamGallery;