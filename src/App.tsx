import * as React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { NavigationComponent } from './components/NavigationComponent';

export const App: React.FC = () => (
  <Container>
    <NavigationComponent />
    <Jumbotron fluid className="mt-5">
      <Container>
        <h1>Nweedia Dashboard</h1>
        <p>Management dashboard for the Nweedia infrastructure.</p>
      </Container>
    </Jumbotron>
  </Container>
);

export default App;
