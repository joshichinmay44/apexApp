import React, { Component } from 'react'
import { Text, View } from 'react-native'
import  * as firebase from 'firebase'
export default class SuccesStoriesDescription extends Component {

    






    Success=(course)=>{

        /* if(course=='NDA')
        {
                       
        } */ 
    }
    render() {
       let course=this.props.route.params.course
        return (
            <View>
                <Text>{this.Success(course)}  </Text>
            </View>
        )
    }
}
