import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity,ScrollView } from 'react-native-gesture-handler'
import styles from '../../style/Style'
import {Appbar,Card} from 'react-native-paper'

export default class AboutTheForces extends Component {
    backToHome=()=>{
        this.props.navigation.navigate('Home')
    }

    back=()=>{
        this.props.navigation.navigate('Services')
    }

    /* pressHandler=(variable)=>
    {
        if(variable='History Army')
        {
            this.props.navigation.navigate('ServiceDescriptiveInfo',{
                variable:'History of the Indian Army'
            })
        }
    } */

   renderInfo=(service)=>{
       if(service=='Indian Army')
       {
           return(
      <React.Fragment>
   <Card style={styles.cardContainer}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
           variable:'History of the Indian Army'
       })}>
      <Text style={styles.Title}>History of the Indian Army</Text>
       <Card.Cover source={{uri:'https://www.rnz.co.nz/assets/pictures/22029/eight_col_Indian_Sikh_soldiers__Gallipoli__Turkey.jpg'}}/>
       </TouchableOpacity>
   </Card>
   <Card style={styles.cardContainer}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
           variable:'Post Independence Wars'
       })}>
      <Text style={styles.Title}>Post Independence Wars</Text>
       <Card.Cover source={{uri:'https://www.orfonline.org/wp-content/uploads/2017/12/vijay-diwas.jpg'}}/>
       </TouchableOpacity>
   </Card>

   <Card style={styles.cardContainer}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
           variable:'Arms Structure Ranks'
       })}>
      <Text style={styles.Title}>Arms, Structure and Ranks</Text>
       <Card.Cover source={{uri:'https://www.businessinsider.in/photo/68420317/indian-army-ranks.jpg?imgsize=2368917'}}/>
       </TouchableOpacity>
   </Card>

   <Card style={styles.cardContainer}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
           variable:'Our Heroes'
       })}>
      <Text style={styles.Title}>Our Heroes</Text>
       <Card.Cover source={{uri:'https://www.inditales.com/wp-content/uploads/2017/07/drass-war-memorial-veer-bhumi.jpg'}}/>
       </TouchableOpacity>
   </Card>

   </React.Fragment>
 )
       }

   }
    render() {
        let service= this.props.route.params.service
        return (
            <React.Fragment>
            <Appbar.Header style={styles.Header}>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title={service} />
            <Appbar.Action icon="home" onPress={this.backToHome} />
          </Appbar.Header>
          <ScrollView style={styles.Scroll}>
              {this.renderInfo(service)}
          </ScrollView>
          </React.Fragment>
        )
    }
}
