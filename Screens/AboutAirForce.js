import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Appbar, Button, Text, TextInput, Card} from 'react-native-paper';
import styles from '../style/Style';
export default class AboutArmy extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  back = () => {
    this.props.navigation.navigate('Services');
  };

  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="About AirForce" />
          </Appbar.Header>
          <View style={styles.Body}>
            <Image
              style={styles.logo}
              source={require('../images/AboutPhoto.jpg')}
            />
            <Text style={styles.Title}>ABout the Air Force</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
