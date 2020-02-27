import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, Button, TouchableOpacity,} from 'react-native'
import { Appbar,Card } from 'react-native-paper';
export default class Contacts extends Component {

    static navigationOptions = {
        headerShown: false
    }

  
  render() {
    return (
     
      <View style={styles.Container}>
          <ScrollView>
          <Appbar.Header>
        <Appbar.Action icon="menu"
         onPress={()=> this.props.navigation.openDrawer()} 
        />

        <Appbar.Content
          title="Contact"
         // subtitle="view"
        />
        
       
      </Appbar.Header>
         <View style={styles.Body}>
           
            <Card style={styles.Card}>
                    <Card.Title title='Contact Information' />
                    <Card.Title subtitle='detailed info here' />
                
            </Card>
                
                
               
          </View>
          </ScrollView>
      </View>
      
   
    )
  }
}

const styles = StyleSheet.create({
   
    Container:{
      height:'100%',
      backgroundColor:'ghostwhite',
    
    },
    Card:{
      borderWidth:2,
      margin:'10%',
     
     
  },
   
})
