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

export default class TeacherProfile extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state={
    username : this.props.route.params.username,
    Name : this.props.route.params.Name,
    Contact : this.props.route.params.Contact,
    courseList : [],
    mylist : [],
    teacherInfo : [],
  }
  
  componentDidMount(){
    const myitems = firebase.database().ref("Courses/")
    myitems.on("value", datasnap=>{
      this.setState({mylist : Object.values(datasnap.val())}
       ,function(){
         console.log(this.state.mylist)
        this.getTeacherInfo()
      } 
      )
    })
  }

  getTeacherInfo=()=>{
    var temp = [];
      const username = this.state.username;
      this.state.mylist.map((item, index) => {
       
        Object.keys(item).map(function(key) {
          if (key.match('Teacher')) {
          var teacher = item[key];
         
          Object.keys(teacher).map(function(key) {
            var info = teacher[key];
              if (info.Email.match(username))
              { 
                //temp.push(info) 
                temp=info
                //console.log("tmp :" + temp.Name)            
              }  
          });
        }
      });
    }); 
   

    this.setState({teacherInfo: temp},
      function(){
      //console.log("this is teacher info: "+this.state.teacherInfo);   
      
   } 
   );
    
  }



  viewNotification = () => {
    this.props.navigation.navigate('ViewNotification');
  };

  viewCourseInfo = () => {
    this.props.navigation.navigate('Teachermycourses1', {
      username : this.state.username,

    });
};

  viewProgress = () => {
    this.props.navigation.navigate('Teacherstudentprogress');
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
    .then(()=>{this.props.navigation.navigate('Home',{screen:'Teacher Login'})
  console.log('Logged Out')})
      }
     


  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.Content title="Teacher Profile" />

            <Appbar.Action icon="logout" onPress={this.logout } />
          </Appbar.Header>

          <View style={styles.Body}>
            {/*  <View style={styles.mytextview}>
              <Text style={styles.mytext}>Teacher Name</Text>
              <Text style={styles.mytext}>Teacher ID</Text>
              <Text style={styles.mytext}>Contact Info</Text>
            </View> */}

            <Card style={styles.cardContainer}>
              
              <Card.Title title={this.state.teacherInfo.Name} style={{marginBottom: '-5%'}} />
              <Card.Title subtitle={this.state.username} style={{marginBottom: '-5%'}} />
              <Card.Title
                subtitle={this.state.teacherInfo.Contact}
                style={{marginBottom: '-5%'}}
              />
            </Card>

            <View style={styles.button}>
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
    // padding:'2%',
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

    //padding:'2%',
    //backgroundColor:'red',
  },
  mytext: {
    margin: '5%',
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
