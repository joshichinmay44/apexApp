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

export default class Studentlogin extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    username: '',
    password: '',
  };


 
 
    static navigationOptions = {
        headerShown: false
    }
    state = {
        username: '',
        password: ''
      };

      backToHome = () => {
        this.props.navigation.navigate('Home')

      }
      studentProfile = () => {
        this.props.navigation.navigate('StudentProfile')

      }

  render() {
    return (
      <View style={styles.Container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={this.backToHome} />
          <Appbar.Content title="Student Login" />
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
