import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ProgressReport extends Component {
    
    render() {
        let student=this.props.route.params.studentList
    let course=this.props.route.params.course
    let Name=course.Name
    console.log(Name)
        return (
            <View>
                <Text>  {course} </Text>
            </View>
        )
    }
}
