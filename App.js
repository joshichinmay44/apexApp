import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import Navigator from './Screens/Stack';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import * as firebase from 'firebase'
import firebaseConfig from './config'


export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#084d7b" barStyle="light-content" />

        <Navigator />
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
