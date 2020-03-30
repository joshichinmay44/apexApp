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
        course: this.props.route.params.course,
        notificationList: [],
        notificationKeys: [],
        data : ''
    }
    componentDidMount() {
      let course= this.state.course
      this.state.data = firebase.database().ref("Courses/"+course+"/Notifications/")
      this.state.data.on('value', datasnap => {
        this.setState({notificationList: Object.values(datasnap.val())}, function() {
          
          console.log("notifications: "+this.state.notificationList);
         
        });

        this.setState({notificationKeys: Object.keys(datasnap.val())}, function() {
          
          console.log("Keys: "+this.state.notificationKeys);
         
        });
      })
      } 
    
    back = () => {
        this.props.navigation.goBack();
      };
     
    addNotification = () => {
        //let course= this.state.course
        //const data = firebase.database().ref("Courses/"+course+"/Notifications/")
        
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let sub =  this.state.subject;
        let des = this.state.description;
        let username = this.state.username;
        //console.log("username: "+username)
        if(sub == "" || des == "")
        {
          alert("Your notification is empty")
        
        }
        else{
        this.state.data.push().set(
          {
            Username : username,
            Date : date+'/'+month+'/'+year,
            Subject : sub,
            Description : des,
          } )
       }
    }
  
    renderNotificationList=()=>{
      let length=this.state.notificationList.length
     
      let renderer=[]
      for(let i=0;i<length;i++){
     
       //console.log(i)
       renderer[i]=(
         
         
        <Card id={i} style={{margin:20,  backgroundColor: '#E9E9E9'}}>
             <Card.Title title={this.state.notificationList[i].Subject}
              right={(props) =>
              <TouchableOpacity  onPress={() => this.deleteNotification(i)}>
                <Avatar.Icon {...props} style={{marginRight:'5%'}} icon="delete" />
              </TouchableOpacity>}
             />
             
             <Text style={{fontSize:17, margin:'5%', }}>{this.state.notificationList[i].Description}</Text>
        </Card>
           )
         }
         
       return(renderer)
    }

    deleteNotification=(i)=>{
      //let course= this.state.course
      //let data = firebase.database().ref("Courses/"+course+"/Notifications/")
      this.state.data.child(this.state.notificationKeys[i]).remove();
    }
    render() {
        let courseTitle= this.state.course
        return (
            <View style={styles.Container}>
           
              <Appbar.Header>
                <Appbar.BackAction  onPress={this.back} />
                <Appbar.Content title="Write notices" />
    
               
              </Appbar.Header>
            <ScrollView style={styles.Scroll}>
            <View style={styles.Body}>
              <View>
              <Card.Title title={courseTitle}/> 
              <TextInput
                label="Subject of notice"
                mode="outlined"
                style={styles.mytextinput}
                onChangeText={subject => this.setState({subject})}
                onFocus={()=>this.setState({
                  subject:'',
                
                  
                })}

                value={this.state.subject}
              />
   
              <TextInput
                label="Description for notice"
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
                {this.renderNotificationList()}
            </View>
            </ScrollView>
                    
              
            </View>
        ) 
    }
}
