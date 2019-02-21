import React, {Component} from 'react';
import {Platform, StyleSheet, View,AsyncStorage} from 'react-native';
import {Content,CardItem,Card,Body,Text,Left,Button,Spinner, Container, Toast } from 'native-base';
import DisplayField from './displayfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

export default class scanafter extends React.Component {
  constructor()
  {
    super();

    this.state={
      isLoading:true,
      sddet:{}
    }
  }
  termin()
  {
    AsyncStorage.getItem('token')
    .then((token)=>{
    fetch('https://unimedapi.herokuapp.com/session/terminate/'+this.state.sddet.message2,
    {
    method:'get',
    headers:{'Authorization':'JWT '+token}})
    .then(response=>response.json())
    .then((response) =>
      {
        console.log(response);
        Actions.home()
      })
    })

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
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
                <Body>
                  <Text>{moment(new Date()).format("DD-MM-YYYY")}</Text>
                </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{this.state.sddet.message1}</Text>
                <Text></Text>
                <Text>Session iD: {this.state.sddet.message2}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}} onPress={this.termin.bind(this)}>
                  <Icon name="cancel" color='#87838B' />
                  <Text>Terminate Session</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
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
      <Container>
      {this.renderDataOrSpinner()}
      </Container>
    );
  }
}