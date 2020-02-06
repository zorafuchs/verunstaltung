import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import NavigationItemsComponent from '../Components/NavigationItemsComponent';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders learn link "Kontakt"', () => {
  act(() => {
    render(<NavigationItemsComponent />, container);
  });
  expect(container.textContent).toContain("Kontakt");
});