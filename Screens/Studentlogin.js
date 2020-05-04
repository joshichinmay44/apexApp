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
  ActivityIndicator,
} from 'react-native';
import styles from '../style/StyleLogin';
import * as firebase from 'firebase';

export default class Studentlogin extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    username: '',
    password: '',
  };

  static navigationOptions = {
    headerShown: false,
  };
  state = {
    username: '',
    password: '',
    email: '',
    status: '',
    Students: [],
    Teachers: [],
    active: 0,
    indicator: false,
  };

  onLoginSuccess = () => {
    this.setState({username: '', password: ''});
    this.load();
  };
  studentProfile = () => {
    this.setState({indicator: true});
    console.log(' hii 1');
    const username = this.state.username;
    console.log('in function');
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(() => {
        console.log('successfully logged in');
        let activeState = 0;
        let userState = 0;
        let userFind = 0;
        userState = 0;
        console.log(' hii 2');
        const myitems = firebase.database().ref('Students/');
        myitems.on('value', datasnap => {
          if (datasnap.val()) {
            this.setState({Students: Object.values(datasnap.val())}, () => {
              console.log('fetching stud');
              const ex = this.state.Students;
              console.log(ex);
              userState = 2;
              console.log(' hii 3');
              Object.keys(ex).map(function(key) {
                if (ex[key].match(username)) {
                  activeState = 1;
                  userState = 1;
                }
              });
              if (activeState == 1) {
                activeState = 0;
                userState = 0;
                userFind = 1;
                console.log(' hii 4');
                this.props.navigation.navigate('StudentProfile', {
                  username: username,
                });
              }
            });
          }
        });
        const myitem = firebase.database().ref('Teachers/');
        myitem.on('value', datasnap => {
          if (datasnap.val()) {
            this.setState({Teachers: Object.values(datasnap.val())}, () => {
              console.log('fetching teacher');
              const exx = this.state.Teachers;
              console.log(exx);
              if (userFind == 0) {
                userState = 2;
              }

              console.log(' hii 5');
              Object.keys(exx).map(function(key) {
                if (exx[key].match(username)) {
                  activeState = 2;
                  userState = 1;
                }
              });
              if (activeState == 2) {
                activeState = 0;
                userState = 0;
                console.log(' hii 6');
                this.props.navigation.navigate('TeacherProfile', {
                  username: username,
                });
              }
            });
          }
        });
        console.log(' hii 7');
        if (userState == 2) {
          userState = 0;
          console.log(' hii 8');
          alert('user not found');
        } else {
          console.log(' hii 9');
          userState = 0;
        }
        console.log(' hii 10');
        console.log('wait');
      })
      .then(this.onLoginSuccess)

      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      })
      .then(this.onLoginSuccess);
  };
  load() {
    this.setState({indicator: false});
  }
  render() {
    return (
      <View style={styles.Container}>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Appbar.Content title="Login" />
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
                value={this.state.text}
                style={styles.mytextinput}
                onChangeText={username => this.setState({username})}
                onFocus={() => this.setState({username: ''})}
                value={this.state.username}
              />

              <TextInput
                label="Password"
                mode="outlined"
                value={this.state.text}
                secureTextEntry={true}
                style={styles.mytextinput}
                onChangeText={password => this.setState({password})}
                onFocus={() => this.setState({password: ''})}
                value={this.state.password}
              />
              <View style={styles.button}>
                {this.state.indicator ? (
                  <ActivityIndicator
                    size="large"
                    color="#084d7b"
                    style={styles.indicator}
                  />
                ) : null}
                {!this.state.indicator ? (
                  <Button mode="contained" onPress={this.studentProfile}>
                    {' '}
                    Login{' '}
                  </Button>
                ) : null}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
