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
import './EventsList.css';

const tmpEvents = [
    {id: 2712, name:'KPD T.R.A.C.K. Defensive Driving Program', date:'2020-07-17'},
    {id: 2713, name:'KPD T.R.A.C.K. Defensive Driving Program', date:'2020-07-18'},
    {id: 2714, name:'Market Square Farmer\'s Market - NEW LOCATION', date:'2020-07-18'},
    {id: 2715, name:'Downtown Knoxville Alliance (formerly CBID)', date:'2020-07-20'},
    {id: 2716, name:'Metro Drug Coalition', date:'2020-07-21'},
    {id: 2717, name:'Public Building Authority', date:'2020-07-21'},
    {id: 2718, name:'Kid A\'Riffic Fun on the Square - CANCELED', date:'2020-07-21'},
    {id: 2719, name:'TPO Executive Board', date:'2020-07-22'},
    {id: 2720, name:'Market Square Farmer\'s Market - NEW LOCATION', date:'2020-07-22'},
    {id: 2721, name:'City Zoning Code Public Stakeholder Advisory Committee Meeting', date:'2020-07-22'},
    {id: 2722, name:'Metropolitan Knoxville Airport Authority Board of Commissioners', date:'2020-07-22'},
    {id: 2723, name:'Mountain Bike Race', date:'2020-07-22'},
    {id: 2724, name:'City Council Workshop', date:'2020-07-23'},
    {id: 2725, name:'Special Event Meeting', date:'2020-07-23'},
    {id: 2726, name:'Animal Control Board', date:'2020-07-23'},
    {id: 2727, name:'Knoxville Transportation Authority', date:'2020-07-23'},
    {id: 2728, name:'Girls Inc Adult Field Day', date:'2020-07-25'},
    {id: 2729, name:'Market Square Farmer\'s Market - NEW LOCATION', date:'2020-07-25'},
    {id: 2730, name:'Knox County Commission Meeting', date:'2020-07-27'},
    {id: 2731, name:'Kid A\'Riffic Fun on the Square - CANCELED', date:'2020-07-28'},
    {id: 2732, name:'Beer Board', date:'2020-07-28'},
    {id: 2733, name:'City Council Meeting', date:'2020-07-28'},
    {id: 2734, name:'Market Square Farmer\'s Market - NEW LOCATION', date:'2020-07-29'},
    {id: 2735, name:'KCDC Board Meeting', date:'2020-07-30'},
    {id: 2736, name:'Better Building Board', date:'2020-07-30'},
    {id: 2737, name:'Public Officer Hearings', date:'2020-07-31'},
    {id: 2738, name:'10th Annual Knoxville Brewfest - CANCELED', date:'2020-07-31'},
    {id: 2739, name:'Market Square Farmer\'s Market - NEW LOCATION', date:'2020-08-01'},
    {id: 2740, name:'Some Like it Hot', date:'2020-08-01'},
    {id: 2741, name:'10th Annual Knoxville Brewfest - CANCELED', date:'2020-08-01'}
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