import * as React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { NavigationComponent } from './components/NavigationComponent';
import logo from './logo.png';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.png';

export const App: React.FC = () => (
  <div>
    <div className="sticky">
      <Image src={logo} fluid />
      <NavigationComponent />
    </div>
    <Container>
      <Card className="mt-5 white-bg">
        <Card.Title className="white-bg">
          Samstag 22.3.2020 <br />
          Doors 20:00
        </Card.Title>
        <Card.Img variant="top" src={img1} />
        <Card.Img variant="top" src={img2} />
      </Card>
    </Container>

    <h1 className="mt-5">Über uns</h1>

    <Container>
      <Card className="mt-5 white-bg">
        <Card.Title className="white-bg">Die Verunstaltung</Card.Title>
        <Card.Text>
          tuer adipiscing elit, sed diam no- nummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vo-
          lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
          ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vul- putate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facili- sis at vero eros et accumsan et iusto odio dignissim qui
          blandit praesent
        </Card.Text>
        <Card.Img variant="top" src={img3} />
      </Card>

      <Card className="mt-5 white-bg">
        <Card.Title className="white-bg">Die Verunstalter</Card.Title>
        <Card.Text>
          tuer adipiscing elit, sed diam no- nummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vo-
          lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
          ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vul- putate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facili- sis at vero eros et accumsan et iusto odio dignissim qui
          blandit praesent
        </Card.Text>
      </Card>
    </Container>
  </div>
);

export default App;
