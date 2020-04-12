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
import styles from '../style/Style';
export default class SuccessStories extends React.Component {
  back = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.Container}>
        <ScrollView>
          <Appbar.Header>
          <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Success Stories" />
          </Appbar.Header>
        </ScrollView>
      </View>
    );
  }
}
