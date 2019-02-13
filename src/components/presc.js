import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Footerapp from './footerapp';
import { Container, Header, Card, CardItem , Content, Button, Text, Body,ListItem,CheckBox} from 'native-base';

export default class presc extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Prescriptions</Text></Header>
        <Content padder>
        <ListItem>
            <CheckBox/>
            <Body>
              <Text>Paracetamol</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox/>
            <Body>
              <Text>Betadine</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox/>
            <Body>
              <Text>Amoxicillin</Text>
            </Body>
          </ListItem>
          
        </Content>
      </Container>
        <Footerapp/>
      </View>
    );
  }
}