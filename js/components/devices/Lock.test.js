import renderer from 'react-test-renderer';
import React from 'react';
import Lock from './Lock';

test('Lock render', () => {
  const component = renderer.create(<Lock
    deviceNameParts={['apt', '145', 'lock']}
    deviceInfo={{ 'apt-145-lock': [{ state: 'locked', timestamp: 123 }] }}
    onLockClick={() => console.log('clicked')} // eslint-disable-line no-console
  />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
