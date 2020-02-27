import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, Button, TouchableOpacity, ActivityIndicator,} from 'react-native'





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
            <View style={styles.Container}>
                 <Image
                style={styles.LoadingLogo}
                source={require('../images/logoc.png')}
                 />
             
                <ActivityIndicator size="large" color="darpink" style={styles.indiacator}/>
                <Text style={styles.Text}> LOADING</Text>
            </View>
        )}

}

const styles = StyleSheet.create({
   Container:{
       backgroundColor:'white',
       height:'100%',
       flex:1,
      alignItems:'center',
       justifyContent:'center',
   },
   Text:{
       fontSize:15,
       color:'black',
       marginTop:'30%',

   },
   indiacator:{
      marginTop:'30%',
   }
})