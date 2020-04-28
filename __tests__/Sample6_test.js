import React from 'react';
import Login from '../Screens/Studentlogin';
import renderer from 'react-test-renderer';
global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});

it('check fun', () => {
  let loginComponent = renderer.create(<Login />).getInstance();
  loginComponent.load();
  // loginComponent.studentProfile();
  loginComponent.onLoginSuccess();
});
