import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class splashafter extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Home</Text></Header>
        <Content padder>
          <Text>Splash Screen2</Text>
          <Button onPress={Actions.login.bind(this)}><Text>Goto</Text></Button>
        </Content>
      </Container>
      </View>
    );
  }
}