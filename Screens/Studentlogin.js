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
  };

  backToHome = () => {
    this.props.navigation.navigate('Home');
  };
  onLoginSuccess = () => {
    this.setState({username: '', password: ''});
  };
  studentProfile = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)

      .then(() => {
        console.log('successfully loged in');

        const myitems = firebase.database().ref('Students/');
        myitems.on('value', datasnap => {
          if (datasnap.val()) {
            this.setState({Students: Object.values(datasnap.val())}, () => {});
          }
        });
        const ex = this.state.Students;
        const username = this.state.username;
        let activeState = 0;
        Object.keys(ex).map(function(key) {
          // console.log(ex[key]);
          if (ex[key].match(username)) {
            activeState = 1;

            console.log('student found');
          }
        });
        if (activeState == 1) {
          console.log('student navigate');
          this.props.navigation.navigate('StudentProfile', {
            username: this.state.username,
          });
        } else if (activeState == 0) {
          console.log('teacher found');
          this.props.navigation.navigate('TeacherProfile', {
            username: this.state.username,
          });
        }
      })
      .then(this.onLoginSuccess)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  handleSubmit() {
    this.setState({username: ''});
  }

  render() {
    return (
      <View style={styles.Container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={this.backToHome} />
          <Appbar.Content title="Login" />
          <Appbar.Action icon="home" onPress={this.backToHome} />
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
                <Button mode="contained" onPress={this.studentProfile}>
                  {' '}
                  Login{' '}
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
