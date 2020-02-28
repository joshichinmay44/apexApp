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
export default class StudentProfile extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  viewNotification = () => {
    this.props.navigation.navigate('ViewNotification');
  };
  back = () => {
    this.props.navigation.navigate('Student Login');
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
  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="Student Profile" />
          </Appbar.Header>

          <View style={styles.Body}>
            {/*  <View style={styles.mytextview}>
              <Text style={styles.mytext}>Student Name</Text>
              <Text style={styles.mytext}>Student ID</Text>
              <Text style={styles.mytext}>Contact Number</Text>
              <Text style={styles.mytext}>Course ID</Text>
            </View> */}

            <Card style={styles.cardContainer}>
              <Card.Title title="Student Name" style={{marginBottom: '-5%'}} />
              <Card.Title subtitle="Student Id" style={{marginBottom: '-5%'}} />
              <Card.Title
                subtitle="Contact Number"
                style={{marginBottom: '-5%'}}
              />
              <Card.Title subtitle="Course ID" style={{marginBottom: '-5%'}} />
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
