import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Card,
  Button,
  Title,
  Paragraph,
  Appbar,
} from 'react-native-paper';
import '../style/Style';
export default class DirectorsDesk extends React.Component {
  back = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.Container}>
        <ScrollView>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="Directors Desk" />
          </Appbar.Header>
        </ScrollView>
      </View>
    );
  }
}
