import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavigationItemModel } from '../models/NavigationItemModel';

// export const navItems = [
//   new NavigationItemModel('#home', 'Verunstaltungskalender'),
//   new NavigationItemModel('#about', 'Über uns'),
//   new NavigationItemModel('#past', 'Rückblick'),
//   new NavigationItemModel('#contact', 'Kontakt'),
// ];

// export function NavigationItemsComponent(): JSX.Element[] {
//   const itemsJsx = navItems;
//   return itemsJsx.map((item, index) => (
//     <Nav.Link key={index} href={item.href}>
//       {item.label}
//     </Nav.Link>
//   ));
// }

export function NavigationItemsComponent(): JSX.Element {
  const navigationItem = new NavigationItemModel('#home', 'Verunstaltungskalender');
  return <Nav.Link href={navigationItem.href}>{navigationItem.label}</Nav.Link>;
}
