import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, Button, TouchableOpacity, ActivityIndicator,} from 'react-native'
import styles from '../style/Style';




export default class LoadingScreen extends Component {
    static navigationOptions = {
        headerShown: false
    }

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Home')
        },2000)
    }
     
    render() {
       
        return (
            <View style={styles.ContainerLoading}>
                 <Image
                source={require('../images/ApexLogo.jpg')}
                 />
             <Text style={styles.Info}>Training and Education</Text>
            
                <ActivityIndicator size="large" color="darpink" style={styles.indicator}/>
                <Text style={styles.TextLoading}> LOADING</Text>
            </View>
        )}

}

