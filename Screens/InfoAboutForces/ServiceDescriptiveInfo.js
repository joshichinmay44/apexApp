import React, { Component } from 'react'
import { ScrollView,Text, View, Image } from 'react-native'
import {Appbar, Card, Paragraph} from 'react-native-paper'
import styles from '../../style/Style'
export default class ServiceDescriptiveInfo extends Component {

    renderDescriptiveInfo=(variable)=>{
      console.log(variable)
        if(variable=='History of the Indian Army'){
            return(
                <Card style={styles.cardContainer}>
                  
                   <Card.Cover source={require('../../images/ArmyHistory.jpeg')} />
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
                  
                   <Card.Cover source={require('../../images/ArmyWarsDescription.jpg')} />
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


        else if(variable=='Indian Army Ranks'){
            return(

                <React.Fragment>
                    <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                        <Card.Cover source={require('../../images/Ranks/lt.jpg')} />
                      <View style={{marginLeft:20,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Lieutenant</Text>
                      </View>
                    </View>
                    <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                        <Card.Cover source={require('../../images/Ranks/captain.jpg')} />
                      <View style={{marginLeft:20,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Captain</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                        <Card.Cover source={require('../../images/Ranks/major.jpg')} />
                      <View style={{marginLeft:20,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Major</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                        <Card.Cover source={require('../../images/Ranks/ltcol.jpg')} />
                      <View style={{marginLeft:20,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Lieutenant Colonel</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                        <Card.Cover source={require('../../images/Ranks/col.jpg')} />
                      <View style={{marginLeft:20,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Colonel</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                        <Card.Cover source={require('../../images/Ranks/brig.jpg')} />
                      <View style={{marginLeft:20,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Brigadier</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                        <Card.Cover source={require('../../images/Ranks/majgen.jpg')} />
                      <View style={{marginLeft:20,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Major General</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                        <Card.Cover source={require('../../images/Ranks/ltgen.jpg')} />
                      <View style={{marginLeft:20,alignSelf:'center'}}>  
                      <Text style={styles.Title}>Lieutenant General</Text>
                      </View>
                    </View>

                    <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                        <Card.Cover source={require('../../images/Ranks/general.jpg')} />
                      <View style={{marginLeft:20,alignSelf:'center'}}>  
                      <Text style={styles.Title}>General</Text>
                      </View>
                    </View>


                </React.Fragment>
            )
        }


        else if(variable=='Our Heroes'){
return(
    <React.Fragment >
      
        <Card.Cover style={styles.cardContainer} source={require('../../images/PVC.jpg')}/>
       
    </React.Fragment>
)

        }


       else if(variable=='History of the Indian Air Force') {
           return(
        <React.Fragment>
             <Card style={styles.cardContainer}>
                  
                  <Card.Cover source={require('../../images/airhist.jpg')} />
                      <Card.Content>
                     <Paragraph>
                       <Text style={styles.Info}>
                       The Indian Air Force was officially established on 8 October 1932. Its first ac flight came into being on 01 Apr 1933. It possessed a strength of six RAF-trained officers and 19 Havai Sepoys (literally, air soldiers). The aircraft inventory comprised of four Westland Wapiti IIA army co-operation biplanes at Drigh Road as the "A" Flight nucleus of the planned No.1 (Army Co- operation) Squadron.
                       </Text>

                     </Paragraph>
                     <Paragraph>
                       <Text style={styles.Info}>
                      
                       </Text>

                     </Paragraph>


                          </Card.Content> 
                   
                 </Card>  
        </React.Fragment>)

       }

       else if(variable=='Daredevil Missions')
       {
           return(
               <React.Fragment>
            <Card style={styles.cardContainer}>
                  
            <Card.Cover source={require('../../images/afmissions.jpg')} />
            </Card>

            <Card style={styles.cardContainer}>
                <Text style={styles.Title}>Air Bridge to Srinagar (OP 1948)</Text>
                <Text style={styles.Info}>
                {"\n"} The airstrips at Jammu and Srinagar were made for the small light personal aircraft of the Maharaja and were short and unpaved. There were no navigational aids, landing aids, fire fighting facilities or proper refuelling facilities available either at Jammu or at Srinagar. The high mountain ranges ofHimalayas were often covered with clouds and had to be negotiated by the Dakota aircraft with limited ceiling and negligible navigational aids. Each take off and landing would raise a cloud of dust from the unpaved airstrip and reduce the visibility further. The airlift requirements demanded landing / take off of aircraft in quick succession leaving hardly any time for dust to settle.
                </Text>
            </Card>
            <Card style={styles.cardContainer}>
                <Text style={styles.Title}>Air Lift of an Infantry Brigade (OP 1948)</Text>
                <Text style={styles.Info}>
                {"\n"} An Infantry Brigade was to be airlifted to Srinagar. The Dakotas did the transportation while Tempests, Spitfires and even Harvards provided the necessary Close Air Support to the Army. Even help of Airlines, their pilots and ground crew was requisitioned and they rose to the occasion and did a magnificent job. Air Cmde Mehar Singh, AOC Operational Group, with his professional acumen accomplished the uphill task in record time of five days. Lord Mountbatten acknowledged this achievement of RIAF saying that in all his experience of South East Asia Command and Over the Hump Flights to China, he had never known such an airlift being affected at such a short notice.
                </Text>
            </Card>

    
            <Card style={styles.cardContainer}>
                <Text style={styles.Title}>The First Dog Fight (OP 1965)</Text>
                <Text style={styles.Info}>
                {"\n"}  On 03 Sep 1965, IAF Claimed its First Air to Air Kill. Sqn Ldr Trevor Keelor shot down a Pakistani Sabre Jet F-86F aircraft in the Chhamb sector flying in his light weight Gnat fighter aircraft. Four Gnats led by Sqn Ldr Trevor Keelor, flying in a tactical formation at low level (barely 100 feet above ground), were heading towards the combat zone in chhamb sector. As the formation was crossing Akhnur Bridge, the controlling RADAR reported enemy aerial activity. On receipt of the information, the Gnats zoomed up to 30,000 ft in less than 90 sec and scanned the area for intruders. Sqn Ldr Keelor picked up a pair of Pakistani Sabre Jet F-86F, he maneuvered his formation to get behind the enemy aircraft. As the turn was completed, Keelor was in a perfect position to close in and destroy the target. He opened fire with his twin 30 mm Canon guns from a distance of 450 yards, closing in, to 200 yrds. In an instant the sabre’s right wing was disintegrated and the enemy aircraft fell off the sky. The IAF claimed its first aerial kill and Sqn Ldr Keelor became the first Indian Pilot to claim a jet in air-to-air combat.
                </Text>
            </Card>
          
           
            </React.Fragment>
           )
       }

       else if(variable=='Air Force Ranks'){
        return(

            <React.Fragment>
                <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                    <Card.Cover source={require('../../images/Ranks/fo.png')} />
                  <View style={{marginLeft:20,alignSelf:'center'}}>  
                  <Text style={styles.Title}>Flying Officer</Text>
                  </View>
                </View>
                <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                    <Card.Cover source={require('../../images/Ranks/flt.png')} />
                  <View style={{marginLeft:20,alignSelf:'center'}}>  
                  <Text style={styles.Title}>Flight Lieutenant</Text>
                  </View>
                </View>

                <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                    <Card.Cover source={require('../../images/Ranks/sqnldr.png')} />
                  <View style={{marginLeft:20,alignSelf:'center'}}>  
                  <Text style={styles.Title}>Squadron Leader</Text>
                  </View>
                </View>

                <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                    <Card.Cover source={require('../../images/AirComm.png')} />
                  <View style={{marginLeft:20,alignSelf:'center'}}>  
                  <Text style={styles.Title}>Wing Commander</Text>
                  </View>
                </View>

                <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                    <Card.Cover source={require('../../images/Ranks/grcpt.png')} />
                  <View style={{marginLeft:20,alignSelf:'center'}}>  
                  <Text style={styles.Title}>Group Captain</Text>
                  </View>
                </View>

                <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                    <Card.Cover source={require('../../images/AirComm.png')} />
                  <View style={{marginLeft:20,alignSelf:'center'}}>  
                  <Text style={styles.Title}>Air Commodore</Text>
                  </View>
                </View>

                

                <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                    <Card.Cover source={require('../../images/AVM.png')} />
                  <View style={{marginLeft:30,alignSelf:'center'}}>  
                  <Text style={styles.Title}>Air Vice Marshal</Text>
                  </View>
                </View>

                <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                    <Card.Cover source={require('../../images/AM.png')} />
                  <View style={{marginLeft:30,alignSelf:'center'}}>  
                  <Text style={styles.Title}>Air Marshal</Text>
                  </View>
                </View>

                <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                    <Card.Cover source={require('../../images/ACM.png')} />
                  <View style={{marginLeft:30,alignSelf:'center'}}>  
                  <Text style={styles.Title}>Air Chief Marshal</Text>
                  </View>
                </View>


            </React.Fragment>
        )
       }

      else if(variable=='Air Warriors'){
  return(      <React.Fragment><Card style={styles.cardContainer}>
            <Text style={styles.Title}>F.O. Nirmal Jeet Singh Sekhon (PVC)</Text>      
        <Card.Cover source={require('../../images/NirmalSekho.png')} />
        </Card>
        <Text style={styles.Title}>Wing Commander Abhinandan Vardhaman (AC)</Text>
<Card.Cover source={require('../../images/abhinandan.jpg')}/>
        </React.Fragment>
   ) }

   else if(variable=='History of the Indian Navy'){
       return(
            <React.Fragment>
                <Card style={styles.cardContainer}>
                    <Card.Cover source={require('../../images/navyhist.jpg')}/>
                    <Text style={styles.Info}>
                    Dominant powers in present-day India have possessed navies for many centuries. Pre-colonial dynasties such as the Cholas used naval power to extend Indian trade and influence overseas, particularly to Southeast Asia. The Marakkar Navy under Zamorins during 15th century and the Maratha Navy of the 17th and 18th centuries fought against British and Portuguese colonisers. The British East India Company organised its own navy, later known as the Bombay Marine. With the establishment of the British Raj during the 19th century the naval force became "His Majesty's Indian Navy", then "Her Majesty's Indian Marine", and finally the "Royal Indian Marine". This navy transported large numbers of Indian troops overseas during World War I, and – as the Royal Indian Navy – took part in combat and protected communications during World War II. When India became independent in 1947 part of the Royal Indian Navy was allotted to the new state of Pakistan; the remaining Indian force took the title of Indian Navy in 1950. The Indian Navy took part in the annexation of Goa in 1961, in wars with Pakistan in 1965 and 1971, and in more recent smaller-scale operations.
                    </Text>
                </Card>
            </React.Fragment>

       )
   }
   else if(variable=='Sea Warriors')
   {
     return(
      <React.Fragment><Card style={styles.cardContainer}>
      <Text style={styles.Title}>Captain Narendranath MUlla (AC)</Text>      
  <Card.Cover source={require('../../images/nm.jpg')} />
  </Card>
 
  </React.Fragment>
     )
   }
  else if(variable=='Indian Navy Ranks'){

        
    return(

        <React.Fragment>
            <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                <Card.Cover source={require('../../images/Ranks/sublt.png')} />
              <View style={{marginLeft:20,alignSelf:'center'}}>  
              <Text style={styles.Title}>Sub Lieutenant</Text>
              </View>
            </View>
            <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                <Card.Cover source={require('../../images/Ranks/lt.png')} />
              <View style={{marginLeft:20,alignSelf:'center'}}>  
              <Text style={styles.Title}>Lieutenant</Text>
              </View>
            </View>

            <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                <Card.Cover source={require('../../images/Ranks/ltcdr.png')} />
              <View style={{marginLeft:20,alignSelf:'center'}}>  
              <Text style={styles.Title}>Lieutenant Commander</Text>
              </View>
            </View>

            <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                <Card.Cover source={require('../../images/Ranks/cdr.png')} />
              <View style={{marginLeft:20,alignSelf:'center'}}>  
              <Text style={styles.Title}>Commander</Text>
              </View>
            </View>

            <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                <Card.Cover source={require('../../images/Ranks/cpt.png')} />
              <View style={{marginLeft:20,alignSelf:'center'}}>  
              <Text style={styles.Title}>Captain</Text>
              </View>
            </View>

            <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                <Card.Cover source={require('../../images/Ranks/comm.png')} />
              <View style={{marginLeft:20,alignSelf:'center'}}>  
              <Text style={styles.Title}>Commodore</Text>
              </View>
            </View>

            

            <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                <Card.Cover source={require('../../images/Ranks/rearadm.png')} />
              <View style={{marginLeft:30,alignSelf:'center'}}>  
              <Text style={styles.Title}>Rear Admiral</Text>
              </View>
            </View>

            <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                <Card.Cover source={require('../../images/Ranks/viceadm.png')} />
              <View style={{marginLeft:30,alignSelf:'center'}}>  
              <Text style={styles.Title}>Vice Admiral</Text>
              </View>
            </View>

            <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                <Card.Cover source={require('../../images/Ranks/adm.png')} />
              <View style={{marginLeft:30,alignSelf:'center'}}>  
              <Text style={styles.Title}>Admiral</Text>
              </View>
            </View>


        </React.Fragment>
    )

}

   else if(variable='Naval Missions'){
    
       return(
    <React.Fragment>
    <Card style={styles.cardContainer}>
          
    <Card.Cover source={require('../../images/navalmission.jpg')} />
    </Card>

    <Card style={styles.cardContainer}>
        <Text style={styles.Title}>Operation Raahat</Text>
        <Text style={styles.Info}>
        {"\n"} The operation was conducted by Indian Armed Forces in 2015 for the evacuation of people from war hit Yemen. INS Sumitra was deployed to evacuate people and INS Mumbai and INS Tarkash were sent to provide protection to the vessel. Not only Indian nationals, but foreigners were also evacuated from Yemen at the time of internal disturbance.
        </Text>
    </Card>
    <Card style={styles.cardContainer}>
        <Text style={styles.Title}>Operation Parakram</Text>
        <Text style={styles.Info}>
        {"\n"} It was a major standoff between India and Pakistan in 2002. The Indian Navy was also a part of it. In this operation 26 cadets under a Navy captain were from Indian Navy’s side and it was the first time in Indian Defense history when cadets were part of any operation.
        </Text>
    </Card>


    <Card style={styles.cardContainer}>
        <Text style={styles.Title}>Operation Trident</Text>
        <Text style={styles.Info}>
        {"\n"} It is the offensive operation of Indian Navy over Pakistan, when the Indian Navy attacked over the Karachi port of Pakistan in the 1971 Indo- Pak war. Indian Navy celebrated Navy day on 4 December to mark the victory of this operation where Indian Navy used anti-ship missiles for the first time and destroyed many ships of Pakistan without any loss on the Indian side.


        </Text>
    </Card>
    <Card style={styles.cardContainer}>
        <Text style={styles.Title}>Operation Talwar</Text>
        <Text style={styles.Info}>
        {"\n"}Operation Talwar was planned during Kargil war in 1999. Indian Navy prepared a blockade for the Pakistani boats near the Karachi port to stop the supply of oil and fuel. Indian Navy also threatened to cut the trade routes of the Pakistan and started patrolling in the Arabian Sea. Later Pakistan requested India about their shortage of fuel and respective steps were taken.


        </Text>
    </Card>

    <Card style={styles.cardContainer}>
        <Text style={styles.Title}>Operation Python</Text>
        <Text style={styles.Info}>
        {"\n"}It was followed after operation Tirdent in which Karachi port was attacked during Indo- pak war 1971. In this operation Indian Navy attacked the Pakistani ships at Karachi port managing to strike one ship of Pakistan without any loss to any of the Indian ship.


        </Text>
    </Card>

    
    <Card style={styles.cardContainer}>
        <Text style={styles.Title}>Operation Cactus</Text>
        <Text style={styles.Info}>
        {"\n"}The operation was conducted to pacify the situation in Maldives and Srilanka in 1988. It was conducted by the Armed Forces of India, where Indian Navy was also involved actively. INS Godavari and INS Betwa were involved in the operation at the Srilankan coast.


        </Text>
    </Card>
   
    </React.Fragment>

        ) }

        
  
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
