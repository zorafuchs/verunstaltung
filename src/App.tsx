import * as React from 'react';
import { Card, Container, Image, Navbar } from 'react-bootstrap';
import { ContactsComponent } from './components/ContactsComponent';
import { NavigationComponent } from './components/NavigationComponent';
import { EventsComponent } from './components/EventsComponent';
import { InformationsComponent } from './components/InformationsComponent';
import logo from './logo.svg';

export const App: React.FC = () => (
  <div id="home">
    <div className="sticky">
      <Image className="logo" src={logo} />
      <NavigationComponent />
    </div>
    <Container>
      <div className="anchor" id="home"></div>
      <EventsComponent />
    </Container>

    <Navbar className="mt-4" bg="white">
      <div className="anchor" id="about"></div>
      <Navbar.Brand>Über uns</Navbar.Brand>
    </Navbar>

    <Container>
      <InformationsComponent />
      <br />
    </Container>

    <Navbar className="mt-4" bg="white">
      <div className="anchor" id="past"></div>
      <Navbar.Brand>Rückblick</Navbar.Brand>
    </Navbar>

    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Rückblick</Card.Title>
          <Card.Text>Leider gibt es noch keine vergangenen Veranstaltungen.</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </Container>

    <Navbar className="mt-4" bg="white">
      <div className="anchor" id="contact"></div>
      <Navbar.Brand>Kontakt</Navbar.Brand>
    </Navbar>

    <Container>
      <ContactsComponent />
      <br />
    </Container>
  </div>
);

export default App;
