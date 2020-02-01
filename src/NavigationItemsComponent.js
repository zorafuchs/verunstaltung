import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavigationItemModel } from './NavigationItemModel';

export const navItems = [
    new NavigationItemModel('#home', 'Verunstaltungskalender'),
    new NavigationItemModel('#about', 'Über uns'),
    new NavigationItemModel('#past', 'Rückblick'),
    new NavigationItemModel('#contact', 'Kontakt')
]

export function NavigationItemsComponent() {
    var itemsJsx = [];
    navItems.forEach(item => {
        itemsJsx.push(<Nav.Link href={item.href}>{item.label}</Nav.Link>);
    });
    return itemsJsx;
}
