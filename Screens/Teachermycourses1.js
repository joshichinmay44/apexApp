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
    details: [],
    courseList : [],
    mylist : [],
    coursesTeaching : [],
    studentsInfo : [],
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
   
   let renderer=[]
   for(var i=0;i<length;i++){
  renderer[i]=(
    
    
    <Card style={{margin:20}}>
    
      <Card.Title title={this.state.coursesTeaching[i]}/>
      <Card.Cover source={require('../images/ApexLogo.jpg')}/>
      <Card.Title subtitle={this.state.details[i]}/> 
    </Card>)
   }
  
 
return(renderer)
  }

  getCourses=()=>{
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
              if (info.Email.match(username))
              { 
                //console.log(index)
                console.log("details: "+item.Details)
                temp.push(courseList[index]) 
                details.push(item.Details)
                studentsInfo.push(item.Students)
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

   this.setState({details: details},
    function(){
    console.log("this is course list: "+this.state.details);   
 } 
 );

 this.setState({studentsInfo},
  function(){
  console.log("this is course list: "+this.state.studentsInfo[0].id1.Contact);   
} 
);
}   
  
logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      this.props.navigation.navigate('Home',{screen:'Teacher Login'});
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
