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
  TextInput,
} from 'react-native-paper';
import * as firebase from 'firebase';
import ShowMore from 'react-native-show-more-button';
import styles from '../style/Style';
export default class WriteBlog extends Component {
  state = {
    blogTitle: '',
    blogContent: [],
    username: this.props.route.params.username,

    blogList: [],
    blogKeys: [],
    data: '',
  };
  componentDidMount() {
    this.state.data = firebase.database().ref('Blogs');
    //console.log("data: "+ this.state.data)
    this.state.data.on('value', datasnap => {
      if (datasnap.val()) {
        this.setState({blogList: Object.values(datasnap.val())}, function() {
          console.log('blogs: ' + this.state.blogList);
        });

        this.setState({blogKeys: Object.keys(datasnap.val())}, function() {
          console.log('Keys: ' + this.state.blogKeys);
        });
      } else {
        this.setState({blogList: ''}, function() {
          console.log('bloglist: ' + this.state.blogList);
        });
      }
    });
  }

  back = () => {
    this.props.navigation.goBack();
  };

  addBlog = () => {
    //let course= this.state.course

    /*  const data = firebase.database().ref("Blogs/") */
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let title = this.state.blogTitle;
    let content = this.state.blogContent;
    let username = this.state.username;

    if (title == '' || content == '') {
      alert('Your blog is empty');
    } else {
      this.state.data.push().set({
        Username: username,
        Date: date + '/' + month + '/' + year,
        Title: title,
        Content: content,
      });

      alert('Blog posted successfully!')
    }
  };

  renderBlogList = () => {
    let length = this.state.blogList.length;
    //console.log('length: '+length)
    let renderer = [];
    if (length > 0) {
      for (let i = length - 1, j = 0; i >= 0; i--, j++) {
        renderer[j] = (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('BlogContent', {
                blogContent: this.state.blogList[i].Content,
                blogTitle: this.state.blogList[i].Title,
                author: this.state.blogList[i].Username,
                date: this.state.blogList[i].Date,
              })
            }>
            <Card id={i} style={{margin: 20, backgroundColor: '#E9E9E9'}}>
              <ShowMore>
                <Card.Title
                  title={this.state.blogList[i].Title}
                  right={props => (
                    <TouchableOpacity onPress={() => this.deleteBlog(i)}>
                      <Avatar.Icon
                        {...props}
                        style={{marginRight: '5%'}}
                        icon="delete"
                      />
                    </TouchableOpacity>
                  )}
                />
                <Text style={styles.Info}>
                  {this.state.blogList[i].Username}
                </Text>

                <Text style={styles.Info}>{this.state.blogList[i].Date}</Text>
                <Text style={{fontSize: 17, margin: '5%'}}>
                  Touch to read more!
                </Text>
              </ShowMore>
            </Card>
          </TouchableOpacity>
        );
      }
    } else {
      renderer = (
        <Card>
          <Text style={{fontSize: 15, margin: '3%'}}>
            No available blogs...Start Writing...
          </Text>
        </Card>
      );
    }
    return renderer;
  };

  deleteBlog = i => {
    this.state.data.child(this.state.blogKeys[i]).remove();
    alert('Blog post deleted successfully!')
  };

  render() {
    return (
      <View style={styles.Container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={this.back} />
          <Appbar.Content title="Write blogs" />
        </Appbar.Header>
        <ScrollView style={styles.Scroll}>
          <View style={styles.Body}>
            <View>
              <View>
                <TextInput
                  label="Title"
                  mode="outlined"
                  style={styles.mytextinput}
                  onChangeText={blogTitle => this.setState({blogTitle})}
                  onFocus={() =>
                    this.setState({
                      blogTitle: '',
                    })
                  }
                  value={this.state.blogTitle}
                />
              </View>
              <View>
                <TextInput
                  label="Start writing"
                  mode="outlined"
                  style={styles.mytextinput}
                  onChangeText={blogContent => this.setState({blogContent})}
                  onFocus={() =>
                    this.setState({
                      blogContent: '',
                    })
                  }
                  value={this.state.blogContent}
                />
              </View>
              <View style={styles.button}>
                <Button mode="contained" onPress={this.addBlog}>
                  Share
                </Button>
              </View>
            </View>

            {this.renderBlogList()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
