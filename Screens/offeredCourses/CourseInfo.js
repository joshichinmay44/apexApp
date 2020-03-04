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
  Appbar,
  Button,
  Card,
  Avatar,
  Title,
  Paragraph,
} from 'react-native-paper';
import styles from '../../style/Style';
export default class Afcat extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  back = () => {
    this.props.navigation.navigate('CoursesOffered');
  };
  backToHome = () => {
    this.props.navigation.navigate('Home');
  };


renderInfo=(course)=>{
  if(course=='CDS')
  {
    return(
      <React.Fragment>
      <Appbar.Header style={styles.Header}>
      <Appbar.BackAction onPress={this.back} />
      <Appbar.Content title="CDS" />
      <Appbar.Action icon="home" onPress={this.backToHome} />
    </Appbar.Header>
      <View style={styles.Body}>
        <Card style={styles.cardContainer}>
        <Card.Content>
          <Text style={styles.Title}>
            What will the course cover?
          </Text>
          <Text style={styles.Info}>
            The course will cover the entire syllabus of the CDSE as mentioned in the UPSC syllabus.{"\n"}
            For boys who wish to apply for IMA, extra sessions of Mathematics will be conducted.
          </Text>
        </Card.Content>
        </Card>
        <Card style={styles.cardContainer}>
        <Card.Content>
          <Text style={styles.Title}>
           What will be the course duration?
          </Text>
          <Text style={styles.Info}>
            it will be crash course and will be conducted for a duration of one month with lectures starting at 1100 hrs and lasting till 1600 hrs.
          </Text>
        </Card.Content>
</Card>


<Card style={styles.cardContainer}>
        <Card.Content>
          <Text style={styles.Title}>
         When is the course conducted? 
          </Text>
          <Text style={styles.Info}>
           The Course is conducted in 3 batches starting three months before the commencement of the actual examination. Students can enroll in any one of the batches which will last for one month each.
          </Text>
        </Card.Content>
</Card>

      
      
<Card style={styles.cardContainer}>
        <Card.Content>
          <Text style={styles.Title}>
            Can girls apply for the course too?
          </Text>
          <Text style={styles.Info}>
          As women candidates can join the Officers Training Academy (OTA) by applying for the CDSE, we also admit women candidates for the course.
          </Text>
        </Card.Content></Card>
        <Card style={styles.cardContainer}>
        <Card.Content>
          <Text style={styles.Title}>
           WIll there be a test series module along with the course?
          </Text>
          <Text style={styles.Info}>
         Yes. There will be <Text style={{color:'red'}}>1</Text> half test and <Text style={{color:'red'}}>1 </Text> full test which will be conducted as a part of the course.
          </Text>
        </Card.Content></Card>

        <Card style={styles.cardContainer}>
        <Card.Content>
          <Text style={styles.Title}>
            What is the fee structure for the course?
          </Text>
          <Text style={styles.Info}>
         The fee structure for the course is as follows: {"\n"}
         IMA (Boys): <Text style={{color:'red'}}>25000/-</Text>{"\n"}
         OTA(Boys and Girls):<Text style={{color:'red'}}> 18000/-</Text>{"\n"}
         (Please note that the aforementioned fees are inclusive of all taxes)
          </Text>
        </Card.Content></Card>

        


      </View>
      
      </React.Fragment>)} 

if(course=='NDA')

{
  return(
    <React.Fragment>
    <Appbar.Header style={styles.Header}>
    <Appbar.BackAction onPress={this.back} />
    <Appbar.Content title="NDA" />
    <Appbar.Action icon="home" onPress={this.backToHome} />
  </Appbar.Header>
    <View style={styles.Body}>
      <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
          What are the different types of batches that one can enroll in for this course?
        </Text>
        <Text style={styles.Info}>
         The following batches are available at Apex Careers for NDA: {"\n"}
      <Text style={{fontWeight:'bold'}}>  1. XI+XII+NDA </Text>{"\n"}
      Two years batch of XI+XII+NDA caters to a good score in the XII Science (PCM) Board Exams conducted by Maharashtra HSC Board and success in the NDA Exams. {"\n"}
      <Text style={{fontWeight:'bold'}}>  2. XII+NDA </Text>{"\n"}
       
      The students who are interested to join “Apex Careers” for a period of one year to prepare for NDA written and the XII Board exam coaching are welcome to join our Institute.
       {"\n"}
       
        <Text style={{fontWeight:'bold'}}>  3. Target NDA Direct Course </Text>{"\n"}

        The students who are interested to join Apex Careers for Direct NDA Coaching batch coducted for a duration of 4 months can enroll in this course. The classes will be conducted for 3 hours per day for 6 days in a week.      
     {"\n"}

        <Text style={{fontWeight:'bold'}}>  4. NDA Crash Course </Text>{"\n"}
        Students who have less time on their hands but still wish to join NDA can join our 1 month crash course. There will no off days in this course (except national holidays). The classes will be conducted for 7 hours per day, 7 days a week.
        </Text>
      </Card.Content>
      </Card>
      <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
         What is the fee structure for all these courses?
        </Text>
        <Text style={styles.Info}>
        The fee structure for the course is as follows: {"\n"}
        XI+XII+NDA <Text style={{color:'red'}}>1,95,000/-</Text>{"\n"}
        XII+NDA<Text style={{color:'red'}}> 1,50,000/-</Text>{"\n"}
        Target NDA Direct Course<Text style={{color:'red'}}> 35,000/-</Text>{"\n"}
        NDA Crash Course<Text style={{color:'red'}}> 25000/-</Text>{"\n"}
         (Please note that the aforementioned fees are inclusive of all taxes)
        </Text>
      </Card.Content>
</Card>
    
<Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
          Can girls apply for the course too?
        </Text>
        <Text style={styles.Info}>
       No. As NDA is open for male candidates only,the courses at Apex are available only for male candidates.
        </Text>
      </Card.Content></Card>
      <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
         WIll there be a test series module along with the course?
        </Text>
        <Text style={styles.Info}>
       Yes. There will be <Text style={{color:'red'}}>2</Text> half test and <Text style={{color:'red'}}>2 </Text> full test which will be conducted as a part of the course.
        </Text>
      </Card.Content></Card>

     

      


    </View>
    
    </React.Fragment>)} 


    


  
}

  render() {
let course= this.props.route.params.course

    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
         

        

          {this.renderInfo(course)}

         
        </ScrollView>
      </View>
    );
  }
}



