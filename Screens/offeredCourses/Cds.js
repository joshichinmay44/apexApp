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
  Appbar,
  Button,
  Card,
  Avatar,
  Title,
  Paragraph,
} from 'react-native-paper';
import styles from '../../style/Style';
export default class Cds extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  back = () => {
    this.props.navigation.navigate('CoursesOffered');
  };
  backToHome = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.Container}>
       
          <Appbar.Header style={styles.Header}>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="CDS" />
            <Appbar.Action icon="home" onPress={this.backToHome} />
          </Appbar.Header>
          <ScrollView style={styles.Scroll}>
          <View style={styles.Body}></View>
        </ScrollView>
      </View>
    );
  }
}
