import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

function EventListItem(props) {
    const [streamCount, setStreamCount] = useState(0)
    return (
        <Card className="EventListItem">
            <Card.Header>{props.heading}</Card.Header>
            <Card.Body>
                <Card.Title className="EventListItemTitle">{props.eventName}</Card.Title>
                <Card.Text className="EventListItemDate">{props.eventDate}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default EventListItem