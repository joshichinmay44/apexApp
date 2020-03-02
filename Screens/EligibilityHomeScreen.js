import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Appbar, Button, Card, Title} from 'react-native-paper';
import styles from '../style/Style';
export default class EligibilityHomeScreen extends Component {


    static navigationOptions = {
        headerShown: false
    }
    EligibilityAirForce = () => {
      this.props.navigation.navigate('EligibilityFormAirForce')

    }
    EligibilityNavy = () => {
      this.props.navigation.navigate('EligibilityFormNavy')

    }
    EligibilityArmy = () => {
      this.props.navigation.navigate('EligibilityFormArmy')

    }

  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Eligibility" />
          </Appbar.Header>
          <TouchableOpacity onPress={this.EligibilityArmy}>
            <Card style={styles.cardContainer}>
              <Card.Title
                title="Indian Army"
                left={() => <Avatar.Icon size={30} icon="bullet" />}
              />
              <Card.Cover source={require('../images/Indian-Army.jpg')} />
              {/* <Card.Content>
           <Title>Indian Army</Title>
         </Card.Content> */}
              {/* <Card.Actions>
          <Button mode='outlined'>Check</Button>
        </Card.Actions> */}
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.EligibilityAirForce}>
            <Card style={styles.cardContainer}>
              <Card.Title
                title="Indian Air Force"
                left={() => <Avatar.Icon size={30} icon="airplane" />}
              />
              <Card.Cover source={require('../images/IndianAirForce.jpg')} />
              {/* <Card.Content>
           <Title>Indian Air Force</Title>
         </Card.Content> */}
              {/* <Card.Actions>
          <Button mode='outlined'>Check</Button>
        </Card.Actions> */}
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.EligibilityNavy}>
            <Card style={styles.cardContainer}>
              <Card.Title
                title="Indian Navy"
                left={() => <Avatar.Icon size={30} icon="ship-wheel" />}
              />
              <Card.Cover
                theme="...image.props"
                source={require('../images/Indian-Navy.png')}
              />
              {/* <Card.Content>
           <Title>Indian Navy</Title>
         </Card.Content> */}
              {/* <Card.Actions>
          <Button mode='outlined'>Check</Button>
        </Card.Actions> */}
            </Card>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
