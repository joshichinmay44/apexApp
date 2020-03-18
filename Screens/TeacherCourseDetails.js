import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class TeacherCourseDetails extends Component {
   state={
       studentList: this.props.route.params.studentList
   }
    render() {
        let course=this.props.route.params.course
      
        Object.entries(this.state.studentList).map(([key, value]) => {
          
            console.log(value)
          });
        
        
        const studentList=this.state.studentList
        return (
            <View>
                <Text>{course} </Text>
                
                   
                    
              
            </View>
        ) 
    }
}
