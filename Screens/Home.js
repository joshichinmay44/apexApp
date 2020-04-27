import React, {Component} from 'react';
import Carousel from 'react-native-carousel-view';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  ImageStore,
  AppRegistry,
  Linking
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
import Chatbot from '../Screens/ChatBot'
import Faculty from '../Screens/Faculty'
import { SliderBox } from "react-native-image-slider-box";


class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  CoursesOffered = () => {
    this.props.navigation.navigate('CoursesOffered');
  };

  renderItem = ({item, index}) => {

    const {backgroundColor} = item;
    return (
        <TouchableOpacity style={[styles.item, {backgroundColor}]}
                          onPress={() => {
                              this._carousel.scrollToIndex(index);
                          }}>
             .......
        </TouchableOpacity>)
};

  render() {

    const images=[
      require('../images/apex_about.jpg'),
      require('../images/HomePhoto4.jpg'),

      require('../images/Faculty1.jpg'),
      require('../images/HomePhoto2.jpg'),

      require('../images/HomePhoto1.jpg'),
      require('../images/HomePhoto5.jpg'),
      require('../images/HomePhoto6.jpg'),

    ]
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
       
           {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('AboutApex')}>
      <Card style={styles.cardContainer}>
        <Card.Title title='About Apex Careers'  right={() => <Avatar.Icon size={30} icon="arrow-right" />}
/>
          <Card.Cover source={require('../images/AboutApex.jpg')} />
          </Card>
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop:'10%'}} onPress={()=>this.props.navigation.navigate('Chat with us!')}>
      <Card style={styles.cardContainer}>
        <Card.Title title='Chat with us!'                 right={() => <Avatar.Icon size={30} icon="arrow-right" />}
/>
          <Card.Cover source={require('../images/ChatWithUs.jpg')} />
          </Card>
          </TouchableOpacity> */}
    {/* <Text style={styles.Title}>About the Institute</Text>

          <Card.Content>
            <Paragraph>
              <Text style={styles.Info}>
              APEX CAREERS, a Pune based organization is in the field of training. The Academy trains youth for competitive exams like NDA & NA Exam, CDS Exam conducted by the UPSC. The institute also caters to preparing young boys and girls for the AFCAT. The Institute’s forte has been SSB Interview Preparation Coaching. Apex Careers, Pune has a unique identity of being the best institute in the country in terms of success of its students. The Academy also prepares students for the entrance exam for admission to Services Preparatory Institute (SPI) Aurangabad. Apex Careers has also designed a two years coaching program for National Defence Academy aspirants. The youth after completion of their X Board Exams can undergo a Personality Development Capsule Course and then undergo coaching for XI Science, XII Science Board Exams (PCM Group), NDA & NA written Exam and SSB Interview preparation. The Academy also conducts crash courses for NDA & NA Exam, CDS Exam and AFCAT. The Academy also caters to Group Discussions and Personal Interview i.e. GD – PI classes.
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
          <Card.Content>
            <Paragraph>
              <Text style={styles.Info}>
              Raised on 03 January 2006 by Lt Col (Retd) Pradeep Brahmankar, Apex Careers formally got registered and commenced the training activities on 05 May 2005. The training activities are presently carried out at Mahatma Phule Museum Campus on Ghole Road, Shivajinagar in Pune.

Apex Careers has trained five batches of SPI Aurangabad for the SSB Interviews. The organization also had privilege of training one batch of Sainik School – Satara. The institute has also trained two batches of PCTC – Nashik for SSB Interviews. In a span of nine years, the institute has to its credit over 300 students cracking the SSB Interviews. Today, throughout the country, if one has to crack SSB Interview, the first name that comes to the mind of a youth is ‘APEX CAREERS’.
              </Text>
            </Paragraph>
          </Card.Content>

         

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Chat with us!')}
            style={{
              alignItems: 'flex-end',
              marginTop: 50,
              marginRight: 20,
              marginBottom: 0,
            }}>
            <Icon name="comment" size={60} color="#084d7b" />
          </TouchableOpacity> */} 
          <View style={{marginTop:2}}>
         <SliderBox
  images={images}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
  sliderBoxHeight={250}

/>
</View>
     
<View style={{marginTop:20,}}>
         <Text  style={styles.Title}>Welcome to Apex Careers!</Text>
        </View>

        <View style={{marginTop:50}} >
          <Button mode='text' icon='information' onPress={()=>{this.props.navigation.navigate('AboutApex') 
        console.log('Pressed')}}>About us</Button>
        </View>
        <View style={{marginTop:50,}} >
          <Button mode='text' icon='message' onPress={()=>{this.props.navigation.navigate('Chat with us!') 
        console.log('Pressed')}} > Chat with us</Button>
        </View>

        <View style={{marginTop:50,}} >
          <Button mode='text' icon='account-check' onPress={()=>{this.props.navigation.navigate('Check Eligibility') 
        console.log('Pressed')}} > Check Eligibility</Button>
        </View>

        <View style={{marginTop:50,}} >
          <Button mode='outlined' icon='google-maps' onPress={()=>Linking.openURL('https://www.google.com/maps/place/Apex+Careers/@18.5236807,73.8425244,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2c07ed91fbc25:0xd027d943c2525a1d!8m2!3d18.5236756!4d73.8447131')}> Locate Us</Button>
        </View>


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

        height: '150%',
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
      <Drawer.Screen name='Courses Offered' component={CoursesOffered}/>
      <Drawer.Screen name="Our Faculty" component={Faculty} />
      <Drawer.Screen name="Success Stories" component={SuccessStories} />
      <Drawer.Screen name="Login" component={Studentlogin} />
      
      <Drawer.Screen name="Chat with us!" component={Chatbot} />
      <Drawer.Screen name="Contact Information" component={Contact} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{height: '10%', marginBottom: '6%', marginLeft: '5%'}}>
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
