import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
//import {createStackNavigator } from 'react-navigation-stack';


import Home from './Home';
import ViewNotification from './ViewNotification';
import LoadingScreen from './LoadingScreen';
import About from './About';

import StudentProfile from './StudentProfile';
import TeacherProfile from './TeacherProfile';
import StudentLogin from './Studentlogin';
import TeacherLogin from './Teacherlogin'
import ViewCourseInfo from './ViewCourseInfo';
import CoursesOffered from './CoursesOffered';
import Cds from './offeredCourses/Cds';
import Nda from './offeredCourses/Nda';
import Afcat from './offeredCourses/Afcat';
import Services from './Services'
import AboutArmy from './AboutArmy'
import AboutNavy from './AboutNavy';
import AboutAirForce from './AboutAirForce';
import EntriesScreen  from './EntriesScreen'
import NDA from './Entries/NDA';
import CDS from './Entries/CDS';
import AFCAT from './Entries/AFCAT';
import INET from './Entries/INET';
import SSC from './Entries/SSC';
import JAG from './Entries/JAG';
import NCC from './Entries/NCC';
import TES from './Entries/TES';
import EligibilityHomeScreen from './EligibilityHomeScreen'
import EligibilityFormArmy from './Eligibility/EligibilityFormArmy'
import EligibilityFormAirForce from './Eligibility/EligibilityFormAirForce'
import EligibilityFormNavy from './Eligibility/EligibilityFormNavy'
import EligibilityResultArmy from './Eligibility/EligibilityResultArmy';


/* import EligibilityResultNavy from './Eligibility/EligibilityResultNavy'; */

const Stack = createStackNavigator();
export default function Root() {
 return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="CoursesOffered" component={CoursesOffered} />
      <Stack.Screen name="Cds" component={Cds} />
      <Stack.Screen name="Nda" component={Nda} />
      <Stack.Screen name="Afcat" component={Afcat} />

      <Stack.Screen name="EntriesScreen" component={EntriesScreen} />
      <Stack.Screen name="NDA" component={NDA} />
      <Stack.Screen name="CDS" component={CDS} />
      <Stack.Screen name="AFCAT" component={AFCAT} />
      <Stack.Screen name="INET" component={INET} />
      <Stack.Screen name="SSC" component={SSC} />
      <Stack.Screen name="JAG" component={JAG} />
      <Stack.Screen name="NCC" component={NCC} />
      <Stack.Screen name="TES" component={TES} />

      <Stack.Screen name="AboutArmy" component={AboutArmy} />
      <Stack.Screen name="AboutNavy" component={AboutNavy} />
      <Stack.Screen name="AboutAirForce" component={AboutAirForce} />
      <Stack.Screen name="ViewCourseInfo" component={ViewCourseInfo} />

      <Stack.Screen name="StudentProfile" component={StudentProfile} />
      <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
      <Stack.Screen name="ViewNotification" component={ViewNotification} />

      <Stack.Screen name="EligibilityHomeScreen" component={EligibilityHomeScreen} />
      <Stack.Screen name="EligibilityFormArmy" component={EligibilityFormArmy} />
      <Stack.Screen name="EligibilityFormAirForce" component={EligibilityFormAirForce} />
      <Stack.Screen name="EligibilityFormNavy" component={EligibilityFormNavy} />
      <Stack.Screen name="EligibilityResultArmy" component={EligibilityResultArmy} />
     
    </Stack.Navigator>
  );
}   

 /* const Screen={
    LoadingScreen:{
        screen: LoadingScreen,
       
    },
    Home:{
        screen: Home,
       
    },
    ViewNotification:{
        screen: ViewNotification,
    },
    About:{
        screen: About,
       
    },
    StudentLogin:{
        screen: StudentLogin,
    },
    TeacherLogin:{
        screen: TeacherLogin,
    },
    StudentProfile:{
        screen: StudentProfile,
    },
    TeacherProfile:{
        screen: TeacherProfile,
    },
    Services:{
        screen: Services,
    },
    ViewNotification:{
        screen: ViewNotification,
       
     },
     ViewCourseInfo:{
        screen: ViewCourseInfo,
       
     },
     CoursesOffered:{
         screen: CoursesOffered,
     },
     Cds:{
         screen: Cds,
     }, 
     Nda:{
        screen: Nda,
    }, 
    Afcat:{
        screen: Afcat,
    },     
    AboutArmy:{
        screen: AboutArmy,
    },
    AboutNavy:
    {
        screen: AboutNavy
    },
    AboutAirForce:{
        screen: AboutAirForce
    },
    EntriesScreen:{
        screen: EntriesScreen
    },
    NDA:
{
    screen: NDA
},
TES:
{
    screen: TES

},
CDS:{
    screen:CDS
},
AFCAT:{
    screen: AFCAT
},
INET:
{
    screen: INET
},
SSC:
{
    screen: SSC
},

JAG:
{
    screen: JAG
},

NCC:
{
    screen: NCC
},
EligibilityHomeScreen:
{
    screen: EligibilityHomeScreen
},
EligibilityFormArmy:{

    screen:EligibilityFormArmy
  
    },
    EligibilityResultArmy:{
        screen: EligibilityResultArmy
    },
    /* EligibilityResultArmyTest:{
        screen: EligibilityResultArmyTest
    }, 
    EligibilityResultNavy:{
        screen: EligibilityResultNavy 
    },*/


/* const HomeStack= createStackNavigator(Screen,{
    initialRouteName: "LoadingScreen"},{ header: { visible: false }}
         
);

export default createAppContainer(HomeStack);   */