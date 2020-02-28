import React from 'react';
import { Appbar,Button, TextInput,  } from 'react-native-paper';
import { View, 
    Text, 
    ScrollView, 
   
    StyleSheet, 
    TouchableOpacity,
    Image,
    SafeAreaView,
     } from 'react-native';



export default class Teacherlogin extends React.Component {
    static navigationOptions = {
        headerShown: false
    }
    state = {
        username: '',
        password: ''
      };

      backToHome = () => {
        this.props.navigation.navigate('Home')

      }
      teacherProfile = () => {
        this.props.navigation.navigate('Stack',{screen:'TeacherProfile'})

      }
  render() {
    return (
        
        <View style={styles.Container}>
           
           <Appbar.Header>
        <Appbar.BackAction
          onPress={this.backToHome}
        />
        <Appbar.Content
          title="Teacher Login"
        />
         <Appbar.Action icon="home" onPress={this.backToHome} />
      </Appbar.Header>
            <ScrollView style={styles.scrollView}>
          <View style={styles.body}>
           
            <View style={styles.imageview}>
                <Image
                style={styles.userimage}
                source={require('../images/user3.png')}
                />
            </View>

            <View style={styles.textinputview}>
                <TextInput
               label='Username '
               mode='outlined'
                value={this.state.text}
                style={styles.mytextinput}
                onChangeText={username => this.setState({ username })}
                />

                <TextInput
                label='Password'
                mode='outlined'
                value={this.state.text}
                secureTextEntry={true} 
                style={styles.mytextinput}
                onChangeText={password => this.setState({ password })}
                />
              
              <Button  mode="contained" onPress={this.teacherProfile}>     Login    </Button>

                    </View> 
                   
    </View> 
            </ScrollView>
        </View>   
     
    );
  }
}

const styles=StyleSheet.create({
    Container:{
      height:'100%',
      backgroundColor:'#fdfefe',
    
    },
    Scroll:{
        backgroundColor:'#fdfefe',
        height:'100%',
    
    },
    header:{
        height:'15%',
        backgroundColor:'#D6E7ED',
        width:'100%',
        borderColor:'#000000',
       flexDirection:'row',
        borderWidth:2,
       // marginBottom:'5%',
        //flex:1
    },
    backlogo:{
        
        marginTop:"85%",
        marginLeft:'1%',
       
    },
    headerText:{
        fontStyle:'normal',
        fontSize:30,
        fontFamily:'Comic Sans MS',
        marginTop:'5%',
        marginLeft:'10%',
    },
    homeLogo:{
        
        marginTop:"10%",
        marginLeft:'25%',
    },
  
    body:{
        backgroundColor:'white',
        
        flexDirection:'column',
        height:'100%',
        paddingBottom:'50%',
    },

    textinputview:{
        alignItems:'center',
        height:'50%',
        padding : '5%',
    },
   
    mytextinput:{
        width: '100%',
        margin: '3%',
    },
    myopacity:{
        width:234,
        height:50,
        borderWidth:2,
        backgroundColor:'#A3C9F7',
        borderColor:'#8D99E8',
        alignItems:'center',
        margin:'3%'
    },
    opacityText:{
        fontSize:20,
        fontFamily:'georgia',
        margin:8,
    },
    
    userimage:{
        marginTop:'10%',
        marginLeft:'25%',
        //margin:'10%',
        height:'70%',
        width:'50%',
  
    },


  
  });