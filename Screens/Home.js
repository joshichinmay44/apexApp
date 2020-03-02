import React, { Component } from 'react'
import {StyleSheet,  View,ScrollView,Image, TouchableOpacity,} from 'react-native'
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

import style from './Style'
class About extends Component {

    static navigationOptions = {
        headerShown: false
    }
    CoursesOffered =() =>{
      this.props.navigation.navigate('CoursesOffered')
    }

   try = () => {this.props.navigation.navigate('EligibilityHomeScreen')} 
  render() {
    return (
     
      <View style={style.Container}>
          <ScrollView style={styles.Scroll}>
          
          <Appbar.Header>
            <Appbar.Action 
            icon="menu" 
            onPress={()=> this.props.navigation.openDrawer()} 
            />
            <Appbar.Content title="Home"/>
          </Appbar.Header>
         
         
      <Card.Cover source={require('../images/AboutPhoto.jpg')} />
    
         <View style={styles.Body}>
           
               
                <View style={styles.Content}>
                    <Text style={styles.Title}>About The Institute</Text>
                    <Text style={styles.Info}>General information about the Institute is given here</Text>
                </View>
                
                

               
                <View style={styles.button} >
                  <Button  mode="contained" onPress={this.CoursesOffered}>Courses Offered</Button>
                </View >
                <View style={styles.button} >
                  <Button  mode="contained" onPress={this.try}>try</Button>
                </View >
              
          </View>
          </ScrollView>
      </View>
      
   
    )
  }
}

const styles = StyleSheet.create({
   
    Container:{
      height:'100%',
      backgroundColor:'ghostwhite',
    
    },
   
    Title:{
         textAlign:'center',
         fontFamily:'georgia',
         fontSize:25,
         backgroundColor:'#fdfefe',
     },
     Info:{
        fontFamily:'georgia',
        fontSize:15,
        marginLeft:'2%',
     },
    button:{
      margin:'5%',
      width:'60%',
      marginLeft:'20%',
     marginRight:'20%',
      
    },
   
    drawercontainer:{
      width:20,
      backgroundColor:'#084d7b'
    },

   
})

  
  
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


