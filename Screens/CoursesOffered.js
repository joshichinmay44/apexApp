import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, TouchableOpacity,} from 'react-native'
import { Appbar,Button,Card,Avatar, Title, Paragraph, } from 'react-native-paper';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default class CoursesOffered extends Component {

    static navigationOptions = {
        headerShown: false
    } 
    back = () => {this.props.navigation.navigate('Home')}
    Cds = () => {
        this.props.navigation.navigate('Cds')
    }
    
    Nda = () => {
        this.props.navigation.navigate('Nda')
    }
    Afcat = () => {
        this.props.navigation.navigate('Afcat')
    }
    render() {
    return (
     
    <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
            <Appbar.Header style={styles.Header}>
                <Appbar.BackAction 
                onPress={this.back}
                />
                <Appbar.Content title="Courses Offered"/>
            </Appbar.Header>

                    <View style={styles.Body}>
             
                    
<Card style={styles.Card}>
    <TouchableOpacity onPress={this.Cds}>
    <Card.Cover source={require('../images/cds.jpg')}  style={{width:'100%'},{borderTopRightRadius:30,borderTopLeftRadius:30}}/>
    <Card.Title subtitle='Press for more details!' right={()=><Avatar.Icon size={30} icon="arrow-right-bold"/>}/>
    
    </TouchableOpacity>
</Card>

<Card style={styles.Card}>
    <TouchableOpacity onPress={this.Nda}>
    <Card.Cover source={require('../images/NDA.jpg')}style={{width:'100%'},{borderTopRightRadius:30,borderTopLeftRadius:30}}/>
    <Card.Title subtitle='Press for more details!' right={()=><Avatar.Icon size={30} icon="arrow-right-bold"/>}/>
    
    </TouchableOpacity>
</Card>
                              
                        
                       
<Card style={styles.Card}>
    <TouchableOpacity onPress={this.Afcat}>
    <Card.Cover source={require('../images/AFCAT.jpg')}style={{width:'100%'},{borderTopRightRadius:30,borderTopLeftRadius:30}}/>
    <Card.Title subtitle='Press for more details!' right={()=><Avatar.Icon size={30} icon="arrow-right-bold"/>}/>
    
    </TouchableOpacity>
</Card>

<Card style={styles.Card}>
    <TouchableOpacity onPress={this.Cds}>
    <Card.Cover source={require('../images/IndianNavy.png')}style={{width:'100%'},{borderTopRightRadius:30,borderTopLeftRadius:30}}/>
    <Card.Title subtitle='Press for more details!' right={()=><Avatar.Icon size={30} icon="arrow-right-bold"/>}/>
    
    </TouchableOpacity>
</Card>
<Card style={styles.Card}>
    <TouchableOpacity onPress={this.Cds}>
    <Card.Cover source={require('../images/spi.jpg')} style={{width:'100%'},{borderTopRightRadius:30,borderTopLeftRadius:30}}/>
    <Card.Title subtitle='Press for more details!' right={()=><Avatar.Icon size={30} icon="arrow-right-bold"/>}/>
    
    </TouchableOpacity>
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
        margin:'5%',
        backgroundColor:'#ece6ff',
        borderRadius:10,
        borderRadius:30,
       
    },
    arrow:{
       marginLeft:'90%',
       marginTop:'1%',
    },
   
})
