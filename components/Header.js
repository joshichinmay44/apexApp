import React, { Component } from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
import Services from '../Screens/Services'

export default class Header extends Component {
   
    render() {
        return (
        
            <View style={styles.Header}>
               <Image
                style={styles.MenuLogo}
                source={require('../images/menuLogo.png')}
            />
           </View>
        )
    }
}

const styles= StyleSheet.create({
    Header:{
        height:'15%',
      backgroundColor:'#121212',
        width:'100%',
        borderColor:'#000000',
       flexDirection:'row',
        borderWidth:2,
       // marginBottom:'5%',
        //flex:1
    },
    MenuLogo:{
        width:'15%',
        height:'50%',
        marginTop:"5%",
        marginLeft:'1%',
    },
    Heading:{
        fontStyle:'normal',
        fontSize:30,
        fontFamily:'Comic Sans MS',
        marginTop:'5%',
        marginLeft:'20%',
      color:'#03DAC5'
       
    },
  }

)