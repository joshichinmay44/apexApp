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

infoNDA=()=>{
  this.props.navigation.navigate('NDA')
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
            <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/NDA.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/TES.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/TESNAVY.jpg')} />
          </Card>
          </TouchableOpacity>
          
          <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/cds.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/AFCAT.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={require('../images/INET.jpg')} />
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={{uri:'https://www.indiandefenceeducation.com/wp-content/uploads/2020/02/JAG-Entry-Indian-Army.png'}} />
          </Card>
          </TouchableOpacity>

          <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={{uri:'https://www.prepamigo.com/wp-content/uploads/2017/10/About-TGC-Indian-Army-Recruitment-1024x538.jpg'}} />
          </Card>
          </TouchableOpacity>

          <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={{uri:'https://www.ssbcrack.com/wp-content/uploads/2018/07/SSC-Tech-Eligible-Branch-Vacancies-Cut-Off.jpg'}} />
          </Card>
          </TouchableOpacity>

          <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <Card.Cover source={{uri:'https://lh3.googleusercontent.com/proxy/anVD0JIltJkgiLNlv6vEcFlwcwCeQRGFKEpW_ztAc6E1C1qXJOcfPm1SwlaDRn3qGgavq_HxscMyOFDivVC9mLunoLQf4IXg9KFAlUFQJsnydD7e8-098u3_O7K9n8sBWVDTTQ'}} />
          </Card>
          </TouchableOpacity>
         
        </ScrollView>
      </View>
    );
  }
}
