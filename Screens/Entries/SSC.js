import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, TouchableOpacity} from 'react-native'
import { Avatar, Card,Button, Title, Paragraph,Appbar } from 'react-native-paper';
import styles from '../../style/Style'

export default class NDA extends Component {
    static navigationOptions = {
        headerShown: false
    }
    back = () => {

  
      this.props.navigation.goBack()

    }

  render() {
    return (
     
      <View style={styles.Container}>
      <ScrollView>
          <Appbar.Header>
          <Appbar.BackAction onPress={this.back}/>
            <Appbar.Content title='SSC'/>
          </Appbar.Header>
        <View style={styles.Body}>
        <Card.Title title='Know about Various entries'></Card.Title>
        <Card.Cover source={require('../../images/AboutPhoto.jpg')} />
        <Text style={styles.Info}>About the National Defence Academy and Naval Academy</Text>
        </View>
      </ScrollView>
      </View>
    )
  }}

