import React, {Component} from 'react';
import {Platform, StyleSheet, View,AsyncStorage} from 'react-native';
import Footerapp from './footerapp';
import { Spinner, Container, Header,Fab,Icon,Card, CardItem , Content, Button, Text, Body ,H3,Right,List,ListItem} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Listite from './listitem';
import { AppHeader } from './reusables/AppHeader';
import FooterTab from './reusables/FooterTab';


export default class reports extends React.Component {
  constructor()
  {
    super();
    this.state={
      isLoading:true,
      userData:{}
    };
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
    });
  }

  renderActualData()
  {
    return this.state.userData.reports.map((val)=>{
      return(
        <View>
          <Listite 
            key={val}
            rephead={val.title}
            docname={val.docid}
            reptext={val.remarks}
            date={val.date}
            uri={val.reportUrl}/>
        </View>
      )
    })
  }

  renderDataorSpinner()
  {
    if(this.state.isLoading)
    {
      return(
        <View>
        <Spinner/>
        </View>
      )
    }
    else
    {

      return(
        <View>
          {this.renderActualData()}
        </View>
      )
    }
  
  }
  render() {
    return (
      <View style={{flex:1}}>
      <AppHeader heading="Reports"/>
       {//} <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Reports</Text></Header>
    }
    <View style={{flex:8}}>

          {this.renderDataorSpinner()}

          </View>

          <View style={{flex:1}}>
        <FooterTab/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 5,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});