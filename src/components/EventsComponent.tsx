import React from 'react';
import { Card } from 'react-bootstrap';
import { EventModel } from '../models/EventModel';
import img1 from './img1.png';
import img2 from './img2.png';

export const events = [new EventModel('Samstag 22.3.2020', 'Doors 20:00', [img1, img2])];

export const EventsComponent: React.FC = () => (
  <>
    {events.map((event, index) => (
      <Card key={index} className="mt-4">
        <Card.Body>
          <Card.Title className="date">
            {event.date} <br />
            {event.doors}
          </Card.Title>
          {event.pics.map((pic, key) => (
            <Card.Img key={key} className="mt-3" variant="top" src={pic} />
          ))}
        </Card.Body>
      </Card>
    ))}
  </>
);
