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
import * as firebase from 'firebase';

export default class Teachermycourses1 extends React.Component {
  state={
    username : this.props.route.params.username,
   
    courseList : [],
    mylist : [],
    coursesTeaching : [],
  }

  componentDidMount(){
    const myitems = firebase.database().ref("Courses/")
    myitems.on("value", datasnap=>{
      this.setState({mylist : Object.values(datasnap.val())}
       ,function(){
         console.log(this.state.mylist)
       
      } 
      )

      this.setState({courseList : Object.keys(datasnap.val())}
       ,function(){
         console.log(this.state.courseList)
        this.getCourses()
      } 
      )
    })
  }

  back = () => {
    this.props.navigation.navigate('TeacherProfile');
  };

  getCourses=()=>{
      var temp = [];
      var courseList = this.state.courseList;
      const username = this.state.username;
      this.state.mylist.map((item, index) => {
       
        Object.keys(item).map(function(key) {
          if (key.match('Teacher')) {
          var teacher = item[key];
          
          Object.keys(teacher).map(function(key) {
            var info = teacher[key];
              if (info.Email.match(username))
              { 
                //console.log(index)
                //console.log(courseList[index])
                temp.push(courseList[index]) 
              
               //console.log("tmp :" + temp)            
              }  
          });
        }
      });
    }); 
   

    this.setState({coursesTeaching: temp},
      function(){
      console.log("this is course list: "+this.state.coursesTeaching);   
   } 
   );
}   
  

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
