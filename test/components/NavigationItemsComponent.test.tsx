import * as React from 'react';
import { NavigationItemsComponent } from '../../src/components/NavigationItemsComponent';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders NavigationComponent correctly', () => {
    expect(shallow(<NavigationItemsComponent />)).toMatchSnapshot();
  });
});
