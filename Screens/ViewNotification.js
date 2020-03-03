import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Block, Button, Icon, Input, NavBar, Text} from 'galio-framework';
import {MaterialIcons} from 'react-native-vector-icons';
import {Appbar, Card} from 'react-native-paper';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import styles from '../style/Style';
export default class ViewNotification extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  back = () => {
    this.props.navigation.navigate('StudentProfile');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="Notifications" subtitle="view" />
          </Appbar.Header>

          <View style={styles.Body}>
            <Card style={styles.cardContainer}>
              <Card.Title title="Heading" />
              <Card.Title subtitle="Body" />
              <Card.Title subtitle="Date and Time and Author" />
            </Card>
            <Card style={styles.cardContainer}>
              <Card.Title title="Heading" />
              <Card.Title subtitle="Body" />
              <Card.Title subtitle="Date and Time and Author" />
            </Card>
            <Card style={styles.cardContainer}>
              <Card.Title title="Heading" />
              <Card.Title subtitle="Body" />
              <Card.Title subtitle="Date and Time and Author" />
            </Card>
            <Card style={styles.cardContainer}>
              <Card.Title title="Heading" />
              <Card.Title subtitle="Body" />
              <Card.Title subtitle="Date and Time and Author" />
            </Card>
          </View>
        </View>
      </ScrollView>
    );
  }
}
