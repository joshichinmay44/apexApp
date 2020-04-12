import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity,ScrollView } from 'react-native-gesture-handler'
import styles from '../../style/Style'
import {Appbar,Card} from 'react-native-paper'

export default class AboutTheForces extends Component {
   
    back=()=>{
        this.props.navigation.navigate('Home')
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
       <Card.Cover source={require('../../images/HistoryOfArmy.jpg')}/>
       </TouchableOpacity>
   </Card>
   <Card style={styles.cardContainer}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
           variable:'Post Independence Wars'
       })}>
      <Text style={styles.Title}>Post Independence Wars</Text>
       <Card.Cover source={require('../../images/WarsArmy.jpg')}/>
       </TouchableOpacity>
   </Card>

   <Card style={styles.cardContainer}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
           variable:'Indian Army Ranks'
       })}>
      <Text style={styles.Title}>Ranks of the Indian Army</Text>
       <Card.Cover source={require('../../images/RanksArmy.jpg')}/>
       </TouchableOpacity>
   </Card>

   <Card style={styles.cardContainer}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
           variable:'Our Heroes'
       })}>
      <Text style={styles.Title}>Our Heroes</Text>
       <Card.Cover source={require('../../images/HeroesArmy.jpg')}/>
       </TouchableOpacity>
   </Card>

   </React.Fragment>
 )
       }

       else if(service=='Indian Air Force'){
        return(
            <React.Fragment>
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'History of the Indian Air Force'
             })}>
            <Text style={styles.Title}>History of the Indian Air Force</Text>
             <Card.Cover source={require('../../images/HistoryIAF.jpg')}/>
             </TouchableOpacity>
         </Card>
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Daredevil Missions'
             })}>
            <Text style={styles.Title}>Daredevil Missions of the IAF</Text>
             <Card.Cover source={require('../../images/IAFMissions.jpg')}/>
             </TouchableOpacity>
         </Card>
      
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Air Force Ranks'
             })}>
            <Text style={styles.Title}>Ranks of the Indian Air Force</Text>
             <Card.Cover source={require('../../images/IAFRanks.jpg')}/>
             </TouchableOpacity>
         </Card>
      
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Air Warriors'
             })}>
            <Text style={styles.Title}>Our Heroes</Text>
             <Card.Cover source={require('../../images/AirWarriors.jpg')}/>
             </TouchableOpacity>
         </Card>
      
         </React.Fragment>
       )
       
       }

       else if(service=='Indian Navy'){
        return(
            <React.Fragment>
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'History of the Indian Navy'
             })}>
            <Text style={styles.Title}>History of the Indian Navy</Text>
             <Card.Cover source={require('../../images/NavyHistory.jpg')}/>
             </TouchableOpacity>
         </Card>
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Naval Missions'
             })}>
            <Text style={styles.Title}>Naval Missions</Text>
             <Card.Cover source={require('../../images/NavalMissions.jpg')}/>
             </TouchableOpacity>
         </Card>
      
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Indian Navy Ranks'
             })}>
            <Text style={styles.Title}>Ranks of the Indian Navy</Text>
             <Card.Cover source={require('../../images/NavyRanks.jpg')}/>
             </TouchableOpacity>
         </Card>
      
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Sea Warriors'
             })}>
            <Text style={styles.Title}>Our Heroes</Text>
             <Card.Cover source={require('../../images/NavalHeroes.jpg')}/>
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
           
          </Appbar.Header>
          <ScrollView style={styles.Scroll}>
              {this.renderInfo(service)}
          </ScrollView>
          </React.Fragment>
        )
    }
}
