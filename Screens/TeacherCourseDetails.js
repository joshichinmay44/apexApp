import React, { Component } from 'react'
import { Text, View, FlatList, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../style/Style'
import {Appbar, Card, Button} from 'react-native-paper';
import * as firebase from 'firebase'
export default class TeacherCourseDetails extends Component {
   state={
       studentList: this.props.route.params.studentList
   }

   back=()=>{
       this.props.navigation.navigate('Teachermycourses1')
   }

   logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      });
  };

  renderDetails=()=>{
    let course=this.props.route.params.course
let c=course.split(' ')
for(let i=0;i<c.length;i++)
{if(c[i]=='CDS')
//console.log('CDS')
return(<View style={styles.Body}>
    <Card style={styles.cardContainer}>
<Card.Cover source={require('../images/cds.jpg')}/>
<Card.Content>
    <Button style={styles.button} onPress={()=>Linking.openURL('https://www.upsc.gov.in/sites/default/files/Notice-CDSI2020-Engl-Final.pdf')}>
        Check Syllabus
    </Button>

    <Button style={styles.button} onPress={()=>Linking.openURL('https://upsc.gov.in/sites/default/files/Cut-off-CDS-I-2018.pdf')}>
        Previous cut offs
    </Button>
    <Button style={styles.button} onPress={()=>Linking.openURL('https://www.upsc.gov.in/examinations/previous-question-papers?field_exam_name_value=Combined+Defence+Services')}>
      Model Question Papers
    </Button>
  
</Card.Content>
    </Card>
</View>)
else if (c[i]=='NDA')
return(<View style={styles.Body}>
    <Card style={styles.cardContainer}>
<Card.Cover source={require('../images/NDA.jpg')}/>
<Card.Content>
    <Button style={styles.button} onPress={()=>Linking.openURL('https://www.upsc.gov.in/sites/default/files/Notice-NDAI2020-Engl-Final.pdf')}>
        Check Syllabus
    </Button>

    <Button style={styles.button} onPress={()=>Linking.openURL('https://upsc.gov.in/sites/default/files/Cut-off-CDS-I-2018.pdf')}>
        Previous cut offs
    </Button>
    <Button style={styles.button} onPress={()=>Linking.openURL('https://www.upsc.gov.in/examinations/previous-question-papers?field_exam_name_value=Combined+Defence+Services')}>
      Model Question Papers
    </Button>
  
</Card.Content>
    </Card>
</View>)
}
  }

    render() {
        let course=this.props.route.params.course
      
        Object.entries(this.state.studentList).map(([key, value]) => {
          
            console.log(value)
          });
        
        
        let studentList=this.state.studentList
        return (
            <View style={styles.Container}>
               {/*  <Text>{course} </Text> */}
               <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title={course} />
            <Appbar.Action icon="logout" onPress={this.logout} />
          </Appbar.Header>
                {this.renderDetails()}
              
            </View>
        ) 
    }
}
