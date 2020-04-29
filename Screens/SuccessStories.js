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
  Button,
  Title,
  Paragraph,
  Appbar,
} from 'react-native-paper';
import styles from '../style/Style';
import * as firebase from 'firebase'
export default class SuccessStories extends React.Component {

  state={
    courses:[],
    specific:[],
    
}

componentDidMount(){

  let data=firebase.database().ref('Success Stories/')
          //console.log(data)
          data.on('value', datasnap=>{
              
                  this.setState({courses:Object.values(datasnap.val())},()=>{
                      console.log(this.state.courses)
                  })


                  this.setState({specific:Object.keys(datasnap.val())},()=>{
                      console.log(this.state.specific)
                  })

              
          })



}


/* getcourses=()=>{
  this.state.specific.map((item,index)=>{
      Object.keys(item).map(function(key){
          if(key.match('AFCAT'))
          {
              var nda=item[key]
              console.log(nda)
          }
      })
  })

} */

renderStories=()=>{
  let length=this.state.courses.length
  
let renderer=[]

//console.log(this.state.courses[0])
for (var i=0;i<length;i++){
  renderer[i]=(
    <React.Fragment>
      <Card style={styles.cardContainer}>
        <Card.Cover source={require('../images/logo.jpg')}/>
        <Card.Content>
          <Text style={styles.Title}>{this.state.courses[i].Course}</Text>
          <Text style={styles.Info}>{this.state.courses[i].Name}</Text>
          <Text style={styles.Info}>{this.state.courses[i].Date}</Text>
          <Text style={styles.Info}>{this.state.courses[i].Content}</Text>
          </Card.Content>
      </Card>
    </React.Fragment>

  )
}

return renderer
}

  back = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.Container}>
          <Appbar.Header>
          <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Success Stories" />
          </Appbar.Header>
          <ScrollView style={styles.Scroll}>

          
         {this.renderStories()}
        </ScrollView>
      </View>
    );
  }
}
