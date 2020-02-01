import React from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import Button from 'react-bootstrap/Button';
import { NavigationComponent } from './Components/NavigationComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationComponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          variant="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
