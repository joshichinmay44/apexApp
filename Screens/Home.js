import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Appbar,
  Button,
  Text,
  TextInput,
  Card,
  Avatar,
  Paragraph,
  IconButton,
} from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoadingScreen from './LoadingScreen';
import Studentlogin from './Studentlogin';
import Teacherlogin from './Teacherlogin';
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
import Chatbot from '../Screens/Chatbot'

class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  CoursesOffered = () => {
    this.props.navigation.navigate('CoursesOffered');
  };

  render() {
    return (
      <View style={styles.Container}>
       
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Home" />
          </Appbar.Header>
          <ScrollView style={styles.Scroll}>
          <Card.Cover source={require('../images/AboutApex.jpg')} />

          <Text style={styles.Title}>About the Institute</Text>

          <Card.Content>
            <Paragraph>
              <Text style={styles.Info}>
                In a span of 14 years, the institute has to its credit over 800
                students cracking the SSB Interviews. Today, throughout the
                country, if one has to crack SSB Interview, the first name that
                comes to the mind of the youth is ‘APEX CAREERS’.
              </Text>
            </Paragraph>
          </Card.Content>
          <Card.Content>
            <Paragraph>
              <Text style={styles.Info}>
                The approach of the organization has been totally professional.
                The Academy has five to six officers on the panel who impart
                Services Selection Board i.e. SSB Interviews training and around
                25 academic staff as visiting faculty to train for various
                competitive exams. The Institute has six full time staff to
                cater to various activities of the organization.
              </Text>
            </Paragraph>
          </Card.Content>

          <View style={styles.button}>
            <Button mode="contained" onPress={this.CoursesOffered}>
              Courses Offered
            </Button>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Chat with us!')}
            style={{
              alignItems: 'flex-end',
              marginTop: 50,
              marginRight: 20,
              marginBottom: 0,
            }}>
            <Icon name="comment" size={60} color="#084d7b" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const Drawer = createDrawerNavigator();

export default function mydrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={LoadingScreen}
      drawerStyle={{
        backgroundColor: '#084d7b',
        width: '60%',
        height: '100%',
      }}
      drawerContentOptions={{
        activeTintColor: '#ffff00',
        inactiveTintColor: '#ffffff',

        height: '100%',
        itemStyle: {marginVertical: '2%'},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Director's Desk" component={DirectorsDesk} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Entries" component={EntriesScreen} />
     
     
      <Drawer.Screen
        name="Check Eligibility"
        component={EligibilityHomeScreen}
      />
     
      <Drawer.Screen name="Login" component={Studentlogin} />
      <Drawer.Screen name="Success Stories" component={SuccessStories} />
      <Drawer.Screen name="Chat with us!" component={Chatbot} />
      <Drawer.Screen name="Address and Location" component={Contact} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{height: '10%', marginBottom: '5%', marginLeft: '5%'}}>
        <Text
          style={{
            fontSize: 22,
            color: '#ffff00',
            margin: '5%',
            fontFamily: 'Oswald-Italic',
          }}>
          Apex Careers
        </Text>
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}
