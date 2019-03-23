// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';



// Make a component
const AppHeader = (props) => {

let curTime = new Date().getHours();
var wishTimeofTheDay = 'Good Morning!';

if(curTime>12&&curTime<=17){wishTimeofTheDay= 'Good Afternoon!'};
if(curTime>17&&curTime<24){wishTimeofTheDay= 'Good Evening!'};

  onLogOut=()=>
  {
    //delete the token first and then navigate to login screen
    //AsyncStorage.clear();
    Actions.fooddetailpage();
  }

  return (
    
    <View style={{justifyContent:'center',flex:2,backgroundColor:'white',justifyContent: 'flex-start', elevation: 2}}>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />

    <View style={{flex:2, justifyContent: 'center', paddingLeft: 25}}>
    <Text style={{fontSize:30}}>
    {props.heading}
    </Text>

    <TouchableOpacity style={styles.foodLog} onPress={this.onLogOut.bind(this)}>
            <Text style={{textAlign:'center',fontSize:40,color:'white',fontWeight:'normal'}}> + </Text>
       </TouchableOpacity>
    </View>

    <View style={{flex:1,flexDirection:'row', paddingBottom: 20}}>

    <View style={styles.usericon}>
      <Image style={{}} source={require('.//../../../images/usericon.png')}/>
     </View>

     <View style={styles.usertext}>
          <Text style={styles.username}>{props.headerText}</Text>
          <Text style={styles.address}>{wishTimeofTheDay}</Text>
      </View>

       

       </View>
    </View>
  );
};

const styles = {
  viewStyle: {
      flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    marginTop:30,
    // paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  usericon: {
      flex: 1,
      height: 60,
      width: 60,
      paddingLeft: 25,
  },
  usertext: {
      flex: 5,
  },
  address: {
      fontSize: 15,
      color: '#2e4592'
  },
  username: {
    fontSize: 25,
    lineHeight: 27,
    marginBottom: 2,
    fontWeight: 'bold'
  },
  foodLog:{
    flex: 1,
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: 'blue',
    elevation: 10,
    position: 'absolute',
    right: 10,
    top: 20,
  }
};

// Make the component available to other parts of the app
export { AppHeader };
