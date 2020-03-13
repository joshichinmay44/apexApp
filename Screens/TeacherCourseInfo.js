import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TeacherCourseInfo extends Component {

    
    render() {
        let course=this.props.route.params.course
        return (
            <View>
                <Text> {course}</Text>
            </View>
        )
    }
}
