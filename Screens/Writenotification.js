import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import {
    Appbar,
    Button,
    Card,
    Avatar,
    Title,
    Paragraph,
    TextInput,
  } from 'react-native-paper';
import * as firebase from 'firebase';

export default class Writenotification extends Component {
    state={
        mylist : [],
        subject : '',
        description : [],
        username : this.props.route.params.username,
    }
    /* componentDidMount() {
        const myitems = firebase.database().ref('Courses/CDS July 2018/');
        myitems.on('value', datasnap => {
          this.setState({mylist: Object.values(datasnap.val())}, function() {
            console.log(this.state.mylist);
           
          });
        });
      } */
    
    back = () => {
        this.props.navigation.goBack();
      };
     
    addNotification = () => {
        const data = firebase.database().ref("Courses/CDS July 2018/Notifications")
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let sub =  this.state.subject;
        let des = this.state.description;
        let username = this.state.username;
        data.push().set(
        {
          username : username,
          Date : date+'/'+month+'/'+year,
          Subject : sub,
          Description : des,
        } )
        /* data.child("notifications").child(username).setValue("notice1"); */
    

    }; 
    render() {
        
        return (
            <View style={styles.Container}>
            <ScrollView style={styles.Scroll}>
              <Appbar.Header>
                <Appbar.BackAction  onPress={this.back} />
                <Appbar.Content title="Write notices" />
    
               
              </Appbar.Header>

            <View style={styles.Body}>
              <TextInput
                label="Subject"
                mode="outlined"
                style={styles.mytextinput}
                onChangeText={subject => this.setState({subject})}
                onFocus={()=>this.setState({
                  subject:'',
                
                  
                })}

                value={this.state.subject}
              />
   
              <TextInput
                label="Description"
                mode="outlined"
                style={styles.mytextinput}
                onChangeText={description => this.setState({description})}
                onFocus={()=>this.setState({
                  description:'',
                
                  
                })}

                value={this.state.description}
              />

                <View style={styles.button}>
                    <Button mode="contained" onPress={this.addNotification}>
                    Send
                    </Button>
                </View>

            </View>
            </ScrollView>
                    
              
            </View>
        ) 
    }
}
