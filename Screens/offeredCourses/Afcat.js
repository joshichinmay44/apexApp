import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, TouchableOpacity,} from 'react-native'
import { Appbar,Button,Card,Avatar, Title, Paragraph } from 'react-native-paper';
export default class Afcat extends Component {

    static navigationOptions = {
        headerShown: false
    } 
    back = () => {
        this.props.navigation.navigate('CoursesOffered')
    }
    backToHome = () => {
        this.props.navigation.navigate('Home')

      }
    render() {
    return (
     
    <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
            <Appbar.Header style={styles.Header}>
                <Appbar.BackAction onPress={this.back}/>
                <Appbar.Content title="AFCAT"/>
                <Appbar.Action icon="home" onPress={this.backToHome} />
            </Appbar.Header>

                    <View style={styles.Body}>
                        
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
    
})
