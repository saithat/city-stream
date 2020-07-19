import React, { useState } from 'react';
import './App.css';
import EventListItem from './EventListItem';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar className='header-bar'
        expand="lg" variant="dark">
        <Navbar.Brand><strong>CityStream 865</strong> - Live in your area</Navbar.Brand>
      </Navbar>

      <div className="event-list">
        <ul>
          <EventListItem
            heading='Happening Now'
            eventName='KNXHX Knoxville City Hackathon' 
            eventDate='July 18th, 2020'/>
          <EventListItem
            eventName='Another Event' 
            eventDate='December 25, 2020'/>
          <EventListItem
            eventName='Another event' 
            eventDate='April 24, 2021'/>
        </ul>
      </div>
    </div>
  );
}

export default App;
