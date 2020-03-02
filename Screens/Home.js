
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';




import { Appbar,Button,Text,TextInput,Card, Avatar, Paragraph } from 'react-native-paper';
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
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>

          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Home" />
          </Appbar.Header>

          <Card.Cover  source={require('../images/AboutApex.jpg')} />
         
           <Text style={styles.Title}>About the Institute</Text>

           <Card.Content>
           <Paragraph>
             <Text style={styles.Info}>
              
           Established in 2003, the Academy trains youth for competitive exams like NDA and NA Exam, CDS Exam conducted by the UPSC
           
             </Text></Paragraph>

             <Paragraph>
             <Text style={styles.Info}>
             The approach of the organization has been totally professional. The Academy has five to six officers on the panel who impart Services Selection Board i.e. SSB Interviews training and around 25 academic staff as visiting faculty to train for various competitive exams. The Institute has six full time staff to cater to various activities of the organization.
             </Text>
             </Paragraph>
            <Paragraph>
              <Text style={styles.Info}>
             In a span of 14 years, the institute has to its credit over 800 students cracking the SSB Interviews. Today, throughout the country, if one has to crack SSB Interview, the first name that comes to the mind of a youth is ‘APEX CAREERS’.
             </Text>
             </Paragraph>
           </Card.Content>


           <View style={styles.button}>
              <Button mode="contained" onPress={this.CoursesOffered}>
                Courses Offered
              </Button>
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
        width: 260,
      
      }}
    
      drawerContentOptions={{
        activeTintColor: '#39ff14',
        inactiveTintColor:'#ffffff',
       
        itemStyle: { marginVertical: 5 },
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
      <View style={{height: 50, margin: 30, }}>
        <Text style={{fontSize: 30, color: '#39ff14',}}>Apex Career Academy</Text>
      
   </View>
      <View style={{marginTop: 25}}>
      <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
    
  );
}
