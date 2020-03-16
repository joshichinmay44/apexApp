import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Appbar, Button, Card} from 'react-native-paper';
import styles from '../style/Style';

import * as firebase from 'firebase';
export default class StudentMarks extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    marks: this.props.route.params.marks,
  };
  back = () => {
    this.props.navigation.navigate('StudentProfile');
  };
  showMarks() {
    const length = this.state.marks.length;
    let renderer = [];
    for (let i = 0; i < length; i++) {
      renderer[i] = (
        <Card style={styles.cardContainer}>
          <Card.Title title={this.state.marks[i]} />
        </Card>
      );
      i++;
      while (this.state.marks[i] != '  ') {
        renderer[i] = (
          <View>
            <Card>
              <Card.Title title={this.state.marks[i]} />
            </Card>
          </View>
        );
        i++;
      }
    }
    return renderer;
  }
  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.BackAction icon="back" onPress={this.back} />
            <Appbar.Content title="Student Profile" />
          </Appbar.Header>

          <View style={styles.Body}>{this.showMarks()}</View>
        </ScrollView>
      </View>
    );
  }
}
