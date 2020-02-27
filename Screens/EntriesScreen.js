import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, TouchableOpacity} from 'react-native'
import { Avatar, Card, Title, Paragraph,Appbar,Button } from 'react-native-paper';
import styles from '../style/Style'
export default class EntriesScreen extends Component {
    static navigationOptions = {
        headerShown: false
    }

infoNDA=()=>{
  this.props.navigation.navigate('Stack',{screen:'NDA'})
}
infoSSC=()=>{
  this.props.navigation.navigate('SSC')
}
infoTES=()=>{
  this.props.navigation.navigate('TES')
}
infoNCC=()=>{
  this.props.navigation.navigate('NCC')
}
infoJAG=()=>{
  this.props.navigation.navigate('JAG')
}
infoINET=()=>{
  this.props.navigation.navigate('INET')
}
infoCDS=()=>{
  this.props.navigation.navigate('CDS')
}
infoAFCAT=()=>{
  this.props.navigation.navigate('AFCAT')
}


    
  render() {
    return (
    
      <View style={styles.Container}>
      <ScrollView>
    
        
       
        <Appbar.Header>
        <Appbar.Action icon="menu"
          onPress={()=> this.props.navigation.openDrawer()}
         />
          <Appbar.Content title='Entries'/>
         
        </Appbar.Header>
         

          <View style={styles.Body}>
          <Card.Title title='Know about Various entries'></Card.Title>
          <Card.Cover source={require('../images/AboutPhoto.jpg')} />
                  <View style={styles.BodyButton}>
                  <View style={styles.button} >
                    <Button  mode="contained" onPress={this.infoNDA}>NDA/NA</Button>
                  </View >
                  <View style={styles.button} >
                    <Button  mode="contained" onPress={this.infoTES}>TES</Button>
                  </View >
                  <View style={styles.button} >
                    <Button  mode="contained" onPress={this.infoCDS}>CDS</Button>
                  </View >
                  <View style={styles.button} >
                    <Button  mode="contained" onPress={this.infoAFCAT}>AFCAT</Button>
                  </View >
                  <View style={styles.button} >
                    <Button  mode="contained" onPress={this.infoINET}>INET</Button>
                  </View >
                  <View style={styles.button} >
                    <Button  mode="contained" onPress={this.infoSSC}>TGC/SSC</Button>
                  </View >
                  <View style={styles.button} >
                    <Button  mode="contained" onPress={this.infoNCC}>NCC</Button>
                  </View >
                  <View style={styles.button} >
                    <Button  mode="contained" onPress={this.infoJAG}>JAG</Button>
                  </View >
                  </View>
             

  
                </View>
          </ScrollView> 
      </View>
     
     
    )
  }}

/* const styles = StyleSheet.create({
   
    Container:{
 
     backgroundColor:'ghostwhite',
      
    },
    button:{
      margin:'2%',
     
    },
    BodyButton:{
      width:'60%',
      marginLeft:'20%',
      marginRight:'20%',
    },
    
    
   
}) */
