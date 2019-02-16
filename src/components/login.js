import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class splashafter extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Login</Text></Header>
        <Content padder>
          <Text>Login</Text>
          <Button onPress={Actions.home.bind(this)}><Text>Login</Text></Button>
          <Text>Don't have an account</Text>
          <Button onPress={Actions.register.bind(this)}><Text>Sign Up</Text></Button>
        </Content>
      </Container>
      </View>
    );
  }
}