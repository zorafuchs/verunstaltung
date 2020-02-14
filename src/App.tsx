import * as React from 'react';
import { Card, Container, Image, Navbar } from 'react-bootstrap';
import { NavigationComponent } from './components/NavigationComponent';
import logo from './logo.svg';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

export const App: React.FC = () => (
  <div>
    <div className="sticky">
      <Image className="logo" src={logo} fluid />
      <NavigationComponent />
    </div>
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="date">
            Samstag 22.3.2020 <br />
            Doors 20:00
          </Card.Title>
          <Card.Img className="mt-3" variant="top" src={img1} />
          <Card.Img className="mt-3" variant="top" src={img2} />
        </Card.Body>
      </Card>
    </Container>

    <Navbar className="mt-4" bg="white">
      <Navbar.Brand>Über uns</Navbar.Brand>
    </Navbar>

    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Die Verunstaltung</Card.Title>
          <Card.Text>
            tuer adipiscing elit, sed diam no- nummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vo-
            lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vul- putate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facili- sis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent
          </Card.Text>
          <Card.Img variant="top" src={img3} />
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Die Verunstalter</Card.Title>
          <Card.Text>
            tuer adipiscing elit, sed diam no- nummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vo-
            lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vul- putate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facili- sis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </Container>
  </div>
);

export default App;
