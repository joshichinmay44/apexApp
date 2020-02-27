import React, { Component } from 'react'
import {StyleSheet, View,ScrollView,Image, TouchableOpacity} from 'react-native'
import { Appbar,Button,Text,TextInput,Card } from 'react-native-paper';
export default class AboutArmy extends Component {
    static navigationOptions = {
        headerShown: false
    }

    back = () => { this.props.navigation.navigate('Services')}
    
    
  render() {
    return (
     
      <View style={styles.Container}>
          <ScrollView style={styles.Scroll}>
          <Appbar.Header>
          <Appbar.BackAction onPress={this.back}/>
           <Appbar.Content title="About Army"/>
          </Appbar.Header>
         <View style={styles.Body}>
               <Image
                 style={styles.logo}
                 source={require('../images/AboutPhoto.jpg')}
                />
                <Text style={styles.Info}>ABout the Army</Text>
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
    Info:{
        fontFamily:'georgia',
        fontSize:25,
        textAlign:'center',
        color:'#3700B3'
     },
    
})
