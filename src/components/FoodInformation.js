import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,AsyncStorage}  from 'react-native';
import {Spinner} from './reusables/Spinner';
import DetailViewComponent from './DetailViewComponent';
import {Actions} from 'react-native-router-flux';
import { Header } from 'native-base';


class FoodInformation extends Component
{
  constructor(props)
  {
    super(props);

    this.state={

      isLoading:true,
      FoodDetails:null

    }

  }


  componentDidMount()
  {

    fetch('https://visionapu.herokuapp.com/foodsearch',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({foodname:this.props.foodItem})
    })
    .then(response=>response.json())
    .then((response) =>
      {

        AsyncStorage.getItem(this.props.mealType)
      .then((value)=>
      {
        console.log(value);
        let obj={};

        if(value)
        {
          console.log("true");
          var tempObj=JSON.parse(value);

          var newData=tempObj.data;
          console.log(newData);
          newData.push(

            {
              calories:this.state.FoodDetails.calories.value,
              carbs:this.state.FoodDetails.carbs.value,
              fats:this.state.FoodDetails.fat.value,
              proteins:this.state.FoodDetails.protein.value,
              imagePath:this.props.imagePath,
              foodItem:this.props.foodItem,
            }


          )

          console.log("wwfwfwf");

          obj={
            calories:this.state.FoodDetails.calories.value + tempObj.calories  ,
            carbs:this.state.FoodDetails.carbs.value + tempObj.carbs ,
            fats:this.state.FoodDetails.fat.value + tempObj.fats  ,
            proteins:this.state.FoodDetails.protein.value + tempObj.proteins,
            imagePath:this.props.imagePath,
            foodItem:this.props.foodItem,
            data:newData
          }

          console.log(obj);
        }

        else
        {
          console.log("fq");
          const newObj={
            calories:this.state.FoodDetails.calories.value,
            carbs:this.state.FoodDetails.carbs.value,
            fats:this.state.FoodDetails.fat.value,
            proteins:this.state.FoodDetails.protein.value,
            imagePath:this.props.imagePath,
            foodItem:this.props.foodItem
          }
          const newData=[];
          newData.push(newObj);

            obj={
            calories:this.state.FoodDetails.calories.value,
            carbs:this.state.FoodDetails.carbs.value,
            fats:this.state.FoodDetails.fat.value,
            proteins:this.state.FoodDetails.protein.value,
            imagePath:this.props.imagePath,
            foodItem:this.props.foodItem,
            data:newData
          }

          console.log(obj);

        }


      AsyncStorage.setItem(this.props.mealType,JSON.stringify(obj))

   
    }) 







        console.log(response);
  

        this.setState(
          {
            isLoading:false,
            FoodDetails:response
          }
        )


})
  }


  renderDetailsOrSpinner()
  {


    
      if(this.state.isLoading)
          {
            return(
              <View style={{marginTop:20}}>
              <Spinner />
              <Text style={[styles.textStyle,{color:'#bc05d3'}]}>Loading Details</Text>
              </View>
            )

          }

      else
          {
            return(
              <View>
              <DetailViewComponent field={"Calories"} value={this.state.FoodDetails.calories.value}/>
              <DetailViewComponent field={"Carbohydrates"} value={this.state.FoodDetails.carbs.value}/>
              <DetailViewComponent field={"Fats"} value={this.state.FoodDetails.fat.value}/>
              <DetailViewComponent field={"Proteins"} value={this.state.FoodDetails.protein.value}/>
              </View>

               
            )

          }

    }

    onDoneClick()
    {
      Actions.fooddetailpage();
    }







  render()

  {


  
  return(
    <View style={styles.mainComp}>
    <Header style={{marginBottom:10}}><Text style={{color:'white',marginTop:15,fontSize:20 }}>Food Details</Text></Header>
    
    <View style={styles.comp1}>
    <View>
    <Text style={[styles.textStyle,{color:'#bc05d3'}]}>Meal Type:</Text>
    <Text style={[styles.textStyle,{color:'black'}]}>{this.props.mealType} </Text>
    <Text style={[styles.textStyle,{color:'#bc05d3'}]}>Meal item:</Text>
    <Text style={[styles.textStyle,{color:'black'}]}>{this.props.foodItem} </Text>
    
    </View>

    <View>
    <Image source={{uri:this.props.imagePath}} style={{borderWidth:1.5,height:160,width:160,borderColor:'#bc05d3'}} />
    </View>
    </View>


    <View style={styles.comp2}>
    {this.renderDetailsOrSpinner()}
    </View>
    <View style={styles.comp3}>
    <TouchableOpacity style={[styles.buttonStyle]} onPress={this.onDoneClick.bind(this)} >
      <Text style={styles.textStyle}>
        Done
      </Text>
      </TouchableOpacity>
      </View>

    
   </View>
  )
  
}

}


export default FoodInformation;

const styles={
  mainComp:{
    flex:1
  },
  comp1:{
    flex:6,
    //backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'

  },
  comp2:{
    flex:14,
    paddingLeft:5,
    paddingRight:5,
    //backgroundColor:'green',
    justifyContent:'center'
  },
  comp3:{

    flex:5,
    //backgroundColor:'blue'
    flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'

  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15
  },
  buttonStyle: {

    backgroundColor: '#bc05d3',
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#692D7D',
    paddingTop:3,
    paddingBottom:3,
    paddingLeft:30,
    paddingRight:30 
  }
 

}



