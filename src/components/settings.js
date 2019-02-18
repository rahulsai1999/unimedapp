import React, {Component} from 'react';
import {Platform, StyleSheet, View,AsyncStorage} from 'react-native';
import Footerapp from './footerapp';
import { Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class setings extends React.Component {
  
  onlogout()
  {
    AsyncStorage.removeItem('token');
    Actions.auth()
  }
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Settings</Text></Header>
        <Content padder>
          <Button danger onPress={this.onlogout.bind(this)}><Text>Logout</Text></Button>
        </Content>
      </Container>
        <Footerapp/>
      </View>
    );
  }
}