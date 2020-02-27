import React, { Component } from 'react'
import {StyleSheet,  View,ScrollView,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Block, Button, Icon, Input, NavBar} from 'galio-framework';
import {MaterialIcons}from 'react-native-vector-icons'
import { Appbar,Text , Card} from 'react-native-paper';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
export default class ViewNotification extends Component {
    static navigationOptions = {
        headerShown: false
    };
   
    back = () => {
        this.props.navigation.navigate('StudentProfile')
    }
   
    

    render() {
    return (
       
      <View style={styles.Container}>
              <ScrollView style={styles.Scroll}>
            <Appbar.Header>
                <Appbar.BackAction onPress={this.back}/>
                <Appbar.Content  title="Course Information" subtitle="course name"/>
            </Appbar.Header>
     
            <View style={styles.Body}>

                    
            <Card style={styles.Card}>
                    <Card.Title title='Course Name' />
                    <Card.Title subtitle='Course Id' />
                    <Card.Title subtitle='Course Duration' />
            </Card>
            <Card style={styles.Card}>
                    <Card.Title title='Couse Details' />
                    
            </Card>
            
                   
            </View>
            </ScrollView> 
      </View>
      
      


    

 

    )}
}


const styles = StyleSheet.create({
    Container:{
        backgroundColor: 'ghostwhite',
        height:'100%'
    },
   Scroll:{
    height:'100%'
   },
    Body:{
        backgroundColor:'ghostwhite',
        justifyContent:'center',
        height:'100%'
    },

    Card:{
      
        margin:'10%',
      
    },
   
})
