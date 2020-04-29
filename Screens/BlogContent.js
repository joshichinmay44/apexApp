import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import {Card, Appbar} from 'react-native-paper'
import styles from '../style/Style'
export default class BlogContent extends Component {
    BlogContent=this.props.route.params.blogContent
    BlogTitle=this.props.route.params.blogTitle
    Author=this.props.route.params.author
    Date=this.props.route.params.date

    back=()=>{
        this.props.navigation.goBack();
    }

    
    render() {
        return (
            <View style={styles.Container}>
                 <Appbar.Header>
          <Appbar.BackAction onPress={this.back} />
          <Appbar.Content title="Blogs"  />
        </Appbar.Header>
        <ScrollView style={styles.Scroll}>
                <Card style={styles.cardContainer}>
            <Card.Title title={this.BlogTitle} style={styles.Title} subtitle={this.Author}/>
            <Card.Content>
                <Text style={styles.Info}>
                    {this.BlogContent}
                </Text>
            </Card.Content>

                </Card>
                </ScrollView>
            </View>
        )
    }
}
