import React from 'react';
import Device from './Device';
import renderer from 'react-test-renderer';

test('Device render', () => {
  const component = renderer.create(<Device />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
