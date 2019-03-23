import React, {Component} from 'react';
import {Platform, StyleSheet, View,AsyncStorage,Dimensions} from 'react-native';
import Footerapp from './footerapp';
import GoogleFit from 'react-native-google-fit';
import ProgressCircle from 'react-native-progress-circle';
import {ListItem,Thumbnail,Spinner,Fab, Container, Header, Card, CardItem , Content, Button, Text, Body, Grid, Row, Col} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

var {width,height}=Dimensions.get('window');

var now=new Date().toISOString().substr(0,10);
var xxx="T00:00:17.971Z";

GoogleFit.onAuthorize(() => {
  console.log('AUTH SUCCESS');
});

GoogleFit.authorize();

export default class homescr extends React.Component {
  constructor()
  {
    super();

    this.state={
      isLoading:true,
      isGLoading:true,
      isG2:true,
      isG3:true,
      userData:{},
      gfitData:{},
      gfitDist:{},
      gfitCal:{},
      greeting:""
    };
  }

  // renderGfitorSpinner()
  // {
  //   if(this.state.isGLoading)
  //   {
  //     return(

  //       <View style={styles.mainComp}>
  //       <Spinner/>
  //       </View>
  //     )
  //   }
  //   else
  //   {
  //     return(
  //       <View>
  //       <ProgressCircle
  //           percent={(this.state.gfitData[0].steps[0].value/10000)*100}
  //           radius={60}
  //           borderWidth={8}
  //           color="#EF184B"
  //           shadowColor="#999"
  //           bgColor="#fff"
  //           style={{marginLeft:25,marginTop:25}}>
  //           <Icon size={30} color="#EF184B" name="foot"></Icon>
  //           <Text style={{ fontSize: 18 }}>{this.state.gfitData[0].steps[0].value} steps</Text>
  //       </ProgressCircle>
  //       </View>
  //     )
  //   }
  // }
  // renderGfit2orSpinner()
  // {
  //   if(this.state.isG2)
  //   {
  //     return(

  //       <View style={styles.mainComp}>
  //       <Spinner/>
  //       </View>
  //     )
  //   }
  //   else
  //   {
  //     return(
  //       <View>
  //       <ProgressCircle
  //           percent={(this.state.gfitDist[0].distance/10000)*100}
  //           radius={60}
  //           borderWidth={8}
  //           color="#89F200"
  //           shadowColor="#999"
  //           bgColor="#fff"
  //           style={{marginLeft:25,marginTop:25}}>
  //           <Icon3 size={30} color="#89F200" name="running"></Icon3>
  //           <Text style={{ fontSize: 18 }}>{Math.round(this.state.gfitDist[0].distance/1000)} km</Text>
  //       </ProgressCircle>
  //       </View>
  //     )
  //   }
  // }
  // renderGfit3orSpinner()
  // {
  //   if(this.state.isG3)
  //   {
  //     return(

  //       <View style={styles.mainComp}>
  //       <Spinner/>
  //       </View>
  //     )
  //   }
  //   else
  //   {
  //     return(
  //       <View>
  //       <ProgressCircle
  //           percent={(this.state.gfitCal[0].calorie/3000)*100}
  //           radius={60}
  //           borderWidth={8}
  //           color="#3399FF"
  //           shadowColor="#999"
  //           bgColor="#fff"
  //           style={{marginLeft:25,marginTop:25}}>
  //           <Icon2 size={30} color="#3399FF" name="food"></Icon2>
  //           <Text style={{ fontSize: 18 }}>{Math.round(this.state.gfitCal[0].calorie)} cal</Text>
  //       </ProgressCircle>
  //       </View>
  //     )
  //   }
  // }
  renderDataOrSpinner()
  {
    if(this.state.isLoading)
    {
      return(
        <View style={{flex:1}}>
          <Spinner/>
        </View>
      )
    }
    else
    {
      return(
        <View>
          <Row style={{alignContent:'center'}}>
            <Col><Text style={{textAlign:'center'}}>Height</Text></Col>
            <Col><Text style={{textAlign:'center'}}>Weight</Text></Col>
            <Col><Text style={{textAlign:'center'}}>BMI</Text></Col>
          </Row>
          <Row>
            <Col><Text style={{textAlign:'center'}}>{this.state.userData.height}</Text></Col>
            <Col><Text style={{textAlign:'center'}}>{this.state.userData.weight}</Text></Col>
            <Col><Text style={{textAlign:'center'}}>{this.state.userData.weight/((this.state.userData.height/100)^2)}</Text></Col>
          </Row>
        </View>
      )
    }
  }

  renderData2OrSpinner()
  {
    if(this.state.isLoading)
    {
      return(
        <View style={{flex:1}}>
          <Spinner/>
        </View>
      )
    }
    else
    {
      return(
        <View>
          <Row style={{alignContent:'center'}}>
            <Col><Text style={{textAlign:'center'}}>Age</Text></Col>
            <Col><Text style={{textAlign:'center'}}>Blood Group</Text></Col>
            <Col><Text style={{textAlign:'center'}}>Gender</Text></Col>
          </Row>
          <Row>
            <Col><Text style={{textAlign:'center'}}>{moment(new Date()).diff(this.state.userData.DOB,'years')}</Text></Col>
            <Col><Text style={{textAlign:'center'}}>{this.state.userData.bldgrp}</Text></Col>
            <Col><Text style={{textAlign:'center'}}>{this.state.userData.gender}</Text></Col>
          </Row>
        </View>
      )
    }
  }
  
  componentDidMount()
  {
    AsyncStorage.getItem('token')
    .then((token)=>{
    fetch('https://visionapu.herokuapp.com/curuser',
    {
    method:'get',
    headers:{'Accept':'application/json','Content-Type':'application/json','Authorization':'JWT '+token}})
    .then(response=>response.json())
    .then((response) =>
      {
        console.log(response);
        this.setState(
          {
            isLoading:false,
            userData:response
          }
        )
      })
    })

    const options = {
      startDate: now+xxx, // required ISO8601Timestamp
      endDate: new Date().toISOString() // required ISO8601Timestamp
    };
     
    GoogleFit.getDailyStepCountSamples(options, (err, res) => {
      if (err) {
        throw err;
      }
      else{
        this.setState(
          {
            isGLoading:false,
            gfitData:res
          })
      }
    });

    GoogleFit.getDailyDistanceSamples(options, (err, res) => {
      if (err) {
        throw err;
      }
      else{
        this.setState(
          {
            isG2:false,
            gfitDist:res
          })
      }
    });

    GoogleFit.getDailyCalorieSamples(options, (err, res) => {
      if (err) {
        throw err;
      }
      else{
        this.setState(
          {
            isG3:false,
            gfitCal:res
          })
      }
    });

    var hrs=new Date().getHours();
    if (hrs<12){this.setState({greeting:"Morning"})}
    else if (hrs>=12 && hrs<16){this.setState({greeting:"Afternoon"})}
    else if (hrs>=16 && hrs<24){this.setState({greeting:"Evening"})}
    
  }

  componentWillUnmount()
  {
    this.state.isLoading=true;
    this.state.isGLoading=true;
    this.state.isG2=true;
    this.state.isG3=true;
  }

  render() {
    return (
      <View style={{height:1458}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Home</Text></Header>
        <Content padder>
        <Grid>
          <Row>
          <Col><Thumbnail style={{height:65,width:65,borderRadius:50}} source={{ uri:'https://res.cloudinary.com/doweee6jj/image/upload/v1538589091/samples/people/smiling-man.jpg'}}/></Col>
          <Col><Text style={{fontSize:25}}>Good {this.state.greeting} {this.state.userData.name}</Text></Col>
          </Row>
          <View style={{marginTop:10,marginBottom:10,borderBottomWidth: 0.75,borderBottomColor: 'black',width: width-20,}}/>
          {this.renderDataOrSpinner()}
          <View style={{marginTop:10,marginBottom:20,borderBottomWidth: 0.75,borderBottomColor: 'black',width: width-20,}}/>
          {/* <Row>
            <Col>{this.renderGfitorSpinner()}</Col>
            <Col>{this.renderGfit2orSpinner()}</Col>
            <Col>{this.renderGfit3orSpinner()}</Col>
          </Row> */}
          <View style={{marginTop:10,marginBottom:20,borderBottomWidth: 0.75,borderBottomColor: 'black',width: width-20,}}/>
          <Row>
            <Col>
              <LinearGradient colors={['#7066CF', '#9B63AC']} style={styles.cardComp}>
                <Text style={{color:'white'}}>
                  Sign in with Facebook
                </Text>
              </LinearGradient>
            </Col>
            <Col>
              <LinearGradient colors={['#7066CF', '#9B63AC']} style={styles.cardComp}>
                <Text style={{color:'white'}}>
                  Sign in with Facebook
                </Text>
              </LinearGradient>
            </Col>
            <Col>
              <LinearGradient colors={['#7066CF', '#9B63AC']} style={styles.cardComp}>
                <Text style={{color:'white'}}>
                  Sign in with Facebook
                </Text>
              </LinearGradient>
            </Col>
          </Row>
          <Row>
          <Button onPress={Actions.fooddetailpage.bind(this)}><Text>Add</Text></Button>
          </Row>
        </Grid>   
        </Content>
      </Container>
      <Footerapp/>
      </View>
    );
  }
}

const styles ={
  mainComp:{
    marginTop:20,
    alignItems:'center'
  },
  textComp:
  {
    marginTop:25,
    marginLeft:25,
    fontSize:15,
    fontWeight:'300'
  },
  cardComp:
  {
    margin:5,
    fontSize:15,
    padding:5,
    borderRadius:15
  }
};