import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import MealComponent from './mealComponent';
import {Actions} from "react-native-router-flux";

class LogScreen extends Component
{
  constructor()
  {
    super();
        this.state={

        }
  }


  seeDetailsClick()
  {
    Actions.fooddetailpage();

  }


  
    render()
    {
        return(
            <View style={styles.LogScreen}>
            <View style={styles.componentBox}>
            <MealComponent mealType={"Breakfast"}/>
            <MealComponent mealType={"Lunch"}/>
            <MealComponent mealType={"Snacks"}/>
            <MealComponent mealType={"Dinner"}/>
            </View>
            <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.seeDetailsClick.bind(this)} >
            <Text style={styles.textStyle}>
            See Submitted details
            </Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
  }


export default LogScreen;


const styles={

  LogScreen:{
    flex:1,
    justifyContent:'space-around'
  },
  componentBox:{
    flex:7,
    justifyContent:'center'

  },
  buttonBox:{
    flex:3,
    justifyContent:'center'


  },
  textStyle:{
    textAlign:'center'
  }


}