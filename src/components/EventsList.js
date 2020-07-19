import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import EventListItem from '../EventListItem';
import './EventsList.css'

const tmpEvents = [
    {id: 0, name:'KNXHX Knoxville City Hackathon', date:'July 18th, 2020'},
    {id: 1, name:'Another Event', date:'December 25, 2020'},
    {id: 2, name:'Another event', date:'April 24, 2021'}
]

export default function EventsList() {
    return (
        <header className="App-header">
        <div className="event-list">
            <ul>
                {tmpEvents.map(i => (
                    <Link
                        key={i.id}
                        to={{pathname: `/${i.id}`,}}
                    >
                        <EventListItem eventName={i.name} eventDate={i.date} />
                    </Link>
                ))}
            </ul>
        </div>
      </header>
    );
}