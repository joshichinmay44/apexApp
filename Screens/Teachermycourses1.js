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
import {Appbar, Card} from 'react-native-paper';
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

  

  renderCourseButton=()=>{
   let length=this.state.coursesTeaching.length
   console.log(length)
   let renderer=[]
   for(var i=0;i<length;i++){
  renderer[i]=(
     <Card style={{margin:20}}>
    
      <Card.Title title={this.state.coursesTeaching[i]}/>
      <Card.Cover source={require('../images/ApexLogo.jpg')}/>
           
    </Card>)
   }
return(renderer)
  }

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

          console.log(courseList.length)
        }
      });
    }); 
   

    this.setState({coursesTeaching: temp},
      function(){
      console.log("this is course list: "+this.state.coursesTeaching);   
   } 
   );
}   
  
logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      this.props.navigation.navigate('Teacherlogin');
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
          <View>
        {this.renderCourseButton()}
        </View>

        </ScrollView>
      </View>
    );
  }
}
