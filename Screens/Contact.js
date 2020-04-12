import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Appbar, Card, Button} from 'react-native-paper';
import styles from '../style/Style';
export default class Contacts extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <View style={styles.Container}>
       
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />

            <Appbar.Content
              title="Contact"
              // subtitle="view"
            />
          </Appbar.Header>
          <ScrollView>
          <View style={styles.Body}>
            <Card style={styles.cardContainer}>
              <Card.Title title='Address and Location'/>
            <TouchableOpacity onPress={()=>Linking.openURL('https://www.google.com/maps/place/Apex+Careers/@18.5236807,73.8425244,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2c07ed91fbc25:0xd027d943c2525a1d!8m2!3d18.5236756!4d73.8447131')}>
              <Card.Cover source={require('../images/map.jpg')}/>
            </TouchableOpacity>
            <Card.Content>
              <Text style={styles.Info}>
              Apex Careers,{'\n'}
Mahatma Phule Museum Campus, Ghole Road,{'\n'}
Shivajinagar, Near Bal Gandharva Rang Mandir,{'\n'}
Pune – 411004.
              </Text>
            </Card.Content>
            </Card>
            <Card style={styles.cardContainer}>
              <Card.Title title='Call us!' subtitle='Press the dialer to call'/>
            
              <Button icon='phone' mode='contained' onPress={()=>Linking.openURL('tel:020 2553 3977')}></Button>
              
            </Card>
            <Card>

            <Card.Title subtitle='Mail us at:apexcareers2005@gmail.com' />
            
           
              
            </Card>

          </View>
        </ScrollView>
      </View>
    );
  }
}
