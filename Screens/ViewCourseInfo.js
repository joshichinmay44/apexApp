import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Block, Button, Icon, Input, NavBar} from 'galio-framework';
import {MaterialIcons} from 'react-native-vector-icons';
import {Appbar, Text, Card} from 'react-native-paper';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
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
      renderer[i] = (
        <Card style={{margin: 20}}>
          <Card.Title title={this.state.my_courses[i]} />
          <Card.Title subtitle={this.state.details[i]} />
          <Card.Cover source={require('../images/ApexLogo.jpg')} />
        </Card>
      );
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
