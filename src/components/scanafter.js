import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,AsyncStorage} from 'react-native';
import { Spinner } from 'native-base';
import DisplayField from './displayfield';
import { Button } from 'react-native-elements';

export default class scanafter extends React.Component {
  constructor()
  {
    super();

    this.state={
      isLoading:true,
      sddet:{}
    }
  }
  
  renderDataOrSpinner()
  {
    if(this.state.isLoading)
    {
      return(
        <View style={{flex:1}}>
          <Spinner/>
          <Text>Loading Session Details</Text>
        </View>
      )
    }
    else
    {
      return(
        <View style={{flex:1}}>
        <View>
          <DisplayField label="Message 1" value={this.state.sddet.message1}/>
          <DisplayField label="Message 2" value={this.state.sddet.message2}/>
        </View>
        </View>
      )
    }
  }
  
  componentDidMount()
  {
    AsyncStorage.getItem('token')
    .then((token)=>{
    fetch('https://unimedapi.herokuapp.com/session/create',
    {
    method:'post',
    body:JSON.stringify({docid:this.props.uri}),
    headers:{'Accept':'application/json','Content-Type':'application/json','Authorization':'JWT '+token}})
    .then(response=>response.json())
    .then((response) =>
      {
        console.log(response);
        this.setState(
          {
            isLoading:false,
            sddet:response
          }
        )
      })
    })
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
      {this.renderDataOrSpinner()}
      </View>
    );
  }
}