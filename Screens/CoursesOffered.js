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
import {TouchableHighlight} from 'react-native-gesture-handler';
import styles from '../style/Style';
export default class CoursesOffered extends Component {
  state={
    course:''
  }
  static navigationOptions = {
    headerShown: false,
  };
  back = () => {
    this.props.navigation.navigate('Home');
  };
  Cds = () => {
    this.props.navigation.navigate('CourseInfo',{
      course:'CDS'
    });
  }

  Nda = () => {
    this.props.navigation.navigate('CourseInfo',{
      course:'NDA'
    });
  }
  Afcat = () => {
    this.props.navigation.navigate('CourseInfo',{
      course:'AFCAT'
    });
  }
  Spi=()=>{
    this.props.navigation.navigate('CourseInfo',{
      course:'SPI'
    });
  }
Ssb=()=>{
  this.props.navigation.navigate('CourseInfo',{
    course:'SSB'
})
}

  
  render() {
    return (
      <View style={styles.Container}>
        
          <Appbar.Header style={styles.Header}>
          <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Courses Offered" />
          </Appbar.Header>

          <ScrollView style={styles.Scroll}>

          <View style={styles.Body}>
            <Card style={styles.cardContainer}>
              <TouchableOpacity onPress={this.Cds}>
                <Card.Cover
                  source={require('../images/cds.jpg')}
                 
                />
                <Card.Title
                  subtitle="Press for more details!"
                  right={() => (
                    <Avatar.Icon size={30} icon="arrow-right-bold" />
                  )}
                />
              </TouchableOpacity>
            </Card>

            <Card style={styles.cardContainer}>
              <TouchableOpacity onPress={this.Nda}>
                <Card.Cover
                  source={require('../images/NDA.jpg')}
                  /*  style={
                    ({width: '100%'},
                    {borderTopRightRadius: 30, borderTopLeftRadius: 30})
                  } */
                />
                <Card.Title
                  subtitle="Press for more details!"
                  right={() => (
                    <Avatar.Icon size={30} icon="arrow-right-bold" />
                  )}
                />
              </TouchableOpacity>
            </Card>

            <Card style={styles.cardContainer}>
              <TouchableOpacity onPress={this.Afcat}>
                <Card.Cover
                  source={require('../images/AFCAT.jpg')}
                  /*  style={
                    ({width: '100%'},
                    {borderTopRightRadius: 30, borderTopLeftRadius: 30})
                  } */
                />
                <Card.Title
                  subtitle="Press for more details!"
                  right={() => (
                    <Avatar.Icon size={30} icon="arrow-right-bold" />
                  )}
                />
              </TouchableOpacity>
            </Card>

            <Card style={styles.cardContainer}>
              <TouchableOpacity onPress={this.Cds}>
                <Card.Cover
                  source={require('../images/INET.jpg')}
                  /*  style={
                    ({width: '100%'},
                    {borderTopRightRadius: 30, borderTopLeftRadius: 30})
                  } */
                />
                <Card.Title
                  subtitle="Press for more details!"
                  right={() => (
                    <Avatar.Icon size={30} icon="arrow-right-bold" />
                  )}
                />
              </TouchableOpacity>
            </Card>
            <Card style={styles.cardContainer}>
              <TouchableOpacity onPress={this.Cds}>
                <Card.Cover
                  source={require('../images/spi.jpg')}
                  /*  style={
                    ({width: '100%'},
                    {borderTopRightRadius: 30, borderTopLeftRadius: 30})
                  } */
                />
                <Card.Title
                  subtitle="Press for more details!"
                  right={() => (
                    <Avatar.Icon size={30} icon="arrow-right-bold" />
                  )}
                />
              </TouchableOpacity>
            </Card>
            <Card style={styles.cardContainer}>
              <TouchableOpacity onPress={this.Ssb}>
                <Card.Cover
                  source={require('../images/SSB.jpg')}
                 
                />
                <Card.Title
                  subtitle="Press for more details!"
                  right={() => (
                    <Avatar.Icon size={30} icon="arrow-right-bold" />
                  )}
                />
              </TouchableOpacity>
            </Card>


          </View>
        </ScrollView>
      </View>
    );
  }
}
