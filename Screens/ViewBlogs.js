import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Appbar, Text, Card, Avatar} from 'react-native-paper';
import styles from '../style/Style';
import ShowMore from 'react-native-show-more-button';
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
        <Card style={{margin: 20, backgroundColor: '#E9E9E9'}}>
          <ShowMore>
            <TouchableOpacity>
              <Avatar.Icon size={30} icon="book-open" />
            </TouchableOpacity>
            <Card.Title
              style={{marginHorizontal: '20%'}}
              title={data[obj].Title}
            />

            <Text style={{fontSize: 15, margin: '2%'}}>{data[obj].Date}</Text>

            <Text style={{fontSize: 15, margin: '2%'}}>
              {data[obj].Username}
            </Text>
            <Text style={{fontSize: 15, margin: '2%'}}>
              {data[obj].Content}
            </Text>
          </ShowMore>
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
