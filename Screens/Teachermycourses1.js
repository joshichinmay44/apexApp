import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import styles from '../style/Style';
import {Appbar, Button} from 'react-native-paper';

export default class Teachermycourses1 extends React.Component {
  back = () => {
    this.props.navigation.navigate('TeacherProfile');
  };
  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="Teacher Courses" />
          </Appbar.Header>

          <View style={styles.Body}>
            <View style={styles.button}>
              <Button mode="contained" onPress={this.teacherProfile}>
                Course 1
              </Button>
            </View>

            <View style={styles.button}>
              <Button mode="contained" onPress={this.teacherProfile}>
                Course 2
              </Button>
            </View>

            <View style={styles.button}>
              <Button mode="contained" onPress={this.teacherProfile}>
                Course 3
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
