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
           variable:'Indian Army Ranks'
       })}>
      <Text style={styles.Title}>Ranks of the Indian Army</Text>
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

       else if(service=='Indian Air Force'){
        return(
            <React.Fragment>
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'History of the Indian Air Force'
             })}>
            <Text style={styles.Title}>History of the Indian Air Force</Text>
             <Card.Cover source={{uri:'https://indianairforce.nic.in/sites/default/files/21pair_0.jpg'}}/>
             </TouchableOpacity>
         </Card>
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Daredevil Missions'
             })}>
            <Text style={styles.Title}>Daredevil Missions of the IAF</Text>
             <Card.Cover source={{uri:'https://www.asylumfilms.com/images/blog/indian_air_force.jpg'}}/>
             </TouchableOpacity>
         </Card>
      
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Air Force Ranks'
             })}>
            <Text style={styles.Title}>Ranks of the Indian Air Force</Text>
             <Card.Cover source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYNZAWTpjtEo5gZWOGXk31C8DjBjz2zrcDqGqAHPLrHF6kCWaX'}}/>
             </TouchableOpacity>
         </Card>
      
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Air Warriors'
             })}>
            <Text style={styles.Title}>Our Heroes</Text>
             <Card.Cover source={{uri:'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/9/2/w900X450/IMG-20190902-WA0003.jpg'}}/>
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
             <Card.Cover source={{uri:'https://upload.wikimedia.org/wikipedia/commons/1/17/Royal_Indian_Navy_officers_on_the_deck_of_HMIS_HINDUSTAN_in_Sydney_%289289631362%29.jpg'}}/>
             </TouchableOpacity>
         </Card>
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Naval Missions'
             })}>
            <Text style={styles.Title}>Naval Missions</Text>
             <Card.Cover source={{uri:'https://s3.scoopwhoop.com/anj/navy23/259369339.jpg'}}/>
             </TouchableOpacity>
         </Card>
      
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Indian Navy Ranks'
             })}>
            <Text style={styles.Title}>Ranks of the Indian Navy</Text>
             <Card.Cover source={{uri:'https://timesnext.com/wp-content/uploads/2019/12/how-to-join-indian-navy-eligibility-ranks-positions-benefits-life-696x696.jpg'}}/>
             </TouchableOpacity>
         </Card>
      
         <Card style={styles.cardContainer}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('ServiceDescriptiveInfo',{
                 variable:'Sea Warriors'
             })}>
            <Text style={styles.Title}>Our Heroes</Text>
             <Card.Cover source={{uri:'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/05/14/823489-819968-picture-for-representationindian-navy-twitter-indiannv.jpg'}}/>
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
