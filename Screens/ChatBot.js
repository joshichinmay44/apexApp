import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Appbar, TextInput } from 'react-native-paper'
import styles from '../style/Style'
import Icon from 'react-native-vector-icons/FontAwesome';

import ChatBot from 'react-native-chatbot'



const steps=[
    {
        id:'1',
        message:'Hello aspirant',
        trigger:'2',
       
    },
    {
        id:'2',
        message:'How is life?',
        trigger:'3'
    },
    {
        id:'3',
        user:true,
       trigger:'4'
    },
    {
        id:'4',
        message:'Choose your field of interest!',
        trigger:'5'
    },
    {
        id:'5',
        options:[
            {
                value:'Services',
                label:'Services',
                trigger:'6'
            },
            {
                value:'Entries',
                label:'Entries',
                trigger:'7'
            }
        ]
    },
    {
        id:'6',
        message:'Choose your arm!',
        trigger:'8'
    },
    {
        id:'7',
        message:'Entries',
        trigger:'12'
    },
    {
        id:'8',
        options:[
        {
            value:'Army',
            label:'Army',
            trigger:'9'
        },
        {
            value:'Navy',
            label:'Navy',
            trigger:'10'
        },
        {
            value:'Air Force',
            label:'Air Force',
            trigger:'11'
        }
        ]
        
    },
    {
        id:'9',
        message:'Army',
        trigger:({steps,value})=>{
            alert(JSON.stringify(steps))
        }
    },
    {
        id:'10',
        message:'Navy',
        trigger:'6'
    },
    {
        id:'11',
        message:'Air Force',
        trigger:'6'
    },
    {
        id:'12',
        message:'Entries',
        end: true
    },
]

export default class Chatbot extends Component {
    state={
        message:[]
    }

renderChat=()=>{
<View style={styles.Body}>

</View>
}
    render() {
        return (
            <View style={{flex:1}}>
<Appbar.Header>
                <Appbar.Action
                  icon="menu"
                  onPress={() => this.props.navigation.openDrawer()}
                />
                <Appbar.Content title="Apex Chat" />
              </Appbar.Header>

              
<View style={{marginBottom:80}}>
<ChatBot steps={steps}/>
</View>






                        {/*  
              

             
             </ScrollView>
             <View style={{ flexDirection: 'row',
  borderBottomWidth: 1,
  borderColor: '#000',
  paddingBottom: 10,}} >
             <TextInput
    style={{flex:1}}
    autoCorrect={true}
      placeholder="Enter your message"
      onChangeText={message=>this.setState({
          message:message
      })}
     
    />
    <TouchableOpacity onPress={this.renderChat()}>
  <Icon
    name='share'
    color='#084d7b'
    size={30}
    
  />
  </TouchableOpacity>
 
 </View> */}

</View>
        )
    }
}
