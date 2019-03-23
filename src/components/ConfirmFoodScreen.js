import React,{Component} from 'react';
import {Text,View} from 'react-native';
import FoodConfirmComponent from './FoodConfirmComponent';
import { Header } from 'native-base';


const temp=[
 {description:"apple"},
 {description:"banana"}, 
 {description:"grapes"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
]

class ConfirmFoodScreen extends Component
{
  constructor(props)
  {
    super(props);

    this.state={

    }
  }

  


     

    renderFoodComponents()
    {
      //return temp.map(((Item)=>
      return this.props.foodItems.map(((Item)=>
    {
      return(
        <View>
        <FoodConfirmComponent foodDescription={Item.description} imagePath={this.props.imagePath} mealType={this.props.mealType}/>
        </View>
      )
    }))
  }



  


  render()
  {

    return(
      <View>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Confirm your Food</Text></Header>
        <View style={{paddingLeft:10,paddingRight:10}}>
        <Text style={{fontSize:20}}>
      </Text>
        {this.renderFoodComponents()}
      </View> 
      </View>
    )


  }


}




export default ConfirmFoodScreen;