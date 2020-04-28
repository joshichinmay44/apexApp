import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Linking} from 'react-native'
import {Appbar, Card, Avatar, Button} from 'react-native-paper'
import * as firebase from 'firebase';
import styles from '../style/Style'
export default class UpcomingCourses extends Component {

    state={
        Courses:[]
    };

    componentDidMount() {
        const myitems = firebase.database().ref('Upcoming Courses');
        myitems.on('value', datasnap => {
          if (datasnap.val()) {
            this.setState({Courses: Object.values(datasnap.val())}, () => {
              console.log('');
            });
        }
        });


      }


      
      renderUpcomingCourses() {
       console.log(this.state.Courses);
        const data = this.state.Courses;
        const renderer = [];
        let i = 0;
        Object.keys(data).map((obj, i) => {
          renderer[i] = (
           
            <Card style={{margin: 20, backgroundColor: '#E9E9E9'}}>
              
                  <Avatar.Icon size={30} icon="book-open" />
               <Card.Content>
            <Text style={styles.Title}> {data[obj].Name} </Text>
            <Text style={styles.Info}>Course Duration:<Text style={{fontWeight:'bold'}}> {data[obj].Start} to {data[obj].End}</Text></Text>
            <Text style={styles.Info}> Fees:<Text style={{fontWeight:'bold'}}>{data[obj].Fees}</Text> </Text>
     <Card.Title subtitle='Call us to know more!'/>
     <Button icon='phone' mode='contained' onPress={()=>Linking.openURL('tel:020 2553 3977')}></Button>

     </Card.Content>

            </Card>
          );
          i++;
        });
        return renderer;
      }
/* renderUpcomingCourses() {
    console.log(this.state.mylist);
    const data = this.state.mylist;
    const renderer = [];
    let i = 0;
    Object.keys(data).map((obj, i) => {
      renderer[i] = (
      
        <Card style={{margin: 20, backgroundColor: '#E9E9E9'}}>
          
              <Avatar.Icon size={30} icon="book-open" />
            <Card.Title
              style={{marginHorizontal: '20%'}}
              title={data[obj].Name}
            />

            <Text style={{fontSize: 15, margin: '2%'}}>{data[obj].Start}</Text>

            <Text style={{fontSize: 15, margin: '2%'}}>
              {data[obj].End}
            </Text>
            <Text style={{fontSize: 15, margin: '2%'}}>
{data[obj].Fees}            </Text>
        
        </Card>
        
      );
      i++;
    });
    return renderer;
  } */

  
    render() {
        return (
            <View style={styles.Container}>
            <Appbar.Header>
              <Appbar.BackAction
                onPress={() => this.props.navigation.navigate('Home')}
              />
              <Appbar.Content title="Upcoming Courses" />
            </Appbar.Header>
            <ScrollView style={styles.Scroll}>

            <View style={styles.Body}>
                {this.renderUpcomingCourses()}
                </View>
        </ScrollView>
        </View>
        )
    }
}
