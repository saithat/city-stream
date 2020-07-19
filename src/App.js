import React, { useState } from 'react';
import './App.css';
import EventsList from './components/EventsList';
import StreamGallery from './components/StreamGallery';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

function SwitchView() {
  return (
    <div>
      <Switch>
        <Route path="/:ID" component={StreamGallery} />
        <Route path="/" component={EventsList} />
      </Switch>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>CityStream 865 - Live in your area</Navbar.Brand>
      </Navbar>
      <Router>
        <SwitchView />
      </Router>
    </div>
  );
}

export default App;
