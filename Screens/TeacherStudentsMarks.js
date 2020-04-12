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
  TextInput,
  Divider,
} from 'react-native-paper';
import * as firebase from 'firebase';
import styles from '../style/Style';
export default class TeacherstudentsMarks extends Component {
  state = {
    mylist: [],
    data: '',
    course: this.props.route.params.course,
  };
  componentDidMount() {
    let course = this.state.course;
    this.state.data = firebase
      .database()
      .ref('Courses/' + course + '/Students/');
    this.state.data.on('value', datasnap => {
      this.setState({mylist: Object.values(datasnap.val())}, function() {
        console.log('Students: ' + this.state.mylist);
      });
    });
  }

  back = () => {
    this.props.navigation.goBack();
  };

  marksList = () => {
    let length = this.state.mylist.length;
    let renderer = [];

    for (let i = 0; i < length; i++) {
      renderer[i] = (
        <Card
          id={i}
          style={{margin: 20, backgroundColor: '#E9E9E9', padding: '2%'}}>
          <Card.Title title={this.state.mylist[i].Name} />
          {/*  <View style={{flexDirection:'row', padding: '2%'}}>
                    <Text style={{marginLeft: '10%'}} >English</Text>
                    <Text style={styles.Markstext}>GK</Text>
                    <Text >Mathematics</Text>
                </View>   

                 <View  style={{flexDirection:'row', padding: '2%'}}>
                    <View style={styles.Marksview}><Text style={styles.Marksnumber}>{this.state.mylist[i].Marks.English}</Text></View>
                    <View style={styles.Marksview}><Text style={styles.Marksnumber}>{this.state.mylist[i].Marks.GK}</Text></View>
                    <View style={styles.Marksview}><Text style={styles.Marksnumber}>{this.state.mylist[i].Marks.Mathematics}</Text></View>
                </View>   */}
          <View>
            <Text style={styles.Mark}>
              English = {this.state.mylist[i].Marks.English}
            </Text>
            <Text style={styles.Mark}>
              GK = {this.state.mylist[i].Marks.GK}
            </Text>
            <Text style={styles.Mark}>
              Mathematics = {this.state.mylist[i].Marks.Mathematics}
            </Text>
          </View>
        </Card>
      );
    }

    return renderer;
  };

  render() {
    let courseTitle = 'Course: ' + this.state.course;
    return (
      <View style={styles.Container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={this.back} />
          <Appbar.Content title="Student Marks" />
        </Appbar.Header>
        <ScrollView style={styles.Scroll}>
          <View style={styles.Body}>
            <View>
              <Card.Title title={courseTitle} />
              <Card.Title title="Exam : Test 1" />
            </View>
            <Divider />
            {this.marksList()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
