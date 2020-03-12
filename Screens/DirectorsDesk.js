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
  Avatar,
  Card,
  Button,
  Title,
  Paragraph,
  Appbar,
} from 'react-native-paper';
import styles from '../style/Style';
export default class DirectorsDesk extends React.Component {
  back = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
   
   
    return (
      <View style={styles.Container}>
       
          <Appbar.Header>
          <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Director's Desk" />
          </Appbar.Header>
          <ScrollView style={styles.Scroll}>
            <Card style={styles.cardContainer}>
              <Card.Cover source={require('../images/apex_about.jpg')}/>
            </Card>
            <Card style={styles.cardContainer}>
              <Card.Content>
                <Text style={styles.Title}>About the Director</Text>
                <Text style={styles.Info}>A Metallurgical Engineering Graduate from the Govt. College of Engineering, Pune (COEP) of the 1976-80 batch. With a three and half year stint in private sector, Lt Col (Retd) Pradeep Brahmankar joined the Indian Military Academy - Dehradun in Feb 1984 and got commissioned on 15 Dec 1984 as ‘Lieutenant’ in the Corps of EME. The officer is from the 58th Technical Graduate Course (TGC) which passed out with 65 NDA / 75 REGULAR Course at Indian Military Academy i.e. IMA - Dehradun. Being a technical graduate, the officer got two years ante-date seniority and has the seniority of Dec 1982.</Text>
              </Card.Content>
            </Card>

            <Card style={styles.cardContainer}>
              <Card.Content>
                <Text style={styles.Title}>Why join Apex?</Text>
                <Text style={styles.Info}>We at Apex have a disciplined,  culture that helps aspirants get a feel of the Indian Armed Forces. Our experienced, talented and dynamic trainers impart training of the highest levels which will not only launch you with 200% thrust towards your aim but also make you a better human being and a contributing individual. </Text>
              </Card.Content>
            </Card>
        </ScrollView>
      </View>
    );
  }
}
