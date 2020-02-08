import { NavigationItemModel } from '../../src/models/NavigationItemModel';

describe('NavigationItemModel', () => {
  it('constructor works', () => {
    const item = new NavigationItemModel('href', 'label');
    expect(item.href).toBe('href');
    expect(item.label).toBe('label');
  });
});
