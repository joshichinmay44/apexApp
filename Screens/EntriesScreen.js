import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Appbar,
  Button,
} from 'react-native-paper';
import styles from '../style/Style';
export default class EntriesScreen extends Component {

  static navigationOptions = {
    headerShown: false,
  };

/* infoNDA=()=>{
  this.props.navigation.navigate('')
}
infoSSC=()=>{
  this.props.navigation.navigate('SSC')
}
infoTES=()=>{
  this.props.navigation.navigate('TES')
}
infoNCC=()=>{
  this.props.navigation.navigate('NCC')
}
infoJAG=()=>{
  this.props.navigation.navigate('JAG')
}
infoINET=()=>{
  this.props.navigation.navigate('INET')
}
infoCDS=()=>{
  this.props.navigation.navigate('CDS')
}
infoAFCAT=()=>{
  this.props.navigation.navigate('AFCAT')
}

 */
  
  render() {
    return (

      <View style={styles.Container}>
       
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Entries" />
          </Appbar.Header>
          <ScrollView style={styles.Scroll}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'National Defence Academy'
            })}>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/NDA.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'10+2 TES (Army)'
            })}>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/TES.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'10+2 TES (Navy)'
            })}>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/TESNAVY.jpg')} />
          </Card>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'Combined Defence Services'
            })} >
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/cds.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'AFCAT'
            })}>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/AFCAT.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'INET'
            })}>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/INET.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'JAG'
            })}>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/JAG.png')} />
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'TGC'
            })}>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/TGC.jpg')} />
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'SSC (Tech)'
            })}>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/SSC.jpg')} />
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('InfoEntries',{
              entry:'NCC Special Entry'
            })}>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/NCC.jpg')} />
          </Card>
          </TouchableOpacity>
         
        </ScrollView>
      </View>
    );
  }
}
