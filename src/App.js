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
      <Navbar className='header-bar'
        expand="lg" variant="dark">
        <Navbar.Brand><strong>CityStream 865</strong> - Live in your area</Navbar.Brand>
      </Navbar>
      <Router>
        <SwitchView />
      </Router>
    </div>
  );
}

export default App;
