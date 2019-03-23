import React,{Component} from 'react';
import {View,Text,AsyncStorage,Image,TouchableOpacity,ScrollView} from 'react-native';
import FooterApp from './footerapp';
import { Collapse, CollapseHeader, CollapseBody,AccordionList } from "accordion-collapse-react-native";
import {Header} from 'native-base';
import MealComponent from './mealComponent';
import {Input} from './reusables/Input';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {AppHeader} from './reusables/AppHeader';









export default class DetailsPage extends Component {


  constructor()
  {
    super();

  this.state={
    Breakfast:{added:false,data:{}},
    Lunch:{added:false,data:{}},
    Snacks:{added:false,data:{}},
    Dinner:{added:false,data:{}},
    alcohol:0,
    cigrrate:0,
    token:null
  }

}




onGenerateReport()
{
  totalcal=this.state.Breakfast.data.calories+this.state.Lunch.data.calories+this.state.Snacks.data.calories+this.state.Dinner.data.calories;
  totalcarbs=this.state.Breakfast.data.carbs+this.state.Lunch.data.carbs+this.state.Snacks.data.carbs+this.state.Dinner.data.carbs;
  totalfat=this.state.Breakfast.data.fats+this.state.Lunch.data.fats+this.state.Snacks.data.fats+this.state.Dinner.data.fats;
  totalprot=this.state.Breakfast.data.proteins+this.state.Lunch.data.proteins+this.state.Snacks.data.proteins+this.state.Dinner.data.proteins;


    
    
   const obj={
    totalcal,
    totalcarbs,
    totalfat,
    totalprot,
    cigsmoke:this.state.cigrrate,
    alcoholglass:this.state.alcohol,
    calburnt:1340,
    }


    const auth= `JWT ${this.state.token}`;

    fetch('https://visionapu.herokuapp.com/recordops/add',
    {
      method:'post',
      headers:{'Content-Type':'application/json',
      'Authorization':auth},
      body:JSON.stringify(obj)
    })
    .then((response)=>response.json())
    .then((response)=>{console.log(response);

      Actions.home()

    }
  );
}

      
    

  renderMealDetailsOrCamera(mealType)
  {

    if(this.state[mealType].added ===false)
    {
      return(
        <View>
        <Text style={{textAlign:'center',fontSize: 15, color: '#93114b', padding: 3}}>
        No {mealType} detail added. 
        </Text>
        </View>
        )
      }

    else
    {
      return(
        
        <View style={style.mainComp}>
        <View style={style.comp1}>
        <Text>Calories:{this.state[mealType].data.calories}</Text>
        <Text>Carbohydrates:{this.state[mealType].data.carbs}</Text>
        <Text>Fats:{this.state[mealType].data.fats}</Text>
        <Text>Proteins:{this.state[mealType].data.proteins}</Text>
        </View>
        <View style={style.comp1}>
        <Image source={{uri:this.state[mealType].data.imagePath}} style={{borderWidth:2,height:100,width:100,borderColor:'#bc05d3'}} />
        </View>
        </View>

      )
    }
  }

    retrieveData(mealType)
    {
      AsyncStorage.getItem(mealType)
    .then((value)=>{ if(value){this.setState({[mealType]:{added:true,data:JSON.parse(value)}})}; })

    }


  componentDidMount()
  {
    this.retrieveData('Breakfast');
    this.retrieveData('Lunch');
    this.retrieveData('Snacks');
    this.retrieveData('Dinner');

    AsyncStorage.getItem('token')
    .then((value)=>{this.setState({token:value})})

  }



  onChangeAlcohol(value)
  {
    this.setState(
      {alcohol:value})
  }


  onChangeCiggrate(value)
  {
    this.setState(
      {ciggrate:value})
  }

 


  
  
  
  render() {

    
    return (


      
      <View style={{justifyContent:'center',flex:1}}>
      <AppHeader heading="Today's Summary" />
     

        <ScrollView style={{ backgroundColor: '#fcfcfc', padding: 15, flexDirection: 'column',}}>
      

        <View style={style.mealComponentBox}>

        

        

          <Collapse style={style.mealComp}>

          

          <CollapseHeader >
          <LinearGradient colors={['#fe5756', '#ff3f3e']} > 
            <View>
              <MealComponent mealType={"Breakfast"}/>
            </View>
            </LinearGradient>
          </CollapseHeader>
          <CollapseBody >
            {this.renderMealDetailsOrCamera('Breakfast')}
          </CollapseBody>
        </Collapse>

          <Collapse style={style.mealComp}>
                <CollapseHeader  >
                  <View >
                    <MealComponent mealType={"Lunch"}/>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  {this.renderMealDetailsOrCamera('Lunch')}
                </CollapseBody>
              </Collapse>



              <Collapse style={style.mealComp}>
              <CollapseHeader >
                <View >
                  <MealComponent mealType={"Snacks"}/>
                </View>
              </CollapseHeader>
              <CollapseBody>
                {this.renderMealDetailsOrCamera('Snacks')}
              </CollapseBody>
            </Collapse>




            <Collapse style={style.mealComp}>
            <CollapseHeader  >
              <View >
                <MealComponent mealType={"Dinner"}/>
              </View>
            </CollapseHeader>
            <CollapseBody >
              {this.renderMealDetailsOrCamera('Dinner')}
            </CollapseBody>
          </Collapse>
  </View>

    <View style={style.questionBox}>

            <Collapse>
            <CollapseHeader >
              <View>
              <Text style={[style.textStyle,{color:'blue'}]}>
              Answer few basic questions
              </Text>
              </View>
            </CollapseHeader>
            <CollapseBody >
            <Input label="Alcohol consumed"
                        value={this.state.alcohol} 
                        onChangeText={this.onChangeAlcohol.bind(this)} 
                        placeholder="eg:10"
                        secureTextEntry={false} />

                        <Input label="Cigrates consumed"
                        value={this.state.username} 
                        onChangeText={this.onChangeCiggrate.bind(this)} 
                        placeholder="eg:5"
                        secureTextEntry={false} />

              
            </CollapseBody>
            </Collapse>
    </View>

    <View style={style.buttonBox}>
    <LinearGradient colors={['#7066cf', '#7066cf']}>
            <TouchableOpacity style={style.buttonStyle} onPress={this.onGenerateReport.bind(this)} >
            <Text style={style.textStyle}>
            Generate Report
            </Text>
            </TouchableOpacity>
            </LinearGradient>

    </View>
    </ScrollView>


<FooterApp/>

</View>
  
    );
  }
}


const style={

  mainComp:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:10
  },
  comp1:{
    flex:3
  },

  comp2:{
    flex:1
  },

  mealComponentBox:{
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingTop: 10,
    flex: 1
  },
 mealComp:{
   marginBottom: 10
 },

  questionBox:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    flex:1

  },
  buttonBox:{
    justifyContent:'center',
    alignItems:'center',
    flex:1

  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    //flex: 1,
    alignSelf: 'stretch',
   // backgroundColor: '#fff',
    //borderRadius: 5,
    //borderWidth: 1,
    //borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    padding:5
  },

  cardComp:{
    height: 144,
    width: 105,
    borderRadius: 6,
    elevation: 5,
    padding: 13,
    margin: 5,
    backgroundColor:'#5ec1d1'
    
  }




}



