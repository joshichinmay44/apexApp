import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';

import { Avatar, Card,Button, Title, Paragraph,Appbar } from 'react-native-paper';

export default class Teacherstudentprogress extends React.Component {
    back = () => {
        this.props.navigation.navigate('TeacherProfile')
    }
  render() {
   
    return (
      
        <ScrollView >
            <View style={styles.header}>
            <Appbar.Header>
         <Appbar.BackAction onPress={this.back}/>
           <Appbar.Content title='Directors Desk'/>
         </Appbar.Header>

            </View>
            <View>
            <TouchableOpacity style={styles.myopacity}> 
                    <Text style={styles.opacityText}>Course 1</Text>
                </TouchableOpacity>
            

            <TouchableOpacity style={styles.myopacity}>
                    <Text style={styles.opacityText}>Course 2</Text>
                </TouchableOpacity>

            <TouchableOpacity style={styles.myopacity}>
                    <Text style={styles.opacityText}>Course 3</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
     
    );
  }
}
const styles=StyleSheet.create({
    backlogo:{
        marginTop:20,  
        width:30,
        height:30,
      
  
    },
  
    header:{
        width:415,
        height:80,
        borderWidth:2,
        flexDirection:'row',
        backgroundColor:'#D6E7ED',
        borderColor:"black"
        
    },
    
    myopacity:{
        width:234,
        height:50,
        borderWidth:2,
        backgroundColor:'#A3C9F7',
        borderColor:'#8D99E8',
        alignItems:'center',
        margin:20,
        marginLeft:80,

    },
    opacityText:{
        fontSize:20,
        fontFamily:'georgia',
        margin:8,
    },
    headerText:{
        marginTop:15,
        fontFamily:"comic sans ms",
        fontSize:30,
        marginLeft:50,
    },
    homeLogo:{
        marginTop:20,
        width:30,
        height:30,
        marginLeft:60,
    }
  });