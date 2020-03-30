import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {Appbar, Card} from 'react-native-paper';
import styles from '../style/Style';
export default class ViewNotification extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    Notifications: this.props.route.params.Notification,
  };

  back = () => {
    this.props.navigation.navigate('StudentProfile');
  };
  renderObj = () => {
    const data = this.state.Notifications;
    const renderer = [];
    let i = 0;

    Object.keys(data).map((obj, i) => {
      renderer[i] = (
        <Card style={styles.cardContainer}>
          <Card.Title title={data[obj].Subject} />
          <Card.Title subtitle={data[obj].Date} />
          <Card.Title subtitle={data[obj].Description} />
          <Card.Title subtitle={data[obj].username} />
        </Card>
      );
      i++;
    });
    return renderer;
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="Notifications" />
          </Appbar.Header>

          <View style={styles.Body}>{this.renderObj()}</View>
        </View>
      </ScrollView>
    );
  }
}
