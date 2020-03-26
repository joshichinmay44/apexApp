import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Appbar, TextInput } from 'react-native-paper'
import styles from '../style/Style'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ChatBot extends Component {
    state={
        message:[]
    }

renderChat=()=>{
<View style={styles.Body}>

</View>
}
    render() {
        return (
            <View style={styles.Container}>
                         <Appbar.Header>
                <Appbar.Action
                  icon="menu"
                  onPress={() => this.props.navigation.openDrawer()}
                />
                <Appbar.Content title="Apex Chat" />
              </Appbar.Header>
              <ScrollView style={styles.Scroll}>

             
             </ScrollView>
             <View style={{ flexDirection: 'row',
  borderBottomWidth: 1,
  borderColor: '#000',
  paddingBottom: 10,}} >
             <TextInput
    style={{flex:1}}
    autoCorrect={true}
      placeholder="Enter your message"
      onChangeText={message=>this.setState({
          message:message
      })}
     
    />
    <TouchableOpacity onPress={this.renderChat()}>
  <Icon
    name='share'
    color='#084d7b'
    size={30}
    
  />
  </TouchableOpacity>
 
 </View>

</View>
        )
    }
}
