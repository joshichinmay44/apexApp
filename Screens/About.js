import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, TouchableOpacity,} from 'react-native'
import { Appbar,Button } from 'react-native-paper';
export default class About extends Component {

    static navigationOptions = {
        headerShown: false
    }
    back = () => {
      this.props.navigation.navigate('Home')
  }
  render() {
    return (
     
      <View style={styles.Container}>
          <ScrollView style={styles.Scroll}>
          <Appbar.Header>
        <Appbar.BackAction
          onPress={this.back}
        />
        <Appbar.Content
          title="About"
         
        />
        
      </Appbar.Header>
         <View style={styles.Body}>
           
                <Image
                 style={styles.logo}
                 source={require('../images/AboutPhoto.jpg')}
                />
                <View style={styles.Content}>
                    <Text style={styles.Title}>About The Institute</Text>
                    <Text style={styles.Info}>General information about the Institute is given here</Text>

                </View>
                
                <Button  mode="contained" >Courses Offered</Button>
               
          </View>
          </ScrollView>
      </View>
      
   
    )
  }
}

const styles = StyleSheet.create({
   
    Container:{
      height:'100%',
      backgroundColor:'#fdfefe',
    
    },
    Scroll:{
        backgroundColor:'#fdfefe',
        height:'100%',
    
    },
    Header:{
        height:'15%',
        backgroundColor:'#D6E7ED',
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
        marginTop:'3%',
        marginLeft:'25%',
       
    },
    
    Body:{
        backgroundColor:'white',
     // margin:'10%',
     // marginRight:'5%',
       //flex:0,
       alignItems:'center',
      flexDirection:'column',
      height:'100%',
      paddingBottom:'50%',
         
    },
    logo:{
        marginTop:'0%',
        marginBottom:'10%',
        height:'50%',
        width:'100%',
  
     },
     Title:{
         textAlign:'center',
         fontFamily:'georgia',
         fontSize:25,
     },
     Info:{
        fontFamily:'georgia',
        fontSize:15,
        marginLeft:'2%',
     },
   Button:{
       width:'75%',
       height:'25%',
       backgroundColor:'white',
       borderColor:'black',
       borderWidth:3,
       justifyContent:'center',
       flexDirection:'column',
       //marginLeft:'25%',
       padding:'1%',
       marginTop:'5%',
     
       
   } ,
   ButtonText:{
       //marginLeft:'17%',
       fontFamily:'Segoe UI',
       fontStyle:'italic',
       fontSize:20,
       textAlign:'center'
   }

   
})
