import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {Appbar, Text, Card} from 'react-native-paper';
import styles from '../style/Style';
import * as firebase from 'firebase';
export default class ViewBlogs extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    Blogs: [],
  };
  back = () => {
    this.props.navigation.navigate('StudentProfile');
  };
  componentDidMount() {
    const myitems = firebase.database().ref('Blogs/');
    myitems.on('value', datasnap => {
      if (datasnap.val()) {
        this.setState({Blogs: Object.values(datasnap.val())}, () => {
          console.log();
        });
      }
    });
  }
  renderBlogButton() {
    console.log(this.state.Blogs);
    const data = this.state.Blogs;
    const renderer = [];
    let i = 0;
    Object.keys(data).map((obj, i) => {
      renderer[i] = (
        <Card style={styles.cardContainer}>
          <Card.Title title={data[obj].Title} />
          <Card.Title subtitle={data[obj].Date} />
          <Card.Title subtitle={data[obj].Content} />
          <Card.Title subtitle={data[obj].Username} />
        </Card>
      );
      i++;
    });
    return renderer;
  }

  render() {
    return (
      <View style={styles.Container}>
        <ScrollView style={styles.Scroll}>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title="View Blogs" />
          </Appbar.Header>

          <View style={styles.Body}>{this.renderBlogButton()}</View>
        </ScrollView>
      </View>
    );
  }
}
