import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavigationItemModel } from '../models/NavigationItemModel';

export const navItems = [
  new NavigationItemModel('#home', 'Verunstaltungskalender'),
  new NavigationItemModel('#about', 'Über uns'),
  new NavigationItemModel('#past', 'Rückblick'),
  new NavigationItemModel('#contact', 'Kontakt'),
];

export const NavigationItemsComponent: React.FC = () => (
  <>
    {navItems.map((item, index) => (
      <Nav.Link key={index} href={item.href}>
        {item.label}
      </Nav.Link>
    ))}
  </>
);
