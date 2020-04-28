import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Studentlogin from '../Screens/Studentlogin';
import {TestScheduler} from 'jest';

/* global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-reanimated', () => {});
jest.mock('@react-navigation/drawer', () => {});
jest.mock('@react-navigation/stack', () => {});
 */
test('renders correctly', () => {
  const snap = renderer.create(<Studentlogin />).toJSON();
  expect(snap).toMatchSnapshot();
  let loginComponent = renderer.create(<Studentlogin />).getInstance();
  loginComponent.load();
  loginComponent.onLoginSuccess();
});
