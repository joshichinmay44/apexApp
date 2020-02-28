import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Appbar, Button, Text, TextInput, Card} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LoadingScreen from './LoadingScreen';
import StudentLogin from './Studentlogin';
import TeacherLogin from './Teacherlogin';
import Contact from './Contact';
import Services from './Services';
import EntriesScreen from './EntriesScreen';
import EligibilityHomeScreen from './EligibilityHomeScreen';
import StudentProfile from './StudentProfile';
import CoursesOffered from './CoursesOffered';
import Navigator from './Stack';
import DirectorsDesk from './DirectorsDesk';
import SuccessStories from './SuccessStories';
import styles from '../style/Style';

class About extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  CoursesOffered = () => {
    this.props.navigation.navigate('Stack', {screen: 'CoursesOffered'});
  };

  try = () => {
    this.props.navigation.navigate('Stack', {screen: 'EligibilityHomeScreen'});
  };
  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Home" />
          </Appbar.Header>

          <Card.Cover source={require('../images/AboutPhoto.jpg')} />

          <View style={styles.Body}>
            <View style={styles.Content}>
              <Text style={styles.Title}>About The Institute</Text>
              <Text style={styles.Info}>
                General information about the Institute is given here
              </Text>
            </View>

            <View style={styles.button}>
              <Button mode="contained" onPress={this.CoursesOffered}>
                Courses Offered
              </Button>
            </View>
            <View style={styles.button}>
              <Button mode="contained" onPress={this.try}>
                try
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const Drawer = createDrawerNavigator();

export default function mydrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={LoadingScreen}
        drawerStyle={{
          backgroundColor: '#084d7b',
          width: 240,
        }}
        drawerContentOptions={{
          activeTintColor: '#ffff00',
          inactiveTintColor: '#ffffff',
          itemStyle: {marginVertical: 3},
        }}>
        <Drawer.Screen name="Home" component={About} />
        <Drawer.Screen name="Services" component={Services} />

        <Drawer.Screen name="Entries" component={EntriesScreen} />
        <Drawer.Screen name="Director's Desk" component={DirectorsDesk} />
        <Drawer.Screen name="Success Stories" component={SuccessStories} />
        <Drawer.Screen
          name="Check Eligibility"
          component={EligibilityHomeScreen}
        />
        <Drawer.Screen name="Teacher Login" component={TeacherLogin} />
        <Drawer.Screen name="Student Login" component={StudentLogin} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Stack" component={Navigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
