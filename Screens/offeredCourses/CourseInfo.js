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
export default class Afcat extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  back = () => {
    this.props.navigation.navigate('CoursesOffered');
  };
  backToHome = () => {
    this.props.navigation.navigate('Home');
  };


renderInfo=(course)=>{
  if(course=='CDS')
  {
    return(
      <View style={styles.Body}>
          

      </View>


    )


  }
}

  render() {
let course= this.props.route.params.course

    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header style={styles.Header}>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="AFCAT" />
            <Appbar.Action icon="home" onPress={this.backToHome} />
          </Appbar.Header>

        

          {this.renderInfo(course)}

         
        </ScrollView>
      </View>
    );
  }
}



