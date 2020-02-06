import { NavigationItemModel } from '../Models/NavigationItemModel';

it('uses constructor', () => {
  var model = new NavigationItemModel('href-value', 'label-value')
  expect(model.href).toBe('href-value');
  expect(model.label).toBe('label-value');
});

it('does not use constructor', () => {
    var model = new NavigationItemModel()
    expect(model.href).toBe(undefined);
    expect(model.label).toBe(undefined);
  });