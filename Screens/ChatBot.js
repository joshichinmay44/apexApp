import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity,Image } from 'react-native'
import { Appbar, TextInput, Card } from 'react-native-paper'
import styles from '../style/Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeProvider} from 'styled-components'
import ChatBot from 'react-native-chatbot'
import { mdiEmailSearch } from '@mdi/js';

import Courses from '../Screens/CoursesOffered'


const theme={
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
    
}


export default class Chatbot extends Component {
    state={
       name:'',
       age:0
    }

   

    render() {
        const steps=[
            {
                id:'1',
                message:'Hello aspirant',
                trigger:'2'
            },
            {
                id:'2',
                message:'What is your age?',
                trigger:'3'
            },
            {
                id:'3',
                user:true,
                inputAttributes: {
                    keyboardType: 'numeric'
                  },
                trigger:'4'
            },
            {
                id:'4',
                message:({previousValue,steps})=> {
                
                        this.setState({
                            age:previousValue
                        })
                     if(previousValue>=27)
                     return 'Oh gosh! You fall outside the stipulated age limit.\n'+'But do not lose heart. There are many other ways of serving and contributing buddy!!!\n Jay Hind'                   
                    else
                    return `That's great!!! How can we help you?`
                    },
            trigger:({steps, value})=>{
                if(this.state.age>=27)
                return '5'
                else
                return '6'
            }
        },
            {
                id:'5',
              //  message:'All the best to you! Jay Hind!',
                component:(
                    <View style={styles.cardContainer}>
                        <Card.Cover source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZOKF9axkXGQBU_wBCYxkCfp_X7hvnYLIL9ht1t9pdox2dNpBG'}}/>

                    </View>
                ),
                end:true
            },
            {
                id:'6',
               options:[
                   {value:'Entries',label:'Entries',trigger:'7'},
                {value:'Services', label:'Services', trigger:'8'},
                {value:'NOTA', label:'Courses Offered at Apex', trigger:'9'},
                {value:'Eligibility', label:'Check Eligibility', trigger:'10'}
               ],
               
            },
            {
                id:'7',
                message:'Check out the following entries',
                trigger:()=>{
                    if(this.state.age<=19.5 && this.state.age>=16.5) return ('NDA')
                    else 
                    return ('After Grad')

                }
            },

            {
                id:'NDA',
                options:[
                    {value:'NDA', label:'National Defence Academy',trigger:()=>{this.props.navigation.navigate('Entries')
                return('11')}},
                    {value:'TES', label:'10+2 Technical Entry Scheme',trigger:()=>{this.props.navigation.navigate('Entries')
                    return('11')}},
                    {value:'Navy TES', label:'10+2 Navy B.Tech',trigger:()=>{this.props.navigation.navigate('Entries')
                    return('11')}},
                    {value:'other',label:'Anything else?', trigger:'11'}
                ]
            },

            {
                id:'After Grad',
                options:[
                    {value:'CDS', label:'Combined Defence Services',trigger:()=>{this.props.navigation.navigate('Entries')
                    return ('11')}},
                    {value:'AFCAT', label:'Air Force Common Aptitude Test',trigger:()=>{this.props.navigation.navigate('Entries')
                return '11'}},
                    {value:'INET', label:'Indian Navy Entrance Test',trigger:()=>{this.props.navigation.navigate('Entries')
                    return '11'}},
                    {value:'JAG', label:'JAG',trigger:()=>{this.props.navigation.navigate('Entries')
                    return '11'}},
                    {value:'TGC', label:'Technical Graduate Course',trigger:()=>{this.props.navigation.navigate('Entries')
                    return '11'}},
                    {value:'SSC(Tech)', label:'Short Service Commission (Technical)',trigger:()=>{this.props.navigation.navigate('Entries')
                    return '11'}},
                    {value:'NCC', label:'NCC C Certificate Special Entry',trigger:()=>{this.props.navigation.navigate('Entries') 
                    return ('11')}},
                  {value:'other',label:'Anything else?', trigger:'11'}
                ]
            },

            {
                id:'8',
                options:[
                    {value:'Army', label:'Army',trigger:()=>{this.props.navigation.navigate('AboutTheForces',{
                        service:'Indian Army'
                      })
                    return '11'}},
                      {value:'Navy', label:'Navy',trigger:()=>{this.props.navigation.navigate('AboutTheForces',{
                        service:'Indian Navy'
                      })
            return '11'}},
                      {value:'Air Force', label:'Air Force',trigger:()=>{this.props.navigation.navigate('AboutTheForces',{
                        service:'Indian Air Force'
                      })
                      return '11'}},
                      {value:'other',label:'Anything else?', trigger:'11'}
                ]
            },
            {
                id:'9',
                options:[
                    {value:'CDS',label:'Combined Defence Services', trigger:()=>{this.props.navigation.navigate('CourseInfo',{
                        course:'CDS'
                      })
                    return '11'}},
                      {value:'NDA',label:'National Defence Academy', trigger:()=>{ this.props.navigation.navigate('CourseInfo',{
                        course:'NDA'
                      })
            return '11'}},
                      {value:'AFCAT',label:'Air Force Common Entrance Test', trigger:()=> {this.props.navigation.navigate('CourseInfo',{
                        course:'AFCAT'
                      })
                     return '11' }},
                      {value:'INET',label:'Indian Navy Entrance test', trigger:()=> {this.props.navigation.navigate('CourseInfo',{
                        course:'INET'
                      })
                      return '11'}},
                      {value:'SPI',label:'Services Preparatory Institute (Aurangabad) Entrance', trigger:()=> {this.props.navigation.navigate('CourseInfo',{
                        course:'SPI'
                      })
                      return '11'}},
                      {value:'SSB',label:'Services Selection Board', trigger:()=> {this.props.navigation.navigate('CourseInfo',{
                        course:'SSB'
                      })
                      return '11'}},
                      {value:'Contact',label:'Contact us for more Info!', trigger:()=> {this.props.navigation.navigate('Contact')
                      return '11'}},
                    
                    ]
            },
            {
                id:'10',
                options:[
                    {value:'Army', label:'Army', trigger:()=>{this.props.navigation.navigate('EligibilityFormArmy')
                    return '11'}},
                    {value:'Navy', label:'Navy', trigger:()=>{this.props.navigation.navigate('EligibilityFormNavy')
                return '11'}},
                    {value:'Air Force', label:'Air Force', trigger:()=>{this.props.navigation.navigate('ELigibilityFormAirForce')
                return '11'}},
                    {value:'other',label:'Anything else?', trigger:'11'}
                ],
                end:true
            },
            {
                id:'11',
                user:true,
                end:true
            }


        ]
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
<ChatBot botBubbleColor='#084d7b' botAvatar='data:image/jpeg;base64,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' steps={steps} />
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