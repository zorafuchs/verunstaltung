import * as React from 'react';
import { NavigationComponent } from '../../src/components/NavigationComponent';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders NavigationComponent correctly', () => {
    expect(shallow(<NavigationComponent />)).toMatchSnapshot();
  });
});
