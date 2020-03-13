import React from 'react';
import {Appbar, Button, TextInput} from 'react-native-paper';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from '../style/StyleLogin';
import * as firebase from 'firebase';

import { useFocusEffect } from '@react-navigation/native';



export default class Teacherlogin extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
 
    state = {
      username: '',
      password: '',
      teacherInfo: [],
      teacerList: [],
      mylist: [],
    };
 
  
 
 /*  componentDidMount(){
    
    this.setState({username : ''},
    );
}
 */
 
 

     /*  teacherProfile = () => {
        this.props.navigation.navigate('TeacherProfile')

      } */

  login = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.username, this.state.password)
    .then(() => {
      //console.log('successfully loged in');

      
 
   

      this.props.navigation.navigate('TeacherProfile', {
      username : this.state.username,
     
      });
      
   
  })
    .catch(function(error) {
          
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      });
  };
    

  render() {

    return (
      <View style={styles.Container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={this.backToHome} />
          <Appbar.Content title="Teacher Login" />
          <Appbar.Action icon="home" onPress={this.backToHome} />
        </Appbar.Header>
        <ScrollView style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.imageview}>
              <Image
                style={styles.userimage}
                source={require('../images/user3.png')}
              />
            </View>

            <View style={styles.textinputview}>
              <TextInput
                label="Username "
                mode="outlined"
                
                style={styles.mytextinput}
                onChangeText={username => this.setState({username})}
              />

              <TextInput
                label="Password"
                mode="outlined"
               
                secureTextEntry={true}
                style={styles.mytextinput}
                onChangeText={password => this.setState({password})}
              />
              <View style={styles.button}>
                <Button mode="contained" onPress={this.login}>
                  Login
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
