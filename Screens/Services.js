import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Appbar, Button, Text, TextInput, Card} from 'react-native-paper';
import styles from '../style/Style';

export default class Services extends Component {
  state={
    service:''
  }
  static navigationOptions = {
    headerShown: false,
  };

  infoArmy = () => {
    this.props.navigation.navigate('AboutTheForces',{
      service:'Indian Army'
    });
  };
  infoNavy = () => {
    this.props.navigation.navigate('AboutTheForces',{
      service:'Indian Navy'
    });
  };

  infoAirForce = () => {
    this.props.navigation.navigate('AboutTheForces',{
      service:'Indian Air Force'
    });
  };

  render() {
    return (
      <View style={styles.Container}>
       
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Services" />
          </Appbar.Header>
          <ScrollView style={styles.Scroll}>
            <TouchableOpacity onPress={this.infoArmy}>
              <View style={{marginTop:50}}></View>
         <Card style={styles.cardContainer}>

          <Card.Cover source={require('../images/IndianArmyLogo.jpg')} />

         </Card>
         
        
         </TouchableOpacity>

         <TouchableOpacity onPress={this.infoNavy}>
              <View style={{marginTop:50}}></View>
         <Card style={styles.cardContainer}>

          <Card.Cover source={require('../images/IndianNavyLogo.png')} />

         </Card>
         
        
         </TouchableOpacity>

         <TouchableOpacity onPress={this.infoAirForce}>
              <View style={{marginTop:50}}></View>
         <Card style={styles.cardContainer}>

          <Card.Cover source={require('../images/IndianAirForce.jpg')} />

         </Card>
         
        
         </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
