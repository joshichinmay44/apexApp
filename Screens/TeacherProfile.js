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
import * as firebase from 'firebase'
export default class TeacherProfile extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state={
    email : this.props.route.params.username,
    teacherInfo : this.props.route.params.teacherInfo,
  }
  


  back = () => {
    this.props.navigation.navigate('Teacher Login');
  };
  viewNotification = () => {
    this.props.navigation.navigate('ViewNotification');
  };
  viewCourseInfo = () => {
    this.props.navigation.navigate('Teachermycourses1');
  };
  viewProgress = () => {
    this.props.navigation.navigate('Teacherstudentprogress');
  };

  writeBlogs = () => {
    this.props.navigation.navigate('ViewCourseInfo');
  };
  writeNotices = () => {
    this.props.navigation.navigate( 'ViewCourseInfo');
  };

  logout=()=>{
    firebase.auth().signOut().then(()=>{
      this.props.navigation.navigate('Teacherlogin')
    })
  }

  render() {
    
    return (
    
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            
            <Appbar.Content title="Teacher Profile" />

            <Appbar.Action icon='logout' onPress={this.logout}/>
          </Appbar.Header>

          <View style={styles.Body}>
            {/*  <View style={styles.mytextview}>
              <Text style={styles.mytext}>Teacher Name</Text>
              <Text style={styles.mytext}>Teacher ID</Text>
              <Text style={styles.mytext}>Contact Info</Text>
            </View> */}
            

            <Card style={styles.cardContainer}>
              
              <Card.Title title={this.state.teacherInfo.Name} style={{marginBottom: '-5%'}} />
              <Card.Title subtitle={this.state.email} style={{marginBottom: '-5%'}} />
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
