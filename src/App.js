import React, { useState } from 'react';
import './App.css';
import EventListItem from './EventListItem';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>CityStream 865 - Live in your area</Navbar.Brand>
      </Navbar>

      <header className="App-header">
        <ul>
          <EventListItem
            eventName='KNXHX Knoxville City Hackathon' 
            eventDate='July 18th, 2020'/>
          <EventListItem
            eventName='Another Event' 
            eventDate='December 25, 2020'/>
          <EventListItem
            eventName='Another event' 
            eventDate='April 24, 2021'/>
        </ul>
      </header>
    </div>
  );
}

export default App;
