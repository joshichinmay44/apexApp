import React, { Component } from 'react'
import { Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native'
import styles from '../style/Style'
import { Card, Appbar, Button } from 'react-native-paper'
export default class InfoEntries extends Component {


    renderTitle=(input)=>{
        return input
    }

    renderInfoEntry=(entry)=>{
        if(entry=='National Defence Academy')
        {
            return(
                <React.Fragment>
                 <View style={styles.Body}>
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
          What is NDA/NA?
        </Text>
        <Text style={styles.Info}>
        
   
        <Text style={{fontWeight:'bold'}}> The National Defence Academy </Text>(NDA) is the joint services academy of the Indian Armed Forces, where cadets of the three services, the Army, the Navy and the Air Force train together before they go on to respective service academy for further pre-commissioning training. NDA is located in Khadakwasla, Pune, Maharashtra. It is the <Text style={{fontWeight:'bold'}}> first tri-service academy</Text> in the world.{'\n'}
        <Text style={{fontWeight:'bold'}}>The Indian Naval Academy</Text> (INA or INA Ezhimala) is the initial officer training establishment of the Indian Navy and the Indian Coast Guard, located in Ezhimala, Kannur district, Kerala. Situated between Ezhimala hill and the Kavvayi backwaters, INA has a 7 kilometre beach front on the Arabian Sea. It conducts basic training for all officers inducted into the Indian Navy and Indian Coast Guard. It is the <Text style={{fontWeight:'bold'}}> largest naval academy in Asia.</Text>
        </Text>
      </Card.Content>
      </Card>

      <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
          How to join NDA/NA?
        </Text>
        <Text style={styles.Info}>
        
        <Text style={{fontWeight:'bold'}}>The Union Public Service Commission</Text> (UPSC) conducts the written exam twice every year.{'\n'} Results are declared within 2.5 months and subsequently, based on the aspirant's choice of arm, the shortlisted candidates are further subjected to an intensive 5-day Services Selection Board(SSB-Army), Naval Selection Board(NSB-Navy) or Air Force Selection Board(AFSB-Air Force) interviews,{'\n'}
         Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the UPSC and those whose names appear in the merit list join the respective academies.           
        </Text>
      </Card.Content>
      </Card>

      <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
          What is the syllabus for the examination?
        </Text>
        
        <Button style={styles.button}
    
                  onPress={() =>
                    Linking.openURL(
                      'https://www.successcds.net/pdf/NDA-syllabus-2018.pdf',
                    )
                  }> 
                 <Text style={styles.Info}> Click to download the syllabus!</Text>
                </Button>
      
      </Card.Content>
      </Card>

      <Card style={styles.cardContainer}>
      <Card.Content>
          <Text style={{fontWeight:'bold', fontStyle:'italic'}}> if you want to know more about the NDA/NA course conducted at Apex careers, click the following button! </Text>
            <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
                course:'NDA'
            })}></Button>
      </Card.Content>
      </Card>

      </View>
</React.Fragment>
            )
        }

        else if(entry=='10+2 TES (Army)')
        {
            return(
                <React.Fragment>
                 <View style={styles.Body}>
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
          What is 10+2 TES?
        </Text>
        <Text style={styles.Info}>
        
   
        <Text style={{fontWeight:'bold'}}> The 10+2 Technical Entry Scheme (Army) </Text> is one of the oldest entries of the Indian Army. It recruits aspirants who have passed their intermediate examinations with 60% or greater marks in Physics+Chemistry+Mathematics (PCM) group.{'\n'}
      {'\n'} The initial training is  conducted at OTA (Gaya) for one year following which the cadets are alloted military engineering colleges and engineering streams baszed on their overall performance in the 1st year.
        </Text>
      </Card.Content>
      </Card>

      <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
          How to apply for this entry?
        </Text>
        <Text style={styles.Info}>
        <Text style={{fontWeight:'bold'}}>The Indian Army</Text> releases notification twice every year and invites applications from candidates who have cleared their 10+2 examinations with more thaan 60% in the Physics, Chemistry, Mathematics (PCM) group.{'\n'} Click the following link to apply! {'\n'}
        <Text style={{color:'blue'}}  onPress={()=>Linking.openURL('https://joinindianarmy.nic.in/')}>https://joinindianarmy.nic.in/</Text> 
        </Text>
      </Card.Content>
      </Card>

      <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
                What is the selection process?
            </Text>
       <Text style={styles.Info}>
           Once shortlisted by the Indian Army, such candidates are called up for the Services Selection Board interviews. {'\n'}
           Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the Indian Army and those whose names appear in the merit list join OTA(Gaya) for further training.    
           </Text> 
       
      
      </Card.Content>
      </Card>

      <Card style={styles.cardContainer}>
      <Card.Content>
          <Text style={{fontWeight:'bold', fontStyle:'italic'}}> If you want to know more about the Services Selection Board interview course conducted at Apex careers, click the following button! </Text>
            <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
                course:'SSB'
            })}></Button>
      </Card.Content>
      </Card>

      </View>
</React.Fragment>
            )
        }

        else if(entry=='10+2 TES (Navy)')
        {
            return(
                <React.Fragment>
                 <View style={styles.Body}>
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
          What is 10+2 TES?
        </Text>
        <Text style={styles.Info}>
        
   
        <Text style={{fontWeight:'bold'}}> The 10+2 Technical Entry Scheme (Navy) </Text> is one of the oldest entries of the Indian Navy. It recruits aspirants who have passed their intermediate examinations with 60% or greater marks in Physics+Chemistry+Mathematics (PCM) group.{'\n'}
      {'\n'} The training is conducted at the Indian Naval Academy (INA), Ezhimullla for a duration of 4 years.
        </Text>
      </Card.Content>
      </Card>

      <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
          How to apply for this entry?
        </Text>
        <Text style={styles.Info}>
        <Text style={{fontWeight:'bold'}}>The Indian Navy</Text> releases notification twice every year and invites applications from candidates who have cleared their 10+2 examinations with more thaan 60% in the Physics, Chemistry, Mathematics (PCM) group.{'\n'} Click the following link to apply! {'\n'}
        <Text style={{color:'blue'}}  onPress={()=>Linking.openURL('https://www.joinindiannavy.gov.in/')}>https://www.joinindiannavy.gov.in/</Text> 
        </Text>
      </Card.Content>
      </Card>

      <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
                What is the selection process?
            </Text>
       <Text style={styles.Info}>
           Once shortlisted by the Indian Navy, such candidates are called up for the Services Selection Board interviews. {'\n'}
           Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the Indian Navy and those whose names appear in the merit list join the INA for further training.    
           </Text> 
       
      
      </Card.Content>
      </Card>

      <Card style={styles.cardContainer}>
      <Card.Content>
          <Text style={{fontWeight:'bold', fontStyle:'italic'}}> If you want to know more about the Services Selection Board interview course conducted at Apex careers, click the following button! </Text>
            <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
                course:'SSB'
            })}></Button>
      </Card.Content>
      </Card>

      </View>
</React.Fragment>
            )

            
        }

        else if(entry=='Combined Defence Services')
        {
            return(
                <React.Fragment>
                <View style={styles.Body}>
   <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is CDS?
       </Text>
       <Text style={styles.Info}>
       
  
       <Text style={{fontWeight:'bold'}}> The Combined Defence Services </Text> is the joint services entrance examination of the Indian Armed Forces{'\n'}
       The exam is conducted for the following academies:{'\n'}
       1. Indian Military Academy (IMA), Dehradun{'\n'}2. Indian Naval Academy (INA), Ezhhimulla{'\n'}3. Air Force Academy (AFA), Dandigul{'\n'}4. Officers Training Academy (OTA), Chennai
       </Text>
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         How to apply?
       </Text>
       <Text style={styles.Info}>
       
       <Text style={{fontWeight:'bold'}}>The Union Public Service Commission</Text> (UPSC) conducts the written exam twice every year.{'\n'} Results are declared within 2.5 months and subsequently, based on the aspirant's choice of arm, the shortlisted candidates are further subjected to an intensive 5-day Services Selection Board(SSB-Army), Naval Selection Board(NSB-Navy) or Air Force Selection Board(AFSB-Air Force) interviews,{'\n'}
        Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the UPSC and those whose names appear in the merit list join the respective academies.           
                For further details visit : <Text style={{color:'blue'}} onPress={()=>Linking.openURL('https://www.upsc.gov.in/')}>www.upsc.gov.in</Text>
       </Text>

     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is the syllabus for the examination?
       </Text>
       
       <Button style={styles.button}
   
                 onPress={() =>
                   Linking.openURL(
                     'https://www.upsc.gov.in/sites/default/files/Notice-CDSI2020-Engl-Final.pdf',
                   )
                 }> 
                <Text style={styles.Info}> Click to download the syllabus!</Text>
               </Button>
     
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
         <Text style={{fontWeight:'bold', fontStyle:'italic'}}> If you want to know more about the CDS course conducted at Apex careers, click the following button! </Text>
           <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
               course:'CDS'
           })}></Button>
     </Card.Content>
     </Card>

     </View>
</React.Fragment>
            )
        }

        else if(entry=='AFCAT')
        {
            return(
                <React.Fragment>
                <View style={styles.Body}>
   <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is AFCAT?
       </Text>
       <Text style={styles.Info}>
       
  
       <Text style={{fontWeight:'bold'}}> The Air Force Common Aptitude Test </Text>(AFCAT) is a written examination conducted by the Indian Air Force for recruiting young, dynamic candidates in its flying, administrative and meteorological branches{'\n'}
     
       </Text>
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         How to apply?
       </Text>
       <Text style={styles.Info}>
       
       <Text style={{fontWeight:'bold'}}>The Indian Air Force</Text> (IAF) conducts the written exam twice every year.{'\n'} Results are declared within 1 month and subsequently, based on the aspirant's choice of arm, the shortlisted candidates are further subjected to an intensive 5-day Air Force Selection Board(AFSB-Air Force) interview.{'\n'}
        Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the IAF and those whose names appear in the merit list join the Air Force Academy (AFA), Dandigul.           
                For further details visit : <Text style={{color:'blue'}} onPress={()=>Linking.openURL('https://afcat.cdac.in/AFCAT/')}>https://afcat.cdac.in/AFCAT/</Text>
       </Text>

     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is the syllabus for the examination?
       </Text>
       
       <Button style={styles.button}
   
                 onPress={() =>
                   Linking.openURL(
                     'http://careerairforce.nic.in/showfile.asp?link_temp_id=145&lid=77',
                   )
                 }> 
                <Text style={styles.Info}> Click to download the syllabus!</Text>
               </Button>
     
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
         <Text style={{fontWeight:'bold', fontStyle:'italic'}}> If you want to know more about the CDS course conducted at Apex careers, click the following button! </Text>
           <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
               course:'AFCAT'
           })}></Button>
     </Card.Content>
     </Card>

     </View>
</React.Fragment>
            )
        }

        else if(entry=='INET')
        {
            return(
                <React.Fragment>
                <View style={styles.Body}>
   <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is INET?
       </Text>
       <Text style={styles.Info}>
       
  
       <Text style={{fontWeight:'bold'}}> The Indian Navy Entrance Test </Text>(INET) is a written examination conducted by the Indian Navy for recruiting young, dynamic candidates in its executive, navigation, submarine and aviation branches{'\n'}
     
       </Text>
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         How to apply?
       </Text>
       <Text style={styles.Info}>
       
       <Text style={{fontWeight:'bold'}}>The Indian Navy</Text> conducts the written exam twice every year.{'\n'} Results are declared within 1 month and subsequently, based on the aspirant's choice of arm, the shortlisted candidates are further subjected to an intensive 5-day Naval Selection Board(NSB-Navy) interview.{'\n'}
        Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the Navy and those whose names appear in the merit list join the Indian Naval Academy (INA), Ezhimulla.           
                For further details visit : <Text style={{color:'blue'}} onPress={()=>Linking.openURL('https://www.joinindiannavy.gov.in/en/event/officer-entry-applications-for-permanent-commission-in-education-branch-short-service-commission-off.html')}>https://www.joinindiannavy.gov.in</Text>
       </Text>

     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is the syllabus for the examination?
       </Text>
       
       <Button style={styles.button}
   
                 onPress={() =>
                   Linking.openURL(
                     'https://www.joinindiannavy.gov.in/files/files/SYLLABUS%20FOR%20INET%20FOR%20OFFICERS.pdf',
                   )
                 }> 
                <Text style={styles.Info}> Click to download the syllabus!</Text>
               </Button>
     
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
         <Text style={{fontWeight:'bold', fontStyle:'italic'}}> If you want to know more about the INET course conducted at Apex careers, click the following button! </Text>
           <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
               course:'INET'
           })}></Button>
     </Card.Content>
     </Card>

     </View>
</React.Fragment>
            )
        }

        else if(entry=='TGC'){
            return(
                <React.Fragment>
                <View style={styles.Body}>
   <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is TGC?
       </Text>
       <Text style={styles.Info}>
       
  
       TGC entry also know as <Text style={{fontWeight:'bold'}}>  Technical Graduate Course Entry </Text> is a type of entry through which an engineering graduate(only male) can join the Indian Army as an officer. TGC entry is specific for engineering students who can apply for it from final year onward.
     
       </Text>
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         How to apply?
       </Text>
       <Text style={styles.Info}>
       All eligible male engineering graduates can apply for TGC entry, later Indian army decides the cut off percentage and shortlist the candidates out of all applicants. So at the time of applying, there is no percentage criteria.
       For further details visit : <Text style={{color:'blue'}} onPress={()=>Linking.openURL('https://joinindianarmy.nic.in/')}>https://joinindianarmy.nic.in/</Text>      
             
             </Text>

     </Card.Content>
     </Card>
     <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
                What is the selection process?
            </Text>
       <Text style={styles.Info}>
           Once shortlisted by the Indian Army, such candidates are called up for the Services Selection Board interviews. {'\n'}
           Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the Indian Army and those whose names appear in the merit list join IMA, Dehradun for further training.    
           </Text> 
       
      
      </Card.Content>
      </Card>

    

     <Card style={styles.cardContainer}>
     <Card.Content>
     <Text style={{fontWeight:'bold', fontStyle:'italic'}}> If you want to know more about the Services Selection Board interview course conducted at Apex careers, click the following button! </Text>
            <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
                course:'SSB'
            })}></Button>    
             </Card.Content>
     </Card>

     </View>
</React.Fragment>
            )
        }

        else if(entry=='JAG')
        {
            return(
                <React.Fragment>
                <View style={styles.Body}>
   <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is JAG?
       </Text>
       <Text style={styles.Info}>
       
  
       <Text style={{fontWeight:'bold'}}> JAG or Judge Advocate General </Text> is a post held by a major general who is the legal and judicial chief of the Indian Army. The Indian Army has an individual JAG branch which includes legally qualified army officers. These officers can be commissioned directly into the JAG branch or sidestepped from other branches like arms or corps. JAG officers are responsible for providing legal help to the military in all aspects. To become a JAG officer,
     
       </Text>
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         How to apply?
       </Text>
       <Text style={styles.Info}>
       JAG Entry is designed for all candidates. It is a special entry for both male and female law graduates. There is no written exam for this entry. Shortlisted candidates will directly face the SSB interview.
       For further details visit : <Text style={{color:'blue'}} onPress={()=>Linking.openURL('https://joinindianarmy.nic.in/')}>https://joinindianarmy.nic.in/</Text>      
             
             </Text>

     </Card.Content>
     </Card>
     <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
                What is the selection process?
            </Text>
       <Text style={styles.Info}>
           Once shortlisted by the Indian Army, such candidates are called up for the Services Selection Board interviews. {'\n'}
           Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the Indian Army and those whose names appear in the merit list join IMA, Dehradun for further training.    
           </Text> 
       
      
      </Card.Content>
      </Card>

    

     <Card style={styles.cardContainer}>
     <Card.Content>
     <Text style={{fontWeight:'bold', fontStyle:'italic'}}> If you want to know more about the Services Selection Board interview course conducted at Apex careers, click the following button! </Text>
            <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
                course:'SSB'
            })}></Button>    
             </Card.Content>
     </Card>

     </View>
</React.Fragment>

            )
        }

        else if(entry=='SSC (Tech)')
        {
            return(
                <React.Fragment>
                <View style={styles.Body}>
   <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is SSC (Tech)?
       </Text>
       <Text style={styles.Info}>
       
  
       SSC (Tech) entry also know as <Text style={{fontWeight:'bold'}}>  Short Service Commission (Technical) Entry </Text> is a type of entry through which an engineering graduate(only male) can join the Indian Army as an officer. SSC (Tech) entry is specific for engineering students who can apply for it from final year onward.
     
       </Text>
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         How to apply?
       </Text>
       <Text style={styles.Info}>
       All eligible male engineering graduates can apply for SSC(Tech) entry, later Indian army decides the cut off percentage and shortlist the candidates out of all applicants. So at the time of applying, there is no percentage criteria.
       For further details visit : <Text style={{color:'blue'}} onPress={()=>Linking.openURL('https://joinindianarmy.nic.in/')}>https://joinindianarmy.nic.in/</Text>      
             
             </Text>

     </Card.Content>
     </Card>
     <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
                What is the selection process?
            </Text>
       <Text style={styles.Info}>
           Once shortlisted by the Indian Army, such candidates are called up for the Services Selection Board interviews. {'\n'}
           Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the Indian Army and those whose names appear in the merit list join IMA, Dehradun for further training.    
           </Text> 
       
      
      </Card.Content>
      </Card>

    

     <Card style={styles.cardContainer}>
     <Card.Content>
     <Text style={{fontWeight:'bold', fontStyle:'italic'}}> If you want to know more about the Services Selection Board interview course conducted at Apex careers, click the following button! </Text>
            <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
                course:'SSB'
            })}></Button>    
             </Card.Content>
     </Card>

     </View>
</React.Fragment>
            )
        }

        else if(entry=='NCC Special Entry')
        {
            return(
                <React.Fragment>
                <View style={styles.Body}>
   <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         What is NCC entry?
       </Text>
       <Text style={styles.Info}>
       
  
        <Text style={{fontWeight:'bold'}}>  The National Cadet Corps (NCC) Special Entry </Text> is a type of entry through which any graduate(both male and female) having NCC C Certificate can join the Indian Army as an officer. NCC Entry is not specific to any graduation stream but it requires the candidate to have score more than 50% aggregate marks in all the semesters.
            {'\n'} This is a short service commission entry and only graduates with C Certificate are eligible to apply for the same. 
       </Text>
     </Card.Content>
     </Card>

     <Card style={styles.cardContainer}>
     <Card.Content>
       <Text style={styles.Title}>
         How to apply?
       </Text>
       <Text style={styles.Info}>
       All eligible male/female graduates can apply for NCC entry, later Indian army shortlists the candidates based on the grade the candidates have acquired in the C Certificate exam.
       For further details visit : <Text style={{color:'blue'}} onPress={()=>Linking.openURL('https://joinindianarmy.nic.in/')}>https://joinindianarmy.nic.in/</Text>      
             
             </Text>

     </Card.Content>
     </Card>
     <Card style={styles.cardContainer}>
      <Card.Content>
        <Text style={styles.Title}>
                What is the selection process?
            </Text>
       <Text style={styles.Info}>
           Once shortlisted by the Indian Army, such candidates are called up for the Services Selection Board interviews. {'\n'}
           Those recommended by the respective service selection board are further subject to a throrough medical examination. A merit list is prepared by the Indian Army and those whose names appear in the merit list join OTA, Chennai for further training.    
           </Text> 
       
      
      </Card.Content>
      </Card>

    

     <Card style={styles.cardContainer}>
     <Card.Content>
     <Text style={{fontWeight:'bold', fontStyle:'italic'}}> If you want to know more about the Services Selection Board interview course conducted at Apex careers, click the following button! </Text>
            <Button icon="forward" onPress={()=>this.props.navigation.navigate('CourseInfo',{
                course:'SSB'
            })}></Button>    
             </Card.Content>
     </Card>

     </View>
</React.Fragment>

            )
        }

      
    }


    render() {
        let entry=this.props.route.params.entry

        return (
            <View style={styles.Container} >
                 <Appbar.Header style={styles.Header}>
            <Appbar.BackAction onPress={()=>this.props.navigation.navigate('Home')} />
            <Appbar.Content title={this.renderTitle(entry)} />
           

          </Appbar.Header>

          <ScrollView style={styles.Scroll}>
            {this.renderInfoEntry(entry)}
          </ScrollView>
            </View>
        )
    }
}
