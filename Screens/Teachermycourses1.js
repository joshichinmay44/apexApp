import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import styles from '../style/Style';
import {Appbar, Card, Button} from 'react-native-paper';
import * as firebase from 'firebase';

export default class Teachermycourses1 extends React.Component {
  state = {
    username: this.props.route.params.username,
    details: [],
    courseList: [],
    mylist: [],
    coursesTeaching: [],
    studentsInfo: [],
    id: -1,
  };

  componentDidMount() {
    const myitems = firebase.database().ref('Courses/');
    myitems.on('value', datasnap => {
      this.setState({mylist: Object.values(datasnap.val())}, function() {
        console.log(this.state.mylist);
      });

      this.setState({courseList: Object.keys(datasnap.val())}, function() {
        console.log(this.state.courseList);
        this.getCourses();
      });
    });
  }

  back = () => {
    this.props.navigation.navigate('TeacherProfile');
  };

  renderCourseDetails = i => {
    //console.log("value of i: "+i)
    let studentList = this.state.studentsInfo[i];
    let course = this.state.coursesTeaching[i];
    let username = this.state.username;
    //console.log(studentList)
    this.props.navigation.navigate('TeacherCourseDetails', {
      studentList: studentList,
      course: course,
      username: username,
    });
  };

  renderCourseButton = () => {
    let length = this.state.coursesTeaching.length;

    let renderer = [];
    for (let i = 0; i < length; i++) {
      //console.log(i)
      renderer[i] = (
        <Card id={i} style={{margin: 20}}>
          <TouchableOpacity onPress={() => this.renderCourseDetails(i)}>
            <Card.Title title={this.state.coursesTeaching[i]} />
            <Card.Title subtitle={this.state.details[i]} />
            <Card.Cover source={require('../images/ApexLogo.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }

    return renderer;
  };

  getCourses = () => {
    var temp = [];
    var details = [];
    var studentsInfo = [];
    var courseList = this.state.courseList;
    const username = this.state.username;
    this.state.mylist.map((item, index) => {
      Object.keys(item).map(function(key) {
        if (key.match('Teacher')) {
          var teacher = item[key];

          Object.keys(teacher).map(function(key) {
            var info = teacher[key];
            if (info.Email.match(username)) {
              //console.log(index)
              console.log('details: ' + item.Details);
              temp.push(courseList[index]);
              details.push(item.Details);
              studentsInfo.push(item.Students);
              //console.log("tmp :" + temp)
            }
          });
        }
      });
    });

    this.setState({coursesTeaching: temp}, function() {
      console.log('this is course list: ' + this.state.coursesTeaching);
    });

    this.setState({details: details}, function() {
      console.log('these are details: ' + this.state.details);
    });

    this.setState({studentsInfo}, function() {
      /* console.log("this is students list: "+this.state.studentsInfo[0].id1.Contact);
  this.state.studentsInfo.map((item, index) => {
    Object.keys(item).map(function(key) {
      var stud=item[key]
      console.log(stud)
    })   
  })  */
    });
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      });
  };
  render() {
    return (
      <View style={styles.Container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={this.back} />
          <Appbar.Content title="Teacher Courses" />
          <Appbar.Action icon="logout" onPress={this.logout} />
        </Appbar.Header>
        <ScrollView style={styles.Scroll}>
          <View>{this.renderCourseButton()}</View>
        </ScrollView>
      </View>
    );
  }
}
