import * as React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
import { ContactsComponent } from './components/ContactsComponent'
import { NavigationComponent } from './components/NavigationComponent';
import { EventsComponent } from './components/EventsComponent';
import { InformationsComponent } from './components/InformationsComponent';
import logo from './logo.svg';

export const App: React.FC = () => (
  <div>
    <div className="sticky">
      <Image className="logo" src={logo} fluid />
      <NavigationComponent />
    </div>
    <Container>
      <EventsComponent />
    </Container>

    <Navbar className="mt-4" bg="white">
      <Navbar.Brand>Über uns</Navbar.Brand>
    </Navbar>

    <Container>
      <InformationsComponent />
      <br />
    </Container>

    <Navbar className="mt-4" bg="white">
      <Navbar.Brand>Kontakt</Navbar.Brand>
    </Navbar>

    <Container>
      <ContactsComponent />
      <br />
    </Container>
  </div>
);

export default App;
