import React, { Component } from 'react'
import {StyleSheet,  View,ScrollView,Image, TouchableOpacity,} from 'react-native'
import { Appbar,Button,Text,TextInput,Card, Avatar } from 'react-native-paper';
import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

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
import style from './Style'
import Home from './Home'


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
       
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Services" component={Services} />
        <Drawer.Screen name="Entries" component={EntriesScreen} />
        <Drawer.Screen name="Director's Desk" component={DirectorsDesk} />
        <Drawer.Screen name="Success Stories" component={SuccessStories} />
        <Drawer.Screen name="EligibilityHomeScreen" component={EligibilityHomeScreen} />
        <Drawer.Screen name="Teacher Login" component={Teacherlogin} />
        <Drawer.Screen name="Student Login" component={Studentlogin} />
        <Drawer.Screen name="Contact" component={Contact} /> 
        <Drawer.Screen name="Stack" component={Navigator} /> 
        
        
      </Drawer.Navigator>
  
  );
} 
 
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{height: 50, margin: 30, }}>
        <Text style={{fontSize: 30, color:'yellow'}}>Apex Careers</Text>
       {/* <Avatar.Icon size={50} icon="menu"/> */}
        {/* <Image source={require('../images/logo.jpg')} style={{height: 170, width: 260}}/> */}
      </View>
      <View style={{marginTop: 25}}>
      <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
    
  );
} 