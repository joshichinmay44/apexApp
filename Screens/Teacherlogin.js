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
  };


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
      //console.log('successfully loged in');

      const myitems = firebase.database().ref("Courses/")
      myitems.on("value", datasnap=>{
        this.setState({mylist : Object.values(datasnap.val())}
        /* ,function(){console.log(this.state.mylist)} */
        )
      })

      var temp = [];
      const username = this.state.username;
      this.state.mylist.map((item, index) => {
       
        Object.keys(item).map(function(key) {
        
          if (key.match('Teacher')) {
          var teacher = item[key];
         
          Object.keys(teacher).map(function(key) {
            
            var info = teacher[key];
           
              if (info.Email.match(username))
              { 
                //temp.push(info) 
                temp=info
                //console.log("tmp :" + temp.Name)            
              }  
       
          });
        }
      });
    }); 
   
    this.setState({teacherInfo: temp},
      function(){
        console.log("this is teacher info: "+this.state.teacherInfo); 
      
    });

      this.props.navigation.navigate('TeacherProfile', {
      username : this.state.username,
      teacherInfo : this.state.teacherInfo,  
      });
          
  })
    .catch(function(error) {
          
      var errorCode = error.code;
      var errorMessage = error.message;
     alert(errorMessage);
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
                value={this.state.text}
                style={styles.mytextinput}
                onChangeText={username => this.setState({username})}
              />

              <TextInput
                label="Password"
                mode="outlined"
                value={this.state.text}
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
