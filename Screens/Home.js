
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';




import { Appbar,Button,Text,TextInput,Card, Avatar } from 'react-native-paper';
import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
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
    this.props.navigation.navigate('CoursesOffered');
  };

  render() {
    return (
      <View style={styles.ContainerHome}>
        <ScrollView style={styles.ScrollHome}>

          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Home" />
          </Appbar.Header>

          <Card.Cover source={require('../images/MainScreenLogo.jpg')} />

          <View style={styles.Body}>
            <View style={styles.Content}>
              <Text style={styles.Title}>About The Institute</Text>
              <Text style={styles.Info}>
                this is apex app for apex institute. General information about
                the Institute is given here. information of different courses is
                given.
              </Text>
            </View>

            <View style={styles.button}>
              <Button mode="contained" onPress={this.CoursesOffered}>
                Courses Offered
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
    
      <Drawer.Navigator   initialRouteName={LoadingScreen} 
     
      drawerStyle={{
        backgroundColor: '#084d7b',
        width: '60%',
        height: '100%',
      
      
      }}
    
      drawerContentOptions={{
        activeTintColor: '#ffff00',
        inactiveTintColor:'#ffffff',
      
        height:'100%',
        itemStyle: { marginVertical: '2%',   },
      }}

     drawerContent={props => <CustomDrawerContent {...props} />}
        
      >
       
        <Drawer.Screen name="Home" component={About} />
        <Drawer.Screen name="Services" component={Services} />
        <Drawer.Screen name="Entries" component={EntriesScreen} />
        <Drawer.Screen name="Director's Desk" component={DirectorsDesk} />
        <Drawer.Screen name="Success Stories" component={SuccessStories} />
        <Drawer.Screen name="EligibilityHomeScreen" component={EligibilityHomeScreen} />
        <Drawer.Screen name="Teacher Login" component={TeacherLogin} />
        <Drawer.Screen name="Student Login" component={StudentLogin} />
        <Drawer.Screen name="Contact" component={Contact} /> 

      
        

      </Drawer.Navigator>
  

        
    
   

  );
} 
 
 
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{height: '10%',marginBottom:'5%',  marginLeft:'2%'}}>
        <Text style={{fontSize: 20, color:'#ffff00',margin: '5%', fontFamily:'Iowan Old Style'}}>Apex Career Academy</Text>
       
      </View>
      <View >
      <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
    
  );
}
