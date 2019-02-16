import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Footerapp from './footerapp';
import { Container, Header, Card, CardItem , Content, Button, Text, Body,ListItem,CheckBox,Right} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons'

export default class presc extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Prescriptions</Text></Header>
        <Content>
        <Card>
          <CardItem header>
              <Text>Dr.Rajmohan</Text>
              <Right>
                <Text>29/03/2019</Text>
              </Right>
          </CardItem>
          <CardItem>
            <Text>Paracetamol</Text>
              <Right>
                <Icon name="sunrise" size={25} color="orange" /><Icon name="sun" size={25} color="orange" />
                <Icon name="sunset" size={25} color="orange" />
                <Icon2 name="ios-cloudy-night" size={25} color="black" />
              </Right>
          </CardItem>
          <CardItem>
            <Text>Paracetamol</Text>
              <Right>
                <Icon name="sunrise" size={25} color="orange" /><Icon name="sun" size={25} color="orange" />
                <Icon name="sunset" size={25} color="orange" />
                <Icon2 name="ios-cloudy-night" size={25} color="black" />
              </Right>
          </CardItem>
          <CardItem>
            <Text>Paracetamol</Text>
              <Right>
                <Icon name="sunrise" size={25} color="orange" /><Icon name="sun" size={25} color="orange" />
                <Icon name="sunset" size={25} color="orange" />
                <Icon2 name="ios-cloudy-night" size={25} color="black" />
              </Right>
          </CardItem>
        </Card>
        </Content>
      </Container>
        <Footerapp/>
      </View>
    );
  }
}

