import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Navigation } from './Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
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
