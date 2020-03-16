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
import {NavigationEvents} from 'react-navigation'
import { useFocusEffect } from '@react-navigation/native';



export default class Teacherlogin extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    username: '',
    password: '',
    teacherInfo: [],
    teacherList: [],
    mylist: [],
    loggedIn:false
  };

componentDidMount(){

}
  backToHome = () => {
    this.props.navigation.navigate('Home');
  };
 

     /*  teacherProfile = () => {
        this.props.navigation.navigate('TeacherProfile')

      } */

  login = () => {

    
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.username, this.state.password)
    .then(() => {
      console.log('successfully logged in');

      
 
      this.state.loggedIn=true

      this.props.navigation.navigate('TeacherProfile', {
      username : this.state.username,
     
      });
     
   
  })


    .catch(function(error) {
          
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      });
    
  };
    

  render(){
   
    if(this.state.loggedIn==false){
   
    return (
     
      
      <View style={styles.Container}>
        <Appbar.Header>
        <Appbar.Action
              icon="menu"
              
              onPress={() => this.props.navigation.openDrawer()}
              
            />
          <Appbar.Content title="Teacher Login" />
         
         
        </Appbar.Header>
        <ScrollView style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.imageview}>
              <Image
                style={styles.userimage}
                source={require('../images/ApexLogo.jpg')}
              />
            </View>

            <View style={styles.textinputview}>
            
              <TextInput
                label="Username"
               
                mode="outlined"
               
                style={styles.mytextinput}
                onChangeText={username => this.setState({username})}
                
              />
 
              <TextInput
                label="Password"
                mode="outlined"
                clearTextOnFocus={true}
                secureTextEntry={true}
                style={styles.mytextinput}
                onChangeText={password => this.setState({password})}
              />
              <View style={styles.button}>
                <Button mode="contained" onPress={()=>this.login()}>
                  Login
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  
      



      }

}}
