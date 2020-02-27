import React, { Component } from 'react'
import {StyleSheet, Text, View,ScrollView,Image, TouchableOpacity,} from 'react-native'
import { Avatar,Appbar,Button, Card, Title } from 'react-native-paper';

export default class EligibilityResultArmy extends Component {

    static navigationOptions = {
        headerShown: false
    }
    back = () => {this.props.navigation.navigate('EligibilityFormArmy')}


    renderCdsPC=(attemptCdsPC)=>{
        if(attemptCdsPC<=0){
            return(<View>
                <Card.Title title='You do not have any CDS (IMA) attempts left' />
            </View>)
        }
        else{
            return(
               
                <Card style={styles.Card}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('CDS')}>
             <Card.Cover  source={{uri:'https://www.ipsfullform.in/wp-content/uploads/2019/06/NDA.jpg'}}/>
            
        <Card.Content>
     <Text style={styles.Info}> You have {attemptCdsPC} attempt(s) for CDS (IMA)</Text>
        </Card.Content>
        </TouchableOpacity>
        </Card>
            )}
    }



     renderNDA=(attemptNDA)=>{
         if(attemptNDA<=0)
        {
            return(<View>
                <Card.Title title='You do not have any NDA attempts left' />
            </View>)
        }
        else{
         return(
             <Card style={styles.Card}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('NDA')}>
        <Card.Cover  source={{uri:'https://www.ipsfullform.in/wp-content/uploads/2019/06/NDA.jpg'}}/>
       
   <Card.Content>
<Text style={styles.Info}> You have {attemptNDA} attempt(s) for NDA (Army)</Text>
   </Card.Content>
   </TouchableOpacity>
   </Card>  )}}



 renderTES=(attemptTES)=>{
    
     if(attemptTES<=0)
     {
        return(<View>
            <Card.Title title='You do not have any TES attempts left' />
        </View>)
     }
     else{    return ( <Card style={styles.Card}><TouchableOpacity onPress={()=>this.props.navigation.navigate('TES')}>
    <Card.Cover  source={{uri:'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/12/ota-1576061510.jpg'}}/>
 

<Card.Content>
<Text style={styles.Info}> You have {attemptTES} attempt(s) for TES (Army)</Text>
</Card.Content>
</TouchableOpacity>
</Card> )}};

renderCdsSSC=(attemptCdsSSC)=>{
    if(attemptCdsSSC<=0)
    {
        return(<View>
            <Card.Title title='You do not have any CDS (OTA) attempts left' />
        </View>)
    }
    else{
        return(     <Card style={styles.Card}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('CDS')}>
         <Card.Cover  source={{uri:'https://www.ipsfullform.in/wp-content/uploads/2019/06/NDA.jpg'}}/>
        
    <Card.Content>
 <Text style={styles.Info}> You have {attemptCdsSSC} attempt(s) for CDS (OTA)</Text>
    </Card.Content>
    </TouchableOpacity>
    </Card>  )}}

renderNCC=(attemptNCC)=>{
if(attemptNCC<=0)
{
    return(
        <View>
        <Card.Title title='You do not have any NCC attempts left' />
    </View>)
}
else{ return(   <Card style={styles.Card}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NCC')}>
 <Card.Cover  source={{uri:'https://www.ipsfullform.in/wp-content/uploads/2019/06/NDA.jpg'}}/>

<Card.Content>
<Text style={styles.Info}> You have {attemptNCC} attempt(s) for CDS (OTA)-NCC 'C' Cert</Text>
</Card.Content>
</TouchableOpacity>
</Card>)}}

renderTGC=(attemptTGC)=>{
    if(attemptTGC<=0){
        return(<View>
            <Card.Title title='You do not have any TGC attempts left' />
        </View>)
    }
    else{ return(  <Card style={styles.Card}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('TGC')}>
     <Card.Cover  source={{uri:'https://www.ipsfullform.in/wp-content/uploads/2019/06/NDA.jpg'}}/>
    
<Card.Content>
<Text style={styles.Info}> You have {attemptTGC} attempt(s) for TGC (IMA)</Text>
</Card.Content>
</TouchableOpacity>
</Card>)}}

renderSSC=(attemptSSC)=>{if(attemptSSC<=0){
    return(<View>
        <Card.Title title='You do not have any SSC(Tech) attempts left' />
    </View>)
}
else{
    return(   <Card style={styles.Card}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SSC')}>
     <Card.Cover  source={{uri:'https://www.ipsfullform.in/wp-content/uploads/2019/06/NDA.jpg'}}/>
    
<Card.Content>
<Text style={styles.Info}> You have {attemptSSC} attempt(s) for SSC (Tech)</Text>
</Card.Content>
</TouchableOpacity>
</Card>)}}

renderJAG=(attemptJAG)=>{
    if(attemptJAG<=0){

    return(<View>
        <Card.Title title='You do not have any JAG attempts left' />
    </View>)
}
else{(  <Card style={styles.Card}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('JAG')}>
 <Card.Cover  source={{uri:'https://www.ipsfullform.in/wp-content/uploads/2019/06/NDA.jpg'}}/>

<Card.Content>
<Text style={styles.Info}> You have {attemptJAG} attempt(s) for JAG</Text>
</Card.Content>
</TouchableOpacity>
</Card>
)}}

    checkEligibility=(age,month,qualification,ncc)=>{

     let   attemptCdsPC=2*(23-age)
let attemptCdsSSC=2*(24-age)
let attemptNCC=2*(24.5-age)
let attemptTGC=2*(24-age)
let attemptSSC=2*(27-age)
let attemptJAG=2*(27-age)
let attemptNDA=2*(18.5-age)
let attemptTES=(19-age)
            
        if(attemptJAG<=0 && attemptNCC<=0 && attemptNDA<=0 && attemptTES<=0 && attemptTGC<=0 && attemptCdsPC<=0 && attemptCdsSSC<=0 && attemptSSC<=0){
            return(<View>
                <Card.Title title='Sorry you are not eligible for the armed forces!' />
            </View>)
        }

       else if(age>=16 && age<=18.5 && month>=7 && qualification==1 )
        {   
            
            return(
                <View style={styles.Container}>
           {this.renderNDA(attemptNDA+1)}
            {this.renderTES(attemptTES+1)}

             </View>
            )
        }
        else if(age>=16 && age<=18.5 && month<7 && qualification==1)
        {
           
            return(
                <View style={styles.Container}>
               {this.renderNDA(attemptNDA)}
                {this.renderTES(attemptTES)}
       </View>
              )
        }

        else if(age>=19 && age<=27 && (qualification==2 || qualification==3 || qualification==4) && month>=7)
        {
          
            if(age<=24.5 && qualification==2)
            {   
                if(age<=24.5 && ncc){
                
                return(
                    <View style={styles.Container}>
                   {this.renderCdsPC(attemptCdsPC+1)}
                    {this.renderCdsSSC(attemptCdsSSC+1)}
                    {this.renderNCC(attemptNCC+1)}
      </View>
            

                )}
                else if(age<=24){
                   
                return(
                    <View style={styles.Container}>
                         {this.renderCdsPC(attemptCdsPC+1)}
                         {this.renderCdsSSC(attemptCdsSSC+1)}
          </View>)
                }

                else {
                    return(
                        <View>
                            <Card.Title title='Sorry you have no attempts left!' />
                        </View>
                    )
                }
                }
               else if(age<=27 && qualification==3)
               {   
                if(ncc){   
               
                
                return(
                    <View style={styles.Container}>
                             {this.renderCdsPC(attemptCdsPC+1)}
                             {this.renderCdsSSC(attemptCdsSSC+1)}
                             {this.renderNCC(attemptNCC+1)}
                            {this.renderTGC(attemptTGC+1)}
                            {this.renderSSC(attemptSSC+1)}


           </View>
            

                )}

                else 
                {
                   
                    return(
                        <View style={styles.Container}>
                            {this.renderCdsPC(attemptCdsPC+1)}
    
                            {this.renderCdsSSC(attemptCdsSSC+1)}
                            {this.renderTGC(attemptTGC+1)}
                            {this.renderSSC(attemptSSC+1)}    
    
               </View>
                
    
                    ) 
                }
                }

                else if(age>=21 && age<=27 && qualification==4){

                    if(ncc)
                    {
                       
                      
                        return(
                            <View style={styles.Container}>
                            {this.renderCdsPC(attemptCdsPC+1)}

                            {this.renderCdsSSC(attemptCdsSSC+1)}
                            {this.renderNCC(attemptNCC+1)}
                            {this.renderJAG(attemptJAG+1)}
</View>                        )
                    }
                    else{
                     
                        return(
                            <View style={styles.Container}>
                       {this.renderCdsPC(attemptCdsPC+1)}
                       {this.renderCdsSSC(attemptCdsSSC+1)} 
                          {this.renderJAG(attemptJAG+1)}
                       </View>
                         ) }
                

                }
            
           }

            else if(age>=19 && age<=27 && (qualification==2 || qualification==3 || qualification==4) && month<7)
            {
               
                if(age<=24.5 && qualification==2)
            {   
                if(age<=24.5 && ncc){
               
                return(
                    <View style={styles.Container}>
                        {this.renderCdsPC(attemptCdsPC)}

                        {this.renderCdsSSC(attemptCdsSSC)}

                        {this.renderNCC(attemptNCC)}

         </View>
            

                )}
                else if(age<=24){
                   
                return(
                    <View style={styles.Container}>
                      {this.renderCdsPC(attemptCdsPC)}

                      {this.renderCdsSSC(attemptCdsSSC)}
           </View>)
                }

                else {
                    return(
                        <View>
                            <Card.Title title='Sorry you have no attempts left!' />
                        </View>
                    )
                }
                }
               else if(age<=27 && qualification==3)
               {   
                if(ncc){   
             
                
                return(
                    <View style={styles.Container}>
                                 {this.renderCdsPC(attemptCdsPC)}

                                {this.renderCdsSSC(attemptCdsSSC)}
           {this.renderNCC(attemptNCC)}
          {this.renderTGC(attemptTGC)}           
          {this.renderSSC(attemptSSC)}


           </View>
            

                )}

                else 
                {
                   
                    return(
                        <View style={styles.Container}>                                           {this.renderCdsPC(attemptCdsPC)}
              {this.renderCdsSSC(attemptCdsSSC)}
    
             
              {this.renderTGC(attemptTGC)}
              {this.renderSSC(attemptSSC)}    
    
               </View>
                
    
                    ) 
                }
                }

                else if(age>=21 && age<=27 && qualification==4){

                    if(ncc)
                    {
                       
                       
                        return(
                            <View style={styles.Container}>
                           {this.renderCdsPC(attemptCdsPC)}

{this.renderCdsSSC(attemptCdsSSC)}
{this.renderNCC(attemptNCC)}
{this.renderJAG(attemptJAG)}
</View>
                        )
                    }
                    else{
                       
                        return(
                            <View style={styles.Container}>
                        {this.renderCdsPC(attemptCdsPC)}                        
                        {this.renderCdsSSC(attemptCdsSSC)}
                       {this.renderJAG(attemptJAG)}
                        </View>
                         ) }
                

                }
            
            
            }

             else{
                 return(
                    <View style={styles.Container}>                        
                     <Card.Title title='Sorry! You are not eligible for the armed forces' />
                     </View>
                 )
             }
    }



    render() {
        
        const age=this.props.navigation.getParam('age','Nothing')
        const month=this.props.navigation.getParam('month','-1') 
        const qualification=this.props.navigation.getParam('qualification','-1')
        const ncc=this.props.navigation.getParam('ncc','false')
        return (
            <View style={styles.Container}>
            <ScrollView style={styles.Scroll}>
          
          <Appbar.Header>
          <Appbar.BackAction onPress={this.back}/>
        <Appbar.Content
          title="Eligibility for Army"
         
         
        />
        
      </Appbar.Header>
           
           
        {this.checkEligibility(age,month,qualification,ncc)}
        
        </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Card:{
        borderWidth:2,
        margin:'5%',
        backgroundColor:'ghostwhite',
        borderRadius:50,
      
    },
    Container:{
      height:'100%',
      backgroundColor:'#fdfefe',
      
    },
     cardContainer:{
      //  marginTop:'2%',
      elevation:1,
        borderRadius: 60,
        width:'100%',
    }, 
    Scroll:{
        backgroundColor:'#fdfefe',
        height:'100%',
        marginBottom:10
    },
    Header:{
        height:'15%',
        backgroundColor:'#D6E7ED',
        width:'100%',
        borderColor:'#000000',
       flexDirection:'row',
        borderWidth:2,
       // marginBottom:'5%',
        //flex:1
    },
    MenuLogo:{
        width:'15%',
        height:'50%',
        marginTop:"5%",
        marginLeft:'1%',
    },
    Heading:{
        fontStyle:'normal',
        fontSize:30,
        fontFamily:'Comic Sans MS',
        marginTop:'3%',
        marginLeft:'25%',
       
    },
    
    Body:{
        backgroundColor:'white',
     // margin:'10%',
     // marginRight:'5%',
       //flex:0,
       alignItems:'center',
      flexDirection:'column',
      height:'100%',
      paddingBottom:'50%',
         
    },
    logo:{
        marginTop:'0%',
        marginBottom:'10%',
        height:'50%',
        width:'100%',
  
     },
     Title:{
         textAlign:'center',
         fontFamily:'georgia',
         fontSize:25,
     },
     Info:{
        fontFamily:'georgia',
        fontSize:25,
        marginLeft:'2%',
       alignSelf:'center'
     },
   Button:{
       width:'75%',
       height:'25%',
       backgroundColor:'white',
       borderColor:'black',
       borderWidth:3,
       justifyContent:'center',
       flexDirection:'column',
       //marginLeft:'25%',
       padding:'1%',
       marginTop:'5%',
     
       
   } ,
   ButtonText:{
       //marginLeft:'17%',
       fontFamily:'Segoe UI',
       fontStyle:'italic',
       fontSize:20,
       textAlign:'center'
   },
   button:{
    alignSelf:'center',
    width:'35%',
    height:'20%',
    marginBottom:'10%'
   },
   ButtonContainer:{
     marginTop: '45%',
     alignContent: 'center'
   }
   
})
