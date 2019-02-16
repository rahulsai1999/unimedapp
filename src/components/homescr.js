import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Footerapp from './footerapp';
import { Fab, Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';
import Actions from 'react-native-router-flux';

export default class homescr extends React.Component {
  render() {
    return (
      <View style={{height:1458}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Home</Text></Header>
        <Content padder>
          <Text>Home Screen</Text>
        </Content>
      </Container>
      <Footerapp/>
      </View>
    );
  }
}