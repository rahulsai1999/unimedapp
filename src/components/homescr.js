import React, {Component} from 'react';
import {Platform, StyleSheet, View,AsyncStorage} from 'react-native';
import Footerapp from './footerapp';
import GoogleFit from 'react-native-google-fit';
import ProgressCircle from 'react-native-progress-circle';
import {Spinner,Fab, Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Foundation';
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
      gfitCal:{}
    };
  }

  renderGfitorSpinner()
  {
    if(this.state.isGLoading)
    {
      return(

        <View style={styles.mainComp}>
        <Spinner/>
        </View>
      )
    }
    else
    {
      return(
        <View>
        <ProgressCircle
            percent={(this.state.gfitData[0].steps[0].value/10000)*100}
            radius={70}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            style={{marginLeft:25,marginTop:25}}>
            <Icon size={30} color="#3399FF" name="foot"></Icon>
            <Text style={{ fontSize: 18 }}>{this.state.gfitData[0].steps[0].value}</Text>
        </ProgressCircle>
        </View>
      )
    }
  }
  
  renderGfit2orSpinner()
  {
    if(this.state.isG2)
    {
      return(

        <View style={styles.mainComp}>
        <Spinner/>
        </View>
      )
    }
    else
    {
      return(
        <View>
        <ProgressCircle
            percent={(this.state.gfitDist[0].distance/10000)*100}
            radius={70}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            style={{marginLeft:25,marginTop:25}}>
            <Icon size={30} color="#3399FF" name="foot"></Icon>
            <Text style={{ fontSize: 18 }}>{this.state.gfitDist[0].distance}</Text>
        </ProgressCircle>
        </View>
      )
    }
  }
  renderGfit3orSpinner()
  {
    if(this.state.isG3)
    {
      return(

        <View style={styles.mainComp}>
        <Spinner/>
        </View>
      )
    }
    else
    {
      return(
        <View>
        <ProgressCircle
            percent={(this.state.gfitCal[0].calorie/3000)*100}
            radius={70}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            style={{marginLeft:25,marginTop:25}}>
            <Icon size={30} color="#3399FF" name="foot"></Icon>
            <Text style={{ fontSize: 18 }}>{this.state.gfitCal[0].calorie}</Text>
        </ProgressCircle>
        </View>
      )
    }
  }
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
        <View style={{flex:1}}>
        <Text>Good Morning {this.state.userData.name}</Text>
        <Text>Height: {this.state.userData.height} </Text>
        <Text>Weight: {this.state.userData.weight}</Text>
        <Text>Blood Group: {this.state.userData.bldgrp} </Text>
        </View>
      )
    }
  }
  
  componentDidMount()
  {
    AsyncStorage.getItem('token')
    .then((token)=>{
    fetch('https://unimedapi.herokuapp.com/curuser',
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
          {this.renderDataOrSpinner()}
          {this.renderGfitorSpinner()}
          {this.renderGfit2orSpinner()}  
          {this.renderGfit3orSpinner()}      
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
  }
};
