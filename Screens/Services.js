import React, { Component } from 'react'
import {StyleSheet,View,ScrollView,Image, TouchableOpacity,} from 'react-native'
import { Appbar,Button,Text,TextInput,Card } from 'react-native-paper';    

export default class Services extends Component {
    static navigationOptions = {
        headerShown: false
    }

infoArmy=()=>{
  this.props.navigation.navigate('Stack', {screen:'AboutArmy'})
}
infoNavy=()=>{
  this.props.navigation.navigate('Stack', {screen:'AboutNavy'})
}

infoAirForce=()=>{
  this.props.navigation.navigate('Stack', {screen:'AboutAirForce'})
}
    
  render() {
    return (
     
      <View style={styles.Container}>
          <ScrollView style={styles.Scroll}>
    
            <Appbar.Header>
              <Appbar.Action icon="menu" onPress={()=> this.props.navigation.openDrawer()} />
              <Appbar.Content title="Services"/>
            </Appbar.Header>
         <View style={styles.Body}>
           
                <Image
                 style={styles.logo}
                 source={require('../images/AboutPhoto.jpg')}
                />
                <View style={styles.button} >
                  <Button  mode="contained" onPress={this.infoArmy}>   Indian Army   </Button>
                </View >
                <View style={styles.button} >
                  <Button  mode="contained" onPress={this.infoNavy}>   Indian Navy   </Button>
                </View >
                <View style={styles.button} >
                  <Button  mode="contained" onPress={this.infoAirForce}>Indian Air Force</Button>
                </View >
            </View>
         </ScrollView>
    </View>
    )
  }}

const styles = StyleSheet.create({
   
    Container:{
      height:'100%',
     backgroundColor:'ghostwhite',
    
    },
   
  
   
    
    Body:{
      
       alignItems:'center',
      flexDirection:'column',
      height:'100%',
      paddingBottom:'50%',
         
    },
    logo:{
        marginTop:'0%',
        marginBottom:'10%',
        height:'50%',
        width:'200%',
        color:'#3700B3'
  
     },
    button:{
      margin:"2%",
    },
   
})
