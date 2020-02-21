import React from 'react';
import { Card } from 'react-bootstrap';
import { ContactModel } from '../models/ContactModel';

export const contacts = [new ContactModel('Siro Mancuso', 'mancusosiro.booking@gmail.com')];

export const ContactsComponent: React.FC = () => (
  <>
    {contacts.map((contact, index) => (
      <Card key={index} className="mt-4">
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Link href={'mailto:' + contact.mail}>{contact.mail}</Card.Link>
        </Card.Body>
      </Card>
    ))}
  </>
);
