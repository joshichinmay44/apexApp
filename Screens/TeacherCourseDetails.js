import React, {Component} from 'react';
import {Text, View, FlatList, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../style/Style';
import {Appbar, Card, Button} from 'react-native-paper';
import * as firebase from 'firebase';
export default class TeacherCourseDetails extends Component {
  state = {
    studentList: this.props.route.params.studentList,
    courseSelected: this.props.route.params.course,
    username: this.props.route.params.username,
  };

  back = () => {
    this.props.navigation.navigate('Teachermycourses1');
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      });
  };

  writeNotices = () => {
    let username = this.state.username;
    let course = this.state.courseSelected;
    //console.log("userame1"+username)
    this.props.navigation.navigate('Writenotification', {
      username: username,
      course: course,
    });
  };

  viewStudentMarks = () => {
    let username = this.state.username;
    let course = this.state.courseSelected;
    //console.log("userame1"+username)
    this.props.navigation.navigate('TeacherStudentMarks', {
      username: username,
      course: course,
    });
  };

  renderDetails = () => {
    let course = this.props.route.params.course;
    let c = course.split(' ');
    for (let i = 0; i < c.length; i++) {
      if (c[i] == 'CDS')
        //console.log('CDS')
        return (
          <View style={styles.Body}>
            <Card style={styles.cardContainer}>
              <Card.Cover source={require('../images/cds.jpg')} />
              <Card.Content>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.upsc.gov.in/sites/default/files/Notice-CDSI2020-Engl-Final.pdf',
                    )
                  }>
                  Check Syllabus
                </Button>

                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://upsc.gov.in/sites/default/files/Cut-off-CDS-I-2018.pdf',
                    )
                  }>
                  Previous cut offs
                </Button>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.upsc.gov.in/examinations/previous-question-papers?field_exam_name_value=Combined+Defence+Services',
                    )
                  }>
                  Model Question Papers
                </Button>
                <Button style={styles.button} onPress={this.writeNotices}>
                  Write Notification
                </Button>
                <Button style={styles.button} onPress={this.viewStudentMarks}>
                  Student Marks
                </Button>
              </Card.Content>
            </Card>
          </View>
        );
      else if (c[i] == 'NDA')
        return (
          <View style={styles.Body}>
            <Card style={styles.cardContainer}>
              <Card.Cover source={require('../images/NDA.jpg')} />
              <Card.Content>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.upsc.gov.in/sites/default/files/Notice-NDAI2020-Engl-Final.pdf',
                    )
                  }>
                  Check Syllabus
                </Button>

                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://upsc.gov.in/sites/default/files/Cut-off-CDS-I-2018.pdf',
                    )
                  }>
                  Previous cut offs
                </Button>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.upsc.gov.in/examinations/previous-question-papers?field_exam_name_value=Combined+Defence+Services',
                    )
                  }>
                  Model Question Papers
                </Button>
                <Button style={styles.button} onPress={this.writeNotices}>
                  Write Notification
                </Button>
                <Button style={styles.button} onPress={this.viewStudentMarks}>
                  Student Marks
                </Button>
              </Card.Content>
            </Card>
          </View>
        );
        else if (c[i] == 'AFCAT')
        return (
          <View style={styles.Body}>
            <Card style={styles.cardContainer}>
              <Card.Cover source={require('../images/AFCAT.jpg')} />
              <Card.Content>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://afcat.cdac.in/AFCAT/assets/images/news/afcatGuidlines/GuidelinesForOnlineApplication.pdf',
                    )
                  }>
                  Check Syllabus
                </Button>

                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://gradeup.co/afcat-exam-previous-year-cutoff-i-bf9913c0-692b-11e7-b4bf-7b8afc3efb42',
                    )
                  }>
                  Previous cut offs
                </Button>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
'https://afcat.cdac.in/AFCAT/downloadpaper.html'                    )
                  }>
                  Model Question Papers
                </Button>
                <Button style={styles.button} onPress={this.writeNotices}>
                  Write Notification
                </Button>
                <Button style={styles.button} onPress={this.viewStudentMarks}>
                  Student Marks
                </Button>
              </Card.Content>
            </Card>
          </View>
        );

        else if (c[i] == 'INET')
        return (
          <View style={styles.Body}>
            <Card style={styles.cardContainer}>
              <Card.Cover source={require('../images/INET.jpg')} />
              <Card.Content>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.joinindiannavy.gov.in/files/files/SYLLABUS%20FOR%20INET%20FOR%20OFFICERS.pdf',
                    )
                  }>
                  Check Syllabus
                </Button>

                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://gradeup.co/inet-result-cut-off-marks-2020-i',
                    )
                  }>
                  Previous cut offs
                </Button>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
'https://www.joinindiannavy.gov.in/files/files/SAMPLE%20QP%20FOR%20INET%20PUBLISHING.pdf'                    )
                  }>
                  Model Question Papers
                </Button>
                <Button style={styles.button} onPress={this.writeNotices}>
                  Write Notification
                </Button>
                <Button style={styles.button} onPress={this.viewStudentMarks}>
                  Student Marks
                </Button>
              </Card.Content>
            </Card>
          </View>
        );

        else if (c[i] == 'SPI')
        return (
          <View style={styles.Body}>
            <Card style={styles.cardContainer}>
              <Card.Cover source={require('../images/spi.jpg')} />
              <Card.Content>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://spiaurangabad.com/procedure/',
                    )
                  }>
                  Check Syllabus
                </Button>

               
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
'http://www.ceptam.in/spi-aurangabad-sample-question-paper-mathematics-2/'                    )
                  }>
                  Model Question Papers
                </Button>
                <Button style={styles.button} onPress={this.writeNotices}>
                  Write Notification
                </Button>
                <Button style={styles.button} onPress={this.viewStudentMarks}>
                  Student Marks
                </Button>
              </Card.Content>
            </Card>
          </View>
        );

        else if (c[i] == 'SSB')
        return (
          <View style={styles.Body}>
            <Card style={styles.cardContainer}>
              <Card.Cover source={require('../images/SSB.jpg')} />
              <Card.Content>
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.ssbcrack.com/2013/02/thematic-apperception-test-tat-of-ssb.html',
                    )
                  }>
Psychology Test Material                </Button>

               
                <Button
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
'https://ssbcrackexams.com/military-planning-exercise-ssb-interview/'                    )
                  }> 
                  Group Planning Exercise
                </Button>
                <Button style={styles.button} onPress={this.writeNotices}>
                  Write Notification
                </Button>
                
              </Card.Content>
            </Card>
          </View>
        );

        


    }

    
  };

  render() {
    let course = this.props.route.params.course;

    Object.entries(this.state.studentList).map(([key, value]) => {
      console.log(value);
    });

    let studentList = this.state.studentList;
    return (
      <View style={styles.Container}>
        {/*  <Text>{course} </Text> */}
        <Appbar.Header>
          <Appbar.BackAction onPress={this.back} />
          <Appbar.Content title={course} />
          <Appbar.Action icon="logout" onPress={this.logout} />
        </Appbar.Header>

        {this.renderDetails()}
      </View>
    );
  }
}
