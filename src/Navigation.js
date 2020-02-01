import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavigationItemModel {
    constructor(href, label){
        this.href = href;
        this.label = label;
    }
}

const navItems = [
    new NavigationItemModel('#home', 'Verunstaltungskalender'),
    new NavigationItemModel('#about', 'Über uns'),
    new NavigationItemModel('#past', 'Rückblick'),
    new NavigationItemModel('#contact', 'Kontakt')
]

export function NavigationItems()  {
    var items = []
        navItems.forEach(item => {
            items.push(<Nav.Link href={item.href}>{item.label}</Nav.Link>)
        });
        return items
}

export function Navigation() {

  return (<Navbar collapseOnSelect expand={false} bg="dark" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavigationItems/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}

