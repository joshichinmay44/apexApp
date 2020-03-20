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
import { mdiTypewriter } from '@mdi/js';
import * as firebase from 'firebase';

export default class TeacherProfile extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    username: this.props.route.params.username,
    Name: this.props.route.params.Name,
    Contact: this.props.route.params.Contact,
    courseList: [],
    mylist: [],
    teacherInfo: [],
  };

  componentDidMount() {
    const myitems = firebase.database().ref('Courses/');
    myitems.on('value', datasnap => {
      this.setState({mylist: Object.values(datasnap.val())}, function() {
        console.log(this.state.mylist);
        this.getTeacherInfo();
      });
    });
  }

  getTeacherInfo = () => {
    var temp = [];
    const username = this.state.username;
    this.state.mylist.map((item, index) => {
      Object.keys(item).map(function(key) {
        if (key.match('Teacher')) {
          var teacher = item[key];

          Object.keys(teacher).map(function(key) {
            var info = teacher[key];
            if (info.Email.match(username)) {
              //temp.push(info)
              temp = info;
              //console.log("tmp :" + temp.Name)
            }
          });
        }
      });
    });

    this.setState({teacherInfo: temp}, function() {
      //console.log("this is teacher info: "+this.state.teacherInfo);
    });
  };

  viewNotification = () => {
    this.props.navigation.navigate('ViewNotification');
  };

  viewCourseInfo = () => {
    this.props.navigation.navigate('Teachermycourses1', {
      username: this.state.username,
    });
  };

  viewProgress = () => {
    this.props.navigation.navigate('Teacherstudentprogress',{
      username:this.state.username
    });
  };

  writeBlogs = () => {
    //this.props.navigation.navigate('ViewCourseInfo');
  };
  writeNotices = () => {
    this.props.navigation.navigate('ViewCourseInfo');
  };

  logout = () => {
    firebase

      .auth()
      .signOut()
    .then(()=>{this.props.navigation.navigate('Login')
  console.log('Logged Out')})
      }
     
renderName=()=>{


  return (this.state.teacherInfo.Name)
  
}

  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.Content style={styles.Title}  title="Teacher Profile" /> 
            <Appbar.Action icon="logout" onPress={this.logout} />
          </Appbar.Header>

          <View style={styles.Body}>
            {/*  <View style={styles.mytextview}>
              <Text style={styles.mytext}>Teacher Name</Text>
              <Text style={styles.mytext}>Teacher ID</Text>
              <Text style={styles.mytext}>Contact Info</Text>
            </View> */}

            <Card style={styles.cardContainer}>
              <Card.Cover source={require('../images/welcome.jpg')}/>
            </Card>

            <Card.Title title={this.renderName()} subtitle={this.state.teacherInfo.Contact} />
          <Card.Content><Text style={styles.Info}>Subject:{' '}{this.state.teacherInfo.Subject}</Text></Card.Content>
            
            <View style={{flexDirection:'row', marginTop:60,alignSelf:'center'}}>
            <Button  icon='information' style={{marginRight:20}} onPress={this.viewCourseInfo}> My Courses</Button>
            <Button  icon='account-details'  onPress={this.viewProgress}> Student Marks</Button>
            </View>
            <View style={{flexDirection:'row', marginTop:30,alignSelf:'center'}}>
            <Button  icon='pen-plus' style={{marginRight:20}} onPress={this.viewCourseInfo}> Write Notices</Button>
            <Button  icon='bell-outline'  onPress={this.viewCourseInfo}> View Notices</Button>
            </View>
            <View style={{flexDirection:'row', marginTop:30,alignSelf:'center'}}>
            <Button  icon='pen-plus' style={{marginRight:20}} onPress={this.viewCourseInfo}> Write Blogs</Button>
            <Button  icon='book-open'  onPress={this.viewCourseInfo}>Read Blogs</Button>
            </View>

           {/*  <View style={styles.button}>
              <Button mode="contained" onPress={this.viewNotification}>
                View Notices
              </Button>
            </View>
            <View style={styles.button}>
              <Button mode="contained" onPress={this.writeNotices}>
                Write Notices
              </Button>
            </View>
            <View style={styles.button}>
              <Button mode="contained" onPress={this.viewCourseInfo}>
                My Courses
              </Button>
            </View>
            <View style={styles.button}>
              <Button mode="contained" onPress={this.viewProgress}>
                Students Progress
              </Button>
            </View>
            <View style={styles.button}>
              <Button mode="contained" onPress={this.writeBlogs}>
                Write Blogs
              </Button>
            </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}


