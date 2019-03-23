import React,{Component} from 'react';
import {Text,alert,AsyncStorage,View, Image,TouchableOpacity} from 'react-native';
import DisplayField  from './reusables/DisplayField';
import {Spinner} from './reusables/Spinner';
import {Button} from './reusables/Button';
import {AppHeader} from './reusables/AppHeader';
import {Dashboard} from './reusables/dashboard';
import {Actions, Reducer} from 'react-native-router-flux';
import FooterTab from './reusables/FooterTab';
import LinearGradient from 'react-native-linear-gradient';


class Profile extends Component
{
    constructor(props)
    {
      super(props);


      
      this.state={
        isLoading:true,
        UserDetails:{},
      }
    }



  renderDataOrSpinner()
      {
        if(this.state.isLoading)
        {
          return(

            <View style={styles.loading}>
            <Spinner/>
            <Text style={styles.loadingText}>Loading User Details</Text>
            </View>
          )
        }

        // <DisplayField label={"Name"} value={this.state.UserDetails.name}/>
        // <DisplayField label={"Username"} value={this.state.UserDetails.username}/>
        // <DisplayField label={"DOB"} value={this.state.UserDetails.DOB}/>
        // <DisplayField label={"Height"} value={this.state.UserDetails.height}/>
        // <DisplayField label={"Weight"} value={this.state.UserDetails.weight}/>

        else
        {

          return(
            <View>
            <View style={{flex: 3,justifyContent:'center'}}>

                <View style={{flexDirection: 'row', flex: 1,marginBottom: 161, marginTop: 150}}>
                <LinearGradient colors={['#fe5756', '#ff3f3e']} style={styles.cardComp}>
                  <View style={{ flex: 1, marginBottom: 5 }}>
                    <Image source={require('../../images/usericon(1).png')} />
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.cardType}>Calorie</Text>
                    <Text style={styles.cardType}>Count</Text>
                  </View>
                  <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>1856 Cals</Text>

                </LinearGradient>

                <LinearGradient colors={['#7066CF', '#9B63AC']} style={styles.cardComp}>
                  <View style={{ flex: 1, marginBottom: 5 }}>
                    <Image source={require('../../images/usericon(1).png')} />
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.cardType}>Steps</Text>
                    <Text style={styles.cardType}>Taken</Text>
                  </View>
                  <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>1856 Steps</Text>

                </LinearGradient>

                <LinearGradient colors={['#0e84b9', '#5ec1d1']} style={styles.cardComp}>
                  <View style={{ flex: 1, marginBottom: 5 }}>
                    <Image source={require('../../images/usericon(1).png')} />
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.cardType}>Total</Text>
                    <Text style={styles.cardType}>Time</Text>
                  </View>
                  <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>45 Min</Text>

                </LinearGradient>
                </View>
            

              <View style={{flexDirection: 'row',flex: 1}}>
              <LinearGradient colors={['#5a53f8', '#918cea']} style={styles.cardComp}>
              <View style={{flex:1 ,marginBottom:5}}>
               <Image source={require('../../images/usericon(1).png')}/>
              </View>
              <View style={{flex:2}}>
                <Text style={styles.cardType}>Water</Text>
                <Text style={styles.cardType}>Intake</Text>
                <Text style={{fontSize: 9, color: 'white'}}>1000 ml left</Text>
              </View>  
                <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold'}}>600ml</Text>

              </LinearGradient>

              <LinearGradient colors={['#22b8c8', '#6ede9c']} style={styles.cardComp}>
              <View style={{flex:1 ,marginBottom:5}}>
               <Image source={require('../../images/usericon(1).png')}/>
              </View>
              <View style={{flex:2}}>
                <Text style={styles.cardType}>Sleep</Text>
                <Text style={styles.cardType}>Hours</Text>
                <Text style={{fontSize: 9, color: 'white'}}>1.1 hrs left</Text>
                
              </View>  
                <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold'}}>6.5 hrs</Text>

              </LinearGradient>

              
            </View>
            
        
            </View>

            <View style={{marginTop:320}}>

            <View style={{flexDirection:'row'}}>
            
            <View >
            <Text>Your Diet Plan </Text>
            </View>
            <TouchableOpacity>
            <Text>></Text>
            </TouchableOpacity>

            </View>

            <View>
            <Text style={{color: 'white', fontSize: 15}}>Risk Level: {10}</Text>
            <View style={{marginTop: 5, borderRadius: 10, height: 14, backgroundColor: 'white'}}>
              <View style={{margin: 2,  borderRadius: 10, height: 10, backgroundColor: 'red', width:150}}></View>
            </View>

            <Text>
            Risk Level : Low
            </Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>

          <LinearGradient colors={['#5ec1d1', '#5ec1d1']} style={styles.cardRect}>
          <View style={{flex:1 ,padding:15,justifyContent:'space-between'}}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold',textAlign:'center'}}>
          Height
          </Text> 
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',textAlign:'center'}}>{`${this.state.UserDetails.height} cm`}</Text>
            </View>
          </LinearGradient>

          <LinearGradient colors={['#5ec1d1', '#5ec1d1']} style={styles.cardRect}>
          <View style={{flex:1 ,padding:15,justifyContent:'space-between'}}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold',textAlign:'center'}}>
          Weight
          </Text> 
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',textAlign:'center'}}>{`${this.state.UserDetails.height} kg`}</Text>
            </View>
          </LinearGradient>


          <LinearGradient colors={['#5ec1d1', '#5ec1d1']} style={styles.cardRect}>
          <View style={{flex:1 ,padding:15,justifyContent:'space-between'}}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold',textAlign:'center'}}>
          BMI
          </Text> 
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',textAlign:'center'}}>{`${ ( (this.state.UserDetails.weight * 10000) / (this.state.UserDetails.height * this.state.UserDetails.height)).toFixed(2) }`}</Text>
            </View>
          </LinearGradient>

          </View>



            </View>

            
            </View>
               
          )}
    }


 

  componentDidMount()
  {
  


    AsyncStorage.getItem('token')
    .then((token)=>{
      fetch('https://visionapu.herokuapp.com/curuser',{
    method:'get',
    headers:{'Accept':'application/json',
    'Authorization':'JWT '+token}
    })
    .then(response=>response.json())
    .then((response) =>
      {
        console.log(response);
        this.setState(
          {
            isLoading:false,
            UserDetails:response,

          })
      })
    })
}

render()
  {
    return(
      <View style={{flex:1}}>
   <AppHeader heading="Dashboard" headerText={this.state.UserDetails.name}/>

   <View style={
     {flex:8,
      backgroundColor: '#f8fcff',
      paddingHorizontal: 15,
      paddingVertical: 20
    }
    }>

                  
      {this.renderDataOrSpinner()}

      </View>

      <View style={{flex:1}}>
      <FooterTab/>

      </View>
   
      </View>
     
    )
  }}


export default Profile;

const styles={
  profile: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  loading:{
    flexDirection: 'column',
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  loadingText:
  {
    flex: 3,
    justifyContent: 'flex-start',
    fontSize:20,
    fontWeight:'400'

  },
  cardComp:{
    height: 144,
    width: 105,
    borderRadius: 6,
    elevation: 5,
    padding: 13,
    margin: 5,
    backgroundColor:'#5ec1d1'
    
  },
  cardRect:{

    height: 85,
    width: 110,
    borderRadius: 10,
    elevation: 5,
    //padding: 13,
    //margin: 5


  },

  cardType:{
    fontSize: 16,
    color: '#fff',

  }
};

