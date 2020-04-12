import React, { Component } from 'react'
import { Text, View , ScrollView} from 'react-native'
import styles from '../style/Style'
import {Appbar, Card}  from 'react-native-paper'
export default class Faculty extends Component {
    render() {
        return (
            <View >
              <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Permanent Faculty" />
          </Appbar.Header>
<ScrollView style={styles.Scroll}>
<Card style={styles.cardContainer}>
    <View>
    <Text style={styles.detail}>
        Air Marshal (retd.) Bhushan Gokhale
          </Text>
    </View>
<Card.Cover source={require('../images/Faculty1.jpg')}/>
<Card.Content>
    <Text style={styles.Info}>
    Air Marshal Bhushan Nilkanth Gokhale, PVSM AVSM VM was commissioned into the Indian Air Force in June 1968 in fighter stream.  He has flown over 3500 hours on a variety of combat and trainer aircraft. The Air Marshal has seen active operations during the 1971 Indo-Pak war, on both Eastern and Western fronts.  He is a Qualified Flying Instructor and Fighter Combat Leader from the prestigious Tactics and Combat Development Establishment.
    </Text>
</Card.Content>
</Card>

<Card style={styles.cardContainer}>
    <View>
    <Text style={styles.detail}>
            Lt. Col. (retd) Pradeep Brahmankar
          </Text>
    </View>
<Card.Cover source={require('../images/apex_about.jpg')}/>
<Card.Content>
    <Text style={styles.Info}>
    A Metallurgical Engineering Graduate from the Govt. College of Engineering, Pune (COEP) of the 1976-80 batch. With a three and half year stint in private sector, Lt Col (Retd) Pradeep Brahmankar joined the Indian Military Academy - Dehradun in Feb 1984 and got commissioned on 15 Dec 1984 as ‘Lieutenant’ in the Corps of EME. The officer is from the 58th Technical Graduate Course (TGC) which passed out with 65 NDA / 75 REGULAR Course at Indian Military Academy i.e. IMA - Dehradun. Being a technical graduate, the officer got two years ante-date seniority.
    </Text>
</Card.Content>
</Card>
<Card>

</Card>
</ScrollView>

            </View>
        )
    }
}
