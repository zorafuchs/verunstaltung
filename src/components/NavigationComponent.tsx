import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavigationItemsComponent } from './NavigationItemsComponent';

export const NavigationComponent: React.FC = () => (
  <Navbar collapseOnSelect expand={false} bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavigationItemsComponent />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
