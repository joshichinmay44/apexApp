import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, TouchableOpacity,Picker, ImageBackground} from 'react-native'
import { Appbar,Button,Card,Avatar, Title, Paragraph, TextInput,Drawer,Menu,Divider, Provider, Checkbox} from 'react-native-paper';
export default class EligibilityFormArmy extends Component {

    static navigationOptions = {
        headerShown: false
    } 
    state = {
        age: '0',
        month: '-1',
        qualification:'-1',
        ncc:false,
        service:''
      };
    back = () => {this.props.navigation.navigate('Stack',{screen:'EligibilityHomeScreen'})}
    

    checkEligibility=()=>{
       this.props.navigation.navigate('EligibilityResultArmy',{
           age: this.state.age,
           month: this.state.month,
           qualification:this.state.qualification,
           ncc:this.state.ncc,
           service:'army'
       })
   }


    render() {
        const {ncc}=this.state;
    return (
     
    <View style={styles.Container}>
        <ImageBackground source={require('../../images/Indian-Army.jpg')} style={{width:'100%',height:'100%'}}>
       
        <ScrollView style={styles.Scroll}>
                <Appbar.Header style={styles.Header}>
                    <Appbar.BackAction onPress={this.back}/>
                    <Appbar.Content title="Check Eligibility for Army"/>
                </Appbar.Header>

         <View style={styles.Body} >
               
                    <View style={styles.Picker}>
                     <TextInput
                         label='Age'
                         keyboardType={'numeric'}
                         placeholder='Enter Your Age '
                         onChangeText={text => { this.setState({ age:text })}}
                         style={styles.Inputx}

                   />
                 </View>

                <View   style={styles.Picker}>
                <Picker
                    
                    selectedValue={this.state.month}
                
                    onValueChange={(itemValue, itemIndex) =>this.setState({month: itemValue}) }>
                    <Picker.Item label="Enter your birth month" value='-1' />
                    <Picker.Item label="January" value='1' />
                    <Picker.Item label="February" value="2" />
                    <Picker.Item label="March" value='3' />
                    <Picker.Item label="April" value="4" />
                    <Picker.Item label="May" value='5' />
                    <Picker.Item label="June" value="6" />
                    <Picker.Item label="July" value="7" />
                    <Picker.Item label="August" value='8' />
                    <Picker.Item label="September" value="9" />
                    <Picker.Item label="October" value='10' />
                    <Picker.Item label="November" value="11" />
                    <Picker.Item label="December" value='12' />
                
                </Picker>
                </View>

                <View   style={styles.Picker}>
                <Picker
                    selectedValue={this.state.qualification}
                    onValueChange={(itemValue, itemIndex) =>this.setState({qualification: itemValue}) }>
                    <Picker.Item label="Enter your qualification" value='-1' />
                    <Picker.Item label="12 th Pass" value='1' />
                    <Picker.Item label="Graduation (BE)" value="3" />
                    <Picker.Item label="Graduation (LLB)" value='4' />
                    <Picker.Item label="Graduation (Other)" value="2" />
                    
                
                </Picker>
                </View>  
                <View style={styles.Picker}>
                <Text>Do you have NCC 'C' Certificate?</Text> 
                <Checkbox 
        status={ncc ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ ncc: !ncc }); }}
      />
      </View>
               
                 <View style={styles.button} >
                 
                        <Button  mode="contained" onPress={()=>{
                            if((isNaN(this.state.age))||(this.state.age<1)||(this.state.age>100))
                            {
                                alert("Please enter a valid age")
                            }
                            else if(this.state.month==-1)
                            {
                                alert("Please enter your month of birth")
                            }
                            else if(this.state.qualification==-1)
                            {
                                alert("Please enter your qualification")
                            }
                            else
                            {
                                    this.checkEligibility()
                            }
                        }} title='Submit' >Submit</Button>
                    
                </View >
             
                    </View>
        </ScrollView>
       
    
    </ImageBackground>
    </View>
    )
  }
}

const styles = StyleSheet.create({
   
    Container:{
      height:'100%',
      backgroundColor:'ghostwhite',
      
    },
    Scroll:{
        height:'100%',
    },
    Body:{
      
        
         height:'100%',
      
         
    },
    backgroundImage:{
        
    },
    Card:{
        borderWidth:2,
        margin:'5%',
        backgroundColor:'#ece6ff',
        marginBottom:'20%'
       
    },
    arrow:{
       marginLeft:'90%',
       marginTop:'1%',
    },
    Input:{
        margin:'10%',
       
      
    },
    
    button:{
        margin:'5%'
    },
    Picker:{
        margin:'10%',
        marginHorizontal:'10%',
      backgroundColor:'#e1e1e5',
     
    },
    Checkbox:{
        margin:'5%',
        marginHorizontal:'10%',
      backgroundColor:'#e1e1e5',
     flexDirection:'row',
    },
    Inputx:{
      
        backgroundColor:'#e1e1e5',
     
      
    },
})