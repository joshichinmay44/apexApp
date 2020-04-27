import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from '../style/Style'
import {Appbar, Card } from 'react-native-paper'
export default class AboutApex extends Component {
    render() {
        return (
            <View style={styles.Container}>
                 <Appbar.Header>
          <Appbar.BackAction
            onPress={() =>     this.props.navigation.goBack()
            }
          />
          <Appbar.Content title="About Apex Careers" />
        </Appbar.Header>
        <ScrollView style={styles.Scroll}>
            <Card style={styles.cardContainer}>
                <Card.Content>
            <Text style={styles.Title}>
                Foundation and Early Years
            </Text>
            <Text style={styles.Info}>
            Raised on 03 January 2005 by Lt Col (Retd) Pradeep Brahmankar, Apex Careers formally got registered and commenced the training activities on 05 May 2005. The training activities are presently carried out at Mahatma Phule Museum Campus on Ghole Road, Shivajinagar in Pune.
            </Text>

</Card.Content>
            </Card>
            <Card style={styles.cardContainer}>
                <Card.Content>
            <Text style={styles.Title}>
                Training and more related information
            </Text>
            <Text style={styles.Info}>
            The Academy trains youth for competitive exams like NDA & NA Exam, CDS Exam conducted by the UPSC. The institute also caters to preparing young boys and girls for the AFCAT. The Institute’s forte has been SSB Interview Preparation Coaching. Apex Careers, Pune has a unique identity of being the best institute in the country in terms of success of its students. The Academy also prepares students for the entrance exam for admission to Services Preparatory Institute (SPI) Aurangabad. Apex Careers has also designed a two years coaching program for National Defence Academy aspirants. The youth after completion of their X Board Exams can undergo a Personality Development Capsule Course and then undergo coaching for XI Science, XII Science Board Exams (PCM Group), NDA & NA written Exam and SSB Interview preparation. The Academy also conducts crash courses for NDA & NA Exam, CDS Exam and AFCAT. The Academy also caters to Group Discussions and Personal Interview i.e. GD – PI classes.

The approach of the organization has been totally professional. The Academy has five to six officers on the panel who impart Services Selection Board i.e. SSB Interviews training and around 25 academic staff as visiting faculty to train for various competitive exams. The Institute has six full time staff to cater to various activities of the organization.
            </Text>

</Card.Content>
            </Card>

            <Card style={styles.cardContainer}>
                <Card.Content>
            <Text style={styles.Title}>
            Vast experience in the field of military entrance training
            </Text>
            <Text style={styles.Info}>
            Apex Careers has trained five batches of SPI Aurangabad for the SSB Interviews. The organization also had privilege of training one batch of Sainik School – Satara. The institute has also trained two batches of PCTC – Nashik for SSB Interviews. In a span of nine years, the institute has to its credit over 300 students cracking the SSB Interviews. Today, throughout the country, if one has to crack SSB Interview, the first name that comes to the mind of a youth is ‘APEX CAREERS’.
            </Text>

</Card.Content>
            </Card>



        </ScrollView>
            </View>
        )
    }
}
