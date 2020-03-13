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
export default class StudentProfile extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    email: this.props.route.params.username,
    mycourses: [],
    my_courses: [],
    info_val: [],
    info_key: [],
    courses: [],
  };
  componentDidMount() {
    const myitems = firebase.database().ref('Courses/');
    myitems.on('value', datasnap => {
      if (datasnap.val()) {
        this.setState({mycourses: Object.values(datasnap.val())}, () => {
          console.log();
        });

        this.setState({courses: datasnap}, () => {
          console.log();
          this.getinfo();
        });
      }
    });
  }

  getinfo() {
    const email = this.state.email;
    let myinfoval = [];
    let myinfokey = [];
    let courses = [];
    let my_courses = [];
    let count = 0;
    let coursedetail = '';
    let courseindetail = '';
    let detailsFlag = 0;
    let flag = 0;

    const ex = this.state.courses.val();
    this.setState({courses: this.state.courses.val()});
    Object.keys(ex).map(key => {
      courses.push(key);
    });

    const demo = this.state.mycourses;
    count = 0;
    Object.keys(demo).map(key => {
      const item = demo[key];
      Object.keys(item).map(key => {
        if (key == 'Details') {
          coursedetail = key;
          courseindetail = item[key];
        }
        if (key == 'Students') {
          var stud = item[key];
          Object.keys(stud).map(key => {
            var mail = stud[key];
            Object.keys(mail).map(key => {
              if (key == 'Email' && mail[key] == email) {
                flag = 1;
              }
            });
            if (flag == 1) {
              myinfokey.push('Course');
              myinfoval.push(courses[count]);
              my_courses.push(courses[count]);
              myinfokey.push('id');
              myinfoval.push(key);

              Object.keys(mail).map(key => {
                myinfokey.push(key);
                myinfoval.push(mail[key]);
              });
              detailsFlag = 1;
              flag = 0;
            }
          });
        }

        if (detailsFlag == 1) {
          myinfokey.push(coursedetail);
          myinfoval.push(courseindetail);
          detailsFlag = 0;
        }
      });
      count = count + 1;
    });

    this.setState({info_val: myinfoval}, () => {});
    this.setState({info_key: myinfokey}, () => {});
    this.setState({my_courses: my_courses}, () => {});
  }
  viewNotification = () => {
    this.props.navigation.navigate('ViewNotification');
  };

  viewCourseInfo = () => {
    this.props.navigation.navigate('ViewCourseInfo');
  };
  viewMarks = () => {
    this.props.navigation.navigate('ViewCourseInfo');
  };
  viewBlogs = () => {
    this.props.navigation.navigate('ViewCourseInfo');
  };
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate( 'Studentlogin');
      });
  };
  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.Content title="Student Profile" />
            <Appbar.Action icon="logout" onPress={this.logout} />
          </Appbar.Header>

          <View style={styles.Body}>
            {console.log('info_key = [' + this.state.info_key + ']')}
            {console.log('info_val=[' + this.state.info_val + ']')}
            {console.log('my_courses=[' + this.state.my_courses + ']')}
            <Card style={styles.cardContainer}>
              <Card.Title
                title={this.state.info_val[4]}
                subtitle={this.state.info_key[4]}
                style={{marginBottom: '-5%'}}
              />

              <Card.Title
                title={this.state.info_val[2]}
                subtitle={this.state.info_key[2]}
                style={{marginBottom: '-5%'}}
              />
              <Card.Title
                title={this.state.info_val[3]}
                subtitle={this.state.info_key[3]}
                style={{marginBottom: '-5%'}}
              />
            </Card>

            <View style={styles.button}>
              <Button mode="contained" onPress={this.viewNotification}>
                View Notification
              </Button>
            </View>
            <View style={styles.button}>
              <Button mode="contained" onPress={this.viewCourseInfo}>
                View Course Information
              </Button>
            </View>
            <View style={styles.button}>
              <Button mode="contained" onPress={this.viewMarks}>
                View Marks
              </Button>
            </View>
            <View style={styles.button}>
              <Button mode="contained" onPress={this.viewBlogs}>
                View Blogs
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
/* 
const styles = StyleSheet.create({
  Container: {
    height: '100%',
    backgroundColor: '#fdfefe',
  },
  mytextview: {
    padding: '2%',
  },
  Scroll: {
    backgroundColor: '#fdfefe',
    height: '100%',
  },

  Body: {
    backgroundColor: 'white',
    height: '100%',
    paddingBottom: '90%',
    flexDirection: 'row',
  },
  innertextview: {
    height: '900%',
    borderLeftWidth: 2,
    borderLeftColor: 'blue',
  },
  mytext: {
    marginTop: '5%',
  },
  logo: {
    marginTop: '0%',
    marginBottom: '20%',
    height: '50%',
    width: '30%',
  },
  button: {
    margin: '3%',
    marginLeft: '-1%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
  },
});
 */
