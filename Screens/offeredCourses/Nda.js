import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Appbar,
  Button,
  Card,
  Avatar,
  Title,
  Paragraph,
} from 'react-native-paper';
import styles from '../../style/Style';
export default class Nda extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  back = () => {
    this.props.navigation.navigate('CoursesOffered');
  };
  backToHome = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header style={styles.Header}>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="NDA" />
            <Appbar.Action icon="home" onPress={this.backToHome} />
          </Appbar.Header>
          
            <Card.Cover source={require('../../images/NDA.jpg')} />
          <Card.Title style={styles.Title} title='NDA and NA two year Course'/>
          <Card.Content>
            <Text style={styles.Info}>
            Two years batch of XI+XII+NDA caters to a good score in the XII Science (PCM) Board Exams conducted by Maharashtra HSC Board and success in the NDA Exams.
            </Text>
          </Card.Content>
         

          
            <Card.Title style={styles.Title} title='XII+NDA 1 year course'/>
            <Card.Content>
            <Text style={styles.Info}>
            The students who are interested to join “Apex Careers” for a period of one year to prepare for NDA written and the XII Board exam coaching are welcome to join our Institute.
            </Text>
          </Card.Content>
        
          <View style={styles.Body}></View>
        </ScrollView>
      </View>
    );
  }
}
