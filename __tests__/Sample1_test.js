import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import {TestScheduler} from 'jest';
import EligibilityHomeScreen from '../Screens/EligibilityHomeScreen';

/* global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-reanimated', () => {});
jest.mock('@react-navigation/drawer', () => {});
jest.mock('@react-navigation/stack', () => {});
 */
test('renders correctly', () => {
  const snap = renderer.create(<EligibilityHomeScreen />).toJSON();
  expect(snap).toMatchSnapshot();
});
