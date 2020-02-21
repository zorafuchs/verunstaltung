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
            Die Verunstaltung ist eine Veranstaltungsreihe, die im Zürcher El Lokal stattfindet. Bei den Verunstaltern
            wird zusammen gehört, was nur so halb zusammengehört. Ziel ist es, das Publikum mit neuen Künstlern bekannt
            zu machen, die wir Saite an Saite mit vertrauten Musikern präsentieren. Dabei gilt: Wieso in die Ferne
            schweifen, wenn es so viele lokale talentierte Künstler gibt. Von Purismus halten wir uns aber rein. Das
            einzige Klischee, das wir dabei bedienen ist, dass wir keine Klischees zu bedienen behaupten. Die Reihe ist
            nicht ganz neu, sie ist bloss kürzlich erst erwachsen geworden: Noch unter dem Namen Seich’n’Delic wurde vor
            rund vier Jahren eine Konzertreihe ins Leben gerufen, mit deren Erfolg auch das Bedürfnis nach einem breiter
            gefächerten Programm und grösserer stilistischer Freiheit wuchs. Ein Namenswechsel war notwendig und die
            Verunstaltung war geboren.
          </Card.Text>
          <Card.Img variant="top" src={img3} />
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Die Veruntwortlichen</Card.Title>
          <Card.Text>
            Eure Verunstaltungsmacher, Siro Mancuso & Hans Frauchiger, das sind zwei Maturanden, die sich im Müssiggang
            auf der schuleigenen Finnenbahn kennengelernt haben. Gegenwärtig geistern sie im relativen Raum des
            Zwischenjahres herum, mit der Hoffnung, diese Herumfreigeisterei bringe möglichst viele brauchbare
            Hirngespinster hervor. Die Verunstaltung ist eines der Hirngespinster, die derzeit in Erprobung sind.
            Ehemals in Albisrieden geplant, wo die Umsetzung leider, leider kläglich an einem "Arschloch" gescheitert
            ist, wird die Verunstaltung nun im renommierten El Lokal stattfinden.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </Container>
  </div>
);

export default App;
