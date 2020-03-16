import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TeacherCourseDetails extends Component {
    
    render() {
        let course=this.props.route.params.course
        let coursesTeaching=this.props.route.params.coursesTeaching
        return (
            <View>
                <Text>{course} </Text>
            </View>
        )
    }
}
