import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Appbar, Button, Card, Avatar} from 'react-native-paper';
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
        /*  <Card>
          <Card.Title title={this.state.marks[i]} />
        </Card> */

        <Text style={styles.MarkTitle}>{this.state.marks[i]}</Text>
      );
      i++;
      while (this.state.marks[i] != '  ') {
        renderer[i] = (
          // <Card>

          <Text style={styles.Mark}>
            {this.state.marks[i++]} = {this.state.marks[i]}
          </Text>
          // </View>
          // </Card>
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
            <Appbar.Content title=" Marks" />
          </Appbar.Header>

          <View style={styles.Body}>
            <View style={{margin: 20, backgroundColor: '#E9E9E9'}}>
              {this.showMarks()}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
