import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image, Linking} from 'react-native';
import {Block, Button, Icon, Input, NavBar} from 'galio-framework';
import {Appbar, Text, Card} from 'react-native-paper';
import styles from '../style/Style';
export default class ViewNotification extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    my_courses: this.props.route.params.my_courses,
    details: this.props.route.params.details,
  };
  back = () => {
    this.props.navigation.navigate('StudentProfile');
  };
  renderCourseButton() {
    let length = this.state.my_courses.length;
    let renderer = [];
    for (var i = 0; i < length; i++) {
      if (this.state.my_courses[i].indexOf('CDS') != -1) {
        renderer[i] = (
          <View>
            <Card style={styles.cardContainer}>
              <Card.Title title={this.state.my_courses[i]} />
              <Card.Title subtitle={this.state.details[i]} />
              <Card.Cover source={require('../images/cds.jpg')} />
            </Card>
            <Card>
              <Card.Content>
                <Button
                  //style={styles.button}
                  icon="book-open"
                  style={{backgroundColor: '#084d7b', marginBottom: '2%'}}
                  mode="text"
                  onPress={() =>
                    Linking.openURL(
                      'https://www.upsc.gov.in/sites/default/files/Notice-CDSI2020-Engl-Final.pdf',
                    )
                  }>
                  Check Syllabus
                </Button>

                <Button
                  style={{backgroundColor: '#084d7b', marginBottom: '2%'}}
                  onPress={() =>
                    Linking.openURL(
                      'https://upsc.gov.in/sites/default/files/Cut-off-CDS-I-2018.pdf',
                    )
                  }>
                  Previous cut offs
                </Button>
                <Button
                  style={{backgroundColor: '#084d7b', marginBottom: '2%'}}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.upsc.gov.in/examinations/previous-question-papers?field_exam_name_value=Combined+Defence+Services',
                    )
                  }>
                  Model Question Papers
                </Button>
              </Card.Content>
            </Card>
          </View>
        );
      } else if (this.state.my_courses[i].indexOf('NDA') != -1) {
        console.log('couse is nda');

        renderer[i] = (
          <View>
            <Card style={styles.cardContainer}>
              <Card.Title title={this.state.my_courses[i]} />
              <Card.Title subtitle={this.state.details[i]} />
              <Card.Cover source={require('../images/NDA.jpg')} />
            </Card>
            <Card>
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
              </Card.Content>
            </Card>
          </View>
        );
      }
    }
    return renderer;
  }

  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="Course Information" />
          </Appbar.Header>

          <View style={styles.Body}>{this.renderCourseButton()}</View>
        </ScrollView>
      </View>
    );
  }
}
