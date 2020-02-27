import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, TouchableOpacity,} from 'react-native'
import { Avatar,Appbar,Button, Card, Title } from 'react-native-paper';
export default class EligibilityHomeScreen extends Component {

    static navigationOptions = {
        headerShown: false
    }
    EligibilityAirForce = () => {
      this.props.navigation.navigate('Stack',{screen:'EligibilityFormAirForce'})

    }
    EligibilityNavy = () => {
      this.props.navigation.navigate('Stack',{screen:'EligibilityFormNavy'})

    }
    EligibilityArmy = () => {
      this.props.navigation.navigate('Stack',{screen:'EligibilityFormArmy'})

    }
  render() {
    return (
     
      <View style={styles.Container}>
          <ScrollView style={styles.Scroll}>
          <Appbar.Header>
        <Appbar.Action icon='menu'
          onPress={()=> this.props.navigation.openDrawer()}
        />
        <Appbar.Content
          title="Eligibility"
         
         
        />
        
      </Appbar.Header>
      <TouchableOpacity 
      onPress={this.EligibilityArmy}>
       <Card  style={styles.cardContainer}>
         <Card.Title title='Indian Army' left={() => <Avatar.Icon size={30} icon="bullet"/>}/>
         <Card.Cover source={require('../images/Indian-Army.jpg')}/>
         {/* <Card.Content>
           <Title>Indian Army</Title>
         </Card.Content> */}
        {/* <Card.Actions>
          <Button mode='outlined'>Check</Button>
        </Card.Actions> */}
       </Card>
       </TouchableOpacity>
       <TouchableOpacity onPress={this.EligibilityAirForce}>
       <Card style={styles.cardContainer}>
       <Card.Title title='Indian Air Force' left={() => <Avatar.Icon size={30} icon="airplane"/>}/>
         <Card.Cover source={require('../images/IndianAirForce.jpg')} />
         {/* <Card.Content>
           <Title>Indian Air Force</Title>
         </Card.Content> */}
        {/* <Card.Actions>
          <Button mode='outlined'>Check</Button>
        </Card.Actions> */}
       </Card>
       </TouchableOpacity>
       <TouchableOpacity 
       onPress={this.EligibilityNavy}
       >
       <Card style={styles.cardContainer}>
       <Card.Title title='Indian Navy' left={() => <Avatar.Icon size={30} icon="ship-wheel"/>}/>
         <Card.Cover theme='...image.props' source={require('../images/Indian-Navy.png')} />
         {/* <Card.Content>
           <Title>Indian Navy</Title>
         </Card.Content> */}
        {/* <Card.Actions>
          <Button mode='outlined'>Check</Button>
        </Card.Actions> */}
       </Card>
       </TouchableOpacity>
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
     cardContainer:{
      //  marginTop:'2%',
      elevation:1,
        borderRadius: 60,
        width:'100%',
    }, 
    Scroll:{
        backgroundColor:'#fdfefe',
        height:'100%',
        marginBottom:10
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
   },
   button:{
    alignSelf:'center',
    width:'35%',
    height:'20%',
    marginBottom:'10%'
   },
   ButtonContainer:{
     marginTop: '45%',
     alignContent: 'center'
   }
   
})
