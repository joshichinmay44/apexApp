import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
//import {createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import ViewNotification from './ViewNotification';
import LoadingScreen from './LoadingScreen';

import StudentProfile from './StudentProfile';
import TeacherProfile from './TeacherProfile';
import StudentLogin from './Studentlogin';
import StudentMarks from './StudentMarks';
import ViewBlogs from './ViewBlogs';
import Teacherlogin from './Teacherlogin';
import Teachermycourses1 from './Teachermycourses1';
import Teacherstudentprogress from './Teacherstudentprogress';
import ViewCourseInfo from './ViewCourseInfo';
import CoursesOffered from './CoursesOffered';
import CourseInfo from './offeredCourses/CourseInfo';
import Services from './Services';

import Writenotification from './Writenotification';
import NDA from './Entries/NDA';
import CDS from './Entries/CDS';
import AFCAT from './Entries/AFCAT';
import INET from './Entries/INET';
import SSC from './Entries/SSC';
import JAG from './Entries/JAG';
import NCC from './Entries/NCC';
import TES from './Entries/TES';
import EligibilityHomeScreen from './EligibilityHomeScreen';
import EligibilityFormArmy from './Eligibility/EligibilityFormArmy';
import EligibilityFormAirForce from './Eligibility/EligibilityFormAirForce';
import EligibilityFormNavy from './Eligibility/EligibilityFormNavy';
import EligibilityResultArmy from './Eligibility/EligibilityResultArmy';
import AboutTheForces from './InfoAboutForces/AboutTheForces';
import TeacherCourseDetails from './TeacherCourseDetails';
import ServiceDescriptiveInfo from './InfoAboutForces/ServiceDescriptiveInfo';
import ProgressReport from './ProgressReport';
//import Chatbot from './ChatBot';
//import TeacherCourseInfo from './TeacherCourseInfo';
/* import EligibilityResultNavy from './Eligibility/EligibilityResultNavy'; */
import WriteBlog from './WriteBlog';
import TeacherStudentMarks from './TeacherStudentsMarks';
import InfoEntries from './InfoEntries';
import BlogContent from './BlogContent';
import AboutApex from './AboutApex';
import UpcomingCourses from './UpcomingCourses';
import SuccesStoriesDescription from './SuccesStoriesDescription';


const Stack = createStackNavigator();
export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="CoursesOffered" component={CoursesOffered} />
        <Stack.Screen name="CourseInfo" component={CourseInfo} />

        <Stack.Screen name="NDA" component={NDA} />
        <Stack.Screen name="CDS" component={CDS} />
        <Stack.Screen name="AFCAT" component={AFCAT} />
        <Stack.Screen name="INET" component={INET} />
        <Stack.Screen name="SSC" component={SSC} />
        <Stack.Screen name="JAG" component={JAG} />
        <Stack.Screen name="NCC" component={NCC} />
        <Stack.Screen name="TES" component={TES} />
        <Stack.Screen
          name="ServiceDescriptiveInfo"
          component={ServiceDescriptiveInfo}
        />
        <Stack.Screen
          name="TeacherCourseDetails"
          component={TeacherCourseDetails}
        />
        <Stack.Screen name="ViewCourseInfo" component={ViewCourseInfo} />
        <Stack.Screen name="StudentMarks" component={StudentMarks} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />

        <Stack.Screen name="ProgressReport" component={ProgressReport} />
        <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
        <Stack.Screen name="ViewNotification" component={ViewNotification} />
        <Stack.Screen name="ViewBlogs" component={ViewBlogs} />
        <Stack.Screen name="Teachermycourses1" component={Teachermycourses1} />
        <Stack.Screen name="Writenotification" component={Writenotification} />
        <Stack.Screen name="WriteBlog" component={WriteBlog} />
        <Stack.Screen
          name="TeacherStudentMarks"
          component={TeacherStudentMarks}
        />

        <Stack.Screen name="AboutTheForces" component={AboutTheForces} />

        <Stack.Screen
          name="EligibilityFormArmy"
          component={EligibilityFormArmy}
        />
        <Stack.Screen
          name="EligibilityFormAirForce"
          component={EligibilityFormAirForce}
        />
        <Stack.Screen
          name="EligibilityFormNavy"
          component={EligibilityFormNavy}
        />
        <Stack.Screen
        name='InfoEntries'
        component={InfoEntries}
        />
        <Stack.Screen
          name="EligibilityResultArmy"
          component={EligibilityResultArmy}
        />
        <Stack.Screen
          name="ELigibilityHomeScreen"
          component={EligibilityHomeScreen}
        />
        {/* <Stack.Screen name="ChatBot" component={ChatBot}/> */}
        <Stack.Screen name="Teacherlogin" component={Teacherlogin} />
        <Stack.Screen
          name="Teacherstudentprogress"
          component={Teacherstudentprogress}
        />
        <Stack.Screen name='Upcoming' component={UpcomingCourses}/>
        <Stack.Screen name='BlogContent' component={BlogContent}/>
        <Stack.Screen name='AboutApex' component={AboutApex}/>
        <Stack.Screen name='Success' component={SuccesStoriesDescription}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
