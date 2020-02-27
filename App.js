import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';

import Navigator from './Screens/Stack';
import Services from './Screens/Services';
import About from './Screens/Home';
import Studentlogin from './Screens/Studentlogin';
import Teacherlogin from './Screens/Teacherlogin';
import StudentProfile from './Screens/StudentProfile';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#084d7b" barStyle="light-content" />
        <About />
        {/*  <Navigator />
         */}
      </PaperProvider>
    );
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#084d7b',
    accent: '#f1c40f',
  },
};
