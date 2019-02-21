import React, {Component} from 'react';
import {Platform, StyleSheet, View,AsyncStorage} from 'react-native';
import Footerapp from './footerapp';
import GoogleFit from 'react-native-google-fit';
import ProgressCircle from 'react-native-progress-circle';
import {Spinner,Fab, Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Foundation'

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
      userData:{},
      gfitData:{}
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
            percent={(this.state.gfitData[0].steps[1].value/10000)*100}
            radius={70}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            style={{marginLeft:25,marginTop:25}}>
            <Icon size={30} color="#3399FF" name="foot"></Icon>
            <Text style={{ fontSize: 18 }}>{this.state.gfitData[0].steps[1].value}</Text>
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
      startDate: "2019-02-19T00:00:17.971Z", // required ISO8601Timestamp
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
  }
  
  render() {
    return (
      <View style={{height:1458}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Home</Text></Header>
        <Content padder>
          {this.renderDataOrSpinner()}
          {this.renderGfitorSpinner()}
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
