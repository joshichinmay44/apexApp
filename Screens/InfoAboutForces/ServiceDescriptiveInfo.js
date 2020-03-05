import React, { Component } from 'react'
import { ScrollView,Text, View, Image } from 'react-native'
import {Appbar, Card, Paragraph} from 'react-native-paper'
import styles from '../../style/Style'
export default class ServiceDescriptiveInfo extends Component {

    renderDescriptiveInfo=(variable)=>{
        if(variable=='History of the Indian Army'){
            return(
                <Card style={styles.cardContainer}>
                  
                   <Card.Cover source={{uri:'https://s01.sgp1.digitaloceanspaces.com/inline/836391-yzxfopfsep-1493921131.jpeg'}} />
                       <Card.Content>
                      <Paragraph>
                        <Text style={styles.Info}>
                        The roots of the modern Indian army are traced to the forces employed by the English (later British) East India Company, chartered in 1600, and the French East India Company (Compagnie des Indes Orientales), established in 1664. The British East India Company arrived in India in 1607. It formed armed troops of men to act as factory guards in Madras (now Chennai) and Bombay (now Mumbai) in 1662. By 1708, the three presidencies of Bengal (Calcutta), Madras, and Bombay were formed, and each established its own armed forces. British units were divided into three armies corresponding to the company's centers of Bengal (headquartered at Fort William in Calcutta), Bombay (or Mumbai in the Marathi language), and Madras (headquartered at Fort Saint George). The French, headquartered at Pondicherry (Puduchcheri) by the 1670s, were the first to raise Indian companies and use them in conjunction with European soldiers. The war between France and England in 1744 forced a reorganization of the East India Company's forces, and artillery and an ordnance service were introduced. Subsequently, in the 1740s, the British started to organize and train Indian units.
                        </Text>

                      </Paragraph>
                      <Paragraph>
                        <Text style={styles.Info}>
                       
                        </Text>

                      </Paragraph>


                           </Card.Content> 
                    
                  </Card>  
            )
        }

        else if(variable=='Post Independence Wars')
        {
            return(
                <React.Fragment>
                <Card style={styles.cardContainer}>
                  
                   <Card.Cover source={{uri:'https://i0.wp.com/images.mapsofindia.com/my-india/2017/07/major-wars-between-india-and-pak.jpg?resize=665%2C348&ssl=1'}} />
                <Card.Content>
                 <Text style={styles.Info}>
                     <Text style={{fontWeight:'bold'}}>
                     The war of 1947/48-
                         </Text> 
                         It was fought between the arch rivals, India and Pakistan over the princely state of Jammu and Kashmir from 1947 to 1948.{"\n"}
                        Result: India emerged as the clear winner of the war as she had successfully defended the oppressiveness of the Pakistani Army and gained control over two-third of the Kashmir including, Kashmir Valley, Jammu and Laddakh.
                        {"\n"}
                        <Text style={{fontWeight:'bold'}}>
                     Sino-Indian War of 1962-
                         </Text> 
                         The conflict started when China refused to accept the McMohan Line and Line of Actual Control which was issued during the independence and separation of India and Pakistan and claimed Aksai Chin, Sikkim and Arunachal Pradesh as a part of extended Tibet region 
                {"\n"}   Result: Chinese victory. Boundary changes. China captures Aksai Chin.
                <Text style={{fontWeight:'bold'}}>
                   {"\n"} Indo-Pak War of 1965-
                         </Text> 
                         The Sino-India war began on October 20, 1962 when the People's Liberation Army of China invaded Ladakh and Arunachal Pradesh (then known as the North East Frontier Agency) in a synchronised move
                        {"\n"} Result: Inconclusive. Ceasefire. No boundary changes.
                         <Text style={{fontWeight:'bold'}}>
                   {"\n"} Indo-Pak War of 1971-
                         </Text> 
                         The Indo-Pakistani War of 1971 was the direct military confrontation between India and Pakistan during the Bangladesh Liberation War in 1971. Indian, Bangladeshi and international sources consider the beginning of the war to have been Operation Chengiz Khan when Pakistan launched pre-emptive air strikes on 11 Indian airbases on 3 December 1971
                {"\n"}  Result: Indian victory. No boundary changes.

                <Text style={{fontWeight:'bold'}}>
                   {"\n"} Indo-Pak War of 1999 (Kargil)-
                         </Text> 
                         The Kargil War, also known as the Kargil conflict, was an armed conflict between India and Pakistan that took place between May and July 1999 in the Kargil district of Kashmir
                {"\n"}  Result: Indian victory. No boundary changes. Pakistan was pushed back.
                 </Text>

                 

                </Card.Content>
                   </Card>
                   </React.Fragment>
                   ) 
        }


        else if(variable=='Arms Structure Ranks'){
            return(

                <React.Fragment>
                    <View style={{marginLeft:'30%',flexDirection:'row'}}>
                        <Card.Cover source={{uri:'https://onepostdaily.files.wordpress.com/2009/11/lieu1.jpg'}} />
                      <View style={{marginLeft:30,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Lieutenant</Text>
                      </View>
                    </View>
                    <View style={{marginLeft:'30%',flexDirection:'row'}}>
                        <Card.Cover source={{uri:'https://onepostdaily.files.wordpress.com/2009/11/cap.jpg'}} />
                      <View style={{marginLeft:30,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Captain</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:'30%',flexDirection:'row'}}>
                        <Card.Cover source={{uri:'https://onepostdaily.files.wordpress.com/2009/11/major.jpg'}} />
                      <View style={{marginLeft:30,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Major</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:'30%',flexDirection:'row'}}>
                        <Card.Cover source={{uri:'https://onepostdaily.files.wordpress.com/2009/11/lieucol.jpg'}} />
                      <View style={{marginLeft:30,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Lieutenant Colonel</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:'30%',flexDirection:'row'}}>
                        <Card.Cover source={{uri:'https://onepostdaily.files.wordpress.com/2009/11/col1.jpg'}} />
                      <View style={{marginLeft:30,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Colonel</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:'30%',flexDirection:'row'}}>
                        <Card.Cover source={{uri:'https://onepostdaily.files.wordpress.com/2009/11/brig.jpg'}} />
                      <View style={{marginLeft:30,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Brigadier</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:'30%',flexDirection:'row'}}>
                        <Card.Cover source={{uri:'https://onepostdaily.files.wordpress.com/2009/11/majgen1.jpg'}} />
                      <View style={{marginLeft:30,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Major General</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:'30%',flexDirection:'row'}}>
                        <Card.Cover source={{uri:'https://onepostdaily.files.wordpress.com/2009/11/lieugen.jpg'}} />
                      <View style={{marginLeft:30,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Lieutenant General</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:'30%',flexDirection:'row'}}>
                        <Card.Cover source={{uri:'https://onepostdaily.files.wordpress.com/2009/11/general1.jpg'}} />
                      <View style={{marginLeft:30,alignSelf:'center'}}>  
                      <Text style={styles.Title}>General</Text>
                      </View>
                    </View>


                </React.Fragment>
            )
        }


        else if(variable=='Our Heroes'){
return(
    <React.Fragment >
      
        <Card.Cover style={styles.cardContainer} source={{uri:'data:image/jpeg;base64,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'}}/>
       
    </React.Fragment>
)

        }
    }

    back=()=>{
        this.props.navigation.navigate('AboutTheForces')
    }

    backToHome=()=>{
        this.props.navigation.navigate('Home')
    }

    render() {
        let variable=this.props.route.params.variable
        return (
            <React.Fragment>
            <Appbar.Header style={styles.Header}>
            <Appbar.BackAction onPress={this.back} />
            <Appbar.Content title={variable} />
            <Appbar.Action icon="home" onPress={this.backToHome} />
          </Appbar.Header>
          <ScrollView style={styles.Scroll}>
              {this.renderDescriptiveInfo(variable)}
          </ScrollView>
          </React.Fragment>
        )
    }
}
