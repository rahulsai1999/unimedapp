import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Footerapp from './footerapp';
import { Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';

export default class homescr extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
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